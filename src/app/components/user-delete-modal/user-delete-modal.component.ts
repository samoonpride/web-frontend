import { Component, Input, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Staff } from 'src/app/interfaces/responses/Staff';
import { StaffService } from 'src/app/services/staff/staff.service';

@Component({
  selector: 'app-user-delete-modal',
  templateUrl: './user-delete-modal.component.html',
  styleUrls: ['./user-delete-modal.component.css']
})
export class UserDeleteModalComponent implements OnInit {

  @Input({required: true, alias: "account"}) staff: Staff | null = null;

  constructor(
    private staffService: StaffService,
  ) { }

  ngOnInit() {
    initFlowbite();
  }

  onDeleteHandle() {
    if (this.staff) {
      this.staffService.deleteStaff(this.staff?.id).subscribe({
        complete: () => {
          window.location.reload();
        }
      });
    }
  }

}
