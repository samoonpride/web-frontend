import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffRole } from 'src/app/constants/StaffRole';
import { StaffCreateDto } from 'src/app/interfaces/requests/StaffCreateDto';
import { StaffService } from 'src/app/services/staff/staff.service';

@Component({
  selector: 'app-successfully-created-account',
  templateUrl: './successfully-created-account.component.html',
  styleUrls: ['./successfully-created-account.component.css']
})
export class SuccessfullyCreatedAccountComponent implements OnInit {

  newStaff: any;


  constructor(
    private staffService: StaffService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.newStaff = this.staffService.getTempCreatedStaff();
  }

  onReturnToDashboardHandle() {
    this.router.navigateByUrl("/users").then(() => {
      window.location.reload();
    });
  }
}
