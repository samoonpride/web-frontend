import { Component, Input, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { StaffDenyDto } from 'src/app/interfaces/requests/StaffDenyDto';
import { Staff } from 'src/app/interfaces/responses/Staff';
import { StaffService } from 'src/app/services/staff/staff.service';

@Component({
  selector: 'app-deny-user-modal',
  templateUrl: './deny-user-modal.component.html',
  styleUrls: ['./deny-user-modal.component.css']
})
export class DenyUserModalComponent implements OnInit {

  @Input({required: true, alias: "account"}) staff: Staff | null = null;

  constructor(
    private staffService: StaffService,
  ) { }

  ngOnInit(): void {
    initFlowbite();
  }

  onDenyHandle() {
    if (this.staff) {
      const staffDenyDto: StaffDenyDto = {
        username: this.staff?.username
      };

      this.staffService.deny(staffDenyDto).subscribe({
        complete: () => {
          window.location.reload();
        }
      });
    }
  }

}
