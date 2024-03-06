import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.css']
})
export class ChangePasswordPageComponent {

  isAlertHidden: boolean = true;
  alert: string = "";

  form = {
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  }

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
  ) {
    const claims = authService.getUserData();
    if (claims) {
      this.form.username = claims.username;
    }
  }

  onSubmit() {
    this.isAlertHidden = true;

    const hashedCurrentPassword = Md5.hashStr(this.form.currentPassword);
    const hashedNewPassword = Md5.hashStr(this.form.newPassword);
    const hashedConfirmNewPassword = Md5.hashStr(this.form.confirmNewPassword);

    if (this.form.newPassword === "" || this.form.currentPassword === "") {
      this.alert = "Password cannot be empty. Please try again.";
      this.isAlertHidden = false;
      return;
    }

    if (this.form.newPassword.length < 8) {
      this.alert = "New password must be longer than 8 characters.";
      this.isAlertHidden = false;
      return;
    }

    if (hashedNewPassword !== hashedConfirmNewPassword) {
      this.alert = "Password does not match. Please try again.";
      this.isAlertHidden = false;
      return;
    }

    const formDto = {
      username: this.form.username,
      currentPassword: hashedCurrentPassword,
      newPassword: hashedNewPassword,
    }

    this.authService.changePassword(formDto).subscribe({
      next: (userTokenDto) => {
        this.storageService.removeToken();
        this.storageService.saveToken(userTokenDto.token);
        this.router.navigateByUrl("/issues");
      },
      error: (e: HttpErrorResponse) => {
        this.alert = "Incorrect Password. Please try again.";
        this.isAlertHidden = false;
      }
    });

  }

}
