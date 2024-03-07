import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { initDropdowns, initFlowbite } from 'flowbite';
import { timeInterval } from 'rxjs';
import { Status } from 'src/app/constants/Status';
import { Location } from 'src/app/interfaces/Location';
import { Issue } from 'src/app/interfaces/responses/Issue';
import { Staff } from 'src/app/interfaces/responses/Staff';
import { IssueService } from 'src/app/services/issue/issue.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-issue-detail-modal',
  templateUrl: './issue-detail-modal.component.html',
  styleUrls: ['./issue-detail-modal.component.css']
})
export class IssueDetailModalComponent implements OnInit {
  @Input({required: true}) issue: Issue = {
    issueId: 0,
    title: "",
    latitude: 0,
    longitude: 0,
    thumbnailPath: "",
    assigneeIds: [],
    status: "IN_CONSIDERATION"
  };

  staffs: Staff[] = [];
  queriedStaffs: Staff[] = [];
  issueDetailStaffSearch: string = "";

  selectedStaffs: Staff[] = [];

  selectedFiles: File[] = [];
  srcSelectedFiles: string[] = [];

  statuses: string[] = Object.values(Status);
  selectedStatus: string = "";

  location: Location = {
    lat: environment.defaultMapPosition.lat,
    lng: environment.defaultMapPosition.lng,
  };

  ngOnInit() {
    this.staffService.getStaffs().subscribe(staffs => {
      this.staffs = staffs;
      this.staffs = this.staffs.sort((a, b) => {
        return a.username.localeCompare(b.username);
      })
      this.queriedStaffs = this.staffs;

      this.selectedStaffs = [];
      this.issue.assigneeIds.forEach(assigneeId => {
        const staff = this.staffs.find((staff) => {
          return staff.id === assigneeId;
        });
        if (staff) {
          this.selectedStaffs.push(staff);
        }
      });

      this.location.lat = this.issue.latitude;
      this.location.lng = this.issue.longitude;

      this.selectedStatus = this.issue.status;

      if (this.issue.thumbnailPath) {
        this.srcSelectedFiles.push(environment.thumbnailPathUrl + this.issue.thumbnailPath);
      }


    });

    initFlowbite();

  }

  constructor(
    private staffService: StaffService,
    private issueService: IssueService,
  ) { }

  staffSearchChange() {
    this.queriedStaffs = this.staffs.filter(staff => {
      return staff.username.includes(this.issueDetailStaffSearch);
    })
  }

  staffSelectCheckboxChange(staff: Staff) {
    if (this.selectedStaffs.includes(staff)) {
      this.selectedStaffs = this.selectedStaffs.filter(selStaff => {
        return selStaff !== staff;
      })
    } else {
      this.selectedStaffs.push(staff);
      this.selectedStaffs = this.selectedStaffs.sort((a, b) => {
        return a.username.localeCompare(b.username);
      });
    }
    console.log(this.selectedStaffs);

  }

  fileUpload() {
    document.getElementById("file")?.click();
  }

  selectedFilesChange(event: EventTarget | null) {
    this.selectedFiles = [];
    this.srcSelectedFiles = [];
    const files = (event as HTMLInputElement).files;
    if (files) {
      for (let i = 0 ; i < files.length ; ++i) {
        const file = files.item(i);
        if (file) {
          this.selectedFiles.push(file);
          this.srcSelectedFiles.push(URL.createObjectURL(file));
        }
      }
    }
  }

  markerEventHandle(location: Location) {
    this.location = location;
  }

  onSaveHandle() {
    const assigneeIds: number[] = [];
    this.selectedStaffs.forEach(staff => {
      assigneeIds.push(staff.id);
    })

    const issue: Issue = {
      issueId: this.issue.issueId,
      assigneeIds: assigneeIds,
      title: this.issue.title,
      latitude: this.location.lat,
      longitude: this.location.lng,
      status: this.selectedStatus,
      duplicateIssueId: this.issue.duplicateIssueId,
    }

    this.issueService.editIssues(issue, this.selectedFiles[0]).subscribe({
      complete: () => {
        window.location.reload();
      }
    });

  }


}
