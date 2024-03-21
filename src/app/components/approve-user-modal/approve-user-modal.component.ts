import { Component, Input, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { StaffApproveDto } from 'src/app/interfaces/requests/StaffApproveDto';
import { Staff } from 'src/app/interfaces/responses/Staff';
import { StaffService } from 'src/app/services/staff/staff.service';

@Component({
  selector: 'app-approve-user-modal',
  templateUrl: './approve-user-modal.component.html',
  styleUrls: ['./approve-user-modal.component.css']
})
export class ApproveUserModalComponent implements OnInit {

  @Input({required: true, alias: "account"}) staff: Staff | null = null;

  availableRoles: string[] = ["STAFF", "OPERATOR"];
  selectedRole: string = this.availableRoles[0];

  constructor(
    private staffService: StaffService,
  ) { }

  ngOnInit(): void {
    initFlowbite();
  }

  onApproveHandle() {
    if (this.staff) {
      const staffApproveDto: StaffApproveDto = {
        username: this.staff?.username,
        role: this.selectedRole,
      };

      this.staffService.approve(staffApproveDto).subscribe({
        complete: () => {
          window.location.reload();
        }
      });
    }
  }

}
