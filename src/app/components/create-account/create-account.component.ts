import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaffRole } from 'src/app/constants/StaffRole';
import { StaffCreateDto } from 'src/app/interfaces/requests/StaffCreateDto';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  username: string = "";
  password: string = "";
  confirmPassword: string = "";

  isAlertHidden: boolean = true;
  alert: string = "";

  constructor(
    private staffService: StaffService,
    private router: Router,
  ) { }

  onCreateHandle() {
    this.isAlertHidden = true;

    if (this.username === "") {
      this.alert = "Username cannot be empty.";
      this.isAlertHidden = false;
      return;
    }

    if (this.username.includes(" ")) {
      this.alert = "Username must not contain space.";
      this.isAlertHidden = false;
      return;
    }

    if (this.password.length < 8) {
      this.alert = "Password must be longer than 8 characters.";
      this.isAlertHidden = false;
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.alert = "Password does not match. Please try again."
      this.isAlertHidden = false;
      return;
    }

    const hashedPassword = Md5.hashStr(this.password);

    const staffCreateDto: StaffCreateDto = {
      username: this.username,
      password: hashedPassword,
    }

    this.staffService.createStaff(staffCreateDto).subscribe({
      complete: () => {
        this.staffService.setTempCreatedStaff(staffCreateDto);
        this.router.navigateByUrl("/register/success");
      },
      error: () => {
        this.alert = "An unknown error occurred. Please try again.";
        this.isAlertHidden = false;
      }
    })
  }
}
