import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggingIn: boolean = false;

  username: string = "";
  role: string = "";

  constructor(
    private authService: AuthService,
  ) {
    const jwtClaims = this.authService.getUserData();

    if (jwtClaims) {
      this.isLoggingIn = true;
      this.username = jwtClaims?.username;
      this.role = jwtClaims?.role.toLowerCase();
    }
  }

  signOut() {
    this.authService.logout();
  }

}
