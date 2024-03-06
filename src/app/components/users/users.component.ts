import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Staff } from 'src/app/interfaces/responses/Staff';
import { StaffService } from 'src/app/services/staff/staff.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  staffs: Staff[] = [];
  queriedStaffs: Staff[] = [];

  userSearch: string = "";

  selectedStaff: Staff | null = null;

  currentStaff: Staff | undefined;

  constructor(
    private router: Router,
    private staffService: StaffService,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.staffService.getStaffs().subscribe((staffs) => {
      this.staffs = staffs.sort((a, b) => {
        return a.username.localeCompare(b.username);
      });
      this.queriedStaffs = this.staffs;
      this.currentStaff = this.queriedStaffs.find((staff) => {
        const username = this.storageService.getClaims()?.username;
        if (!username) {
          return false;
        }

        return staff.username === username;
      })
    })
    initFlowbite();
  }

  onCreateHandle() {
    this.router.navigateByUrl("/account/create").then(() => {
      window.location.reload();
    });
  }

  onUserSearchChange() {
    this.queriedStaffs = this.staffs.filter(staff => {
      return this.userSearch === "" ? true : staff.username.includes(this.userSearch);
    })
  }

  setSelectedStaff(staff: Staff) {
    this.selectedStaff = staff;
  }

}
