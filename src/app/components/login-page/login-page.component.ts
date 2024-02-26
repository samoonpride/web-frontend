import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginDto } from 'src/app/interfaces/requests/UserLoginDto';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  user: UserLoginDto = {
    username: "",
    password: "",
  };

  isAlertHidden: boolean = true;

  alert: string = "";

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
  ) {}

  signIn() {
    this.authService.login(this.user).subscribe({
      next: (userTokenDto) => {
        this.storageService.saveToken(userTokenDto.token);
        this.isAlertHidden = true;
        this.router.navigateByUrl("/issues");
      },
      error: (err: HttpErrorResponse) => {
        this.isAlertHidden = false;
        if (err.status === 401) {
          this.alert = "Invalid username or password.";
        } else {
          this.alert = "An error occurred. Please try again later.";
        }
      }
    });
  }

}
