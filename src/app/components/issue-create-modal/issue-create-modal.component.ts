import { Component, EventEmitter, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Status } from 'src/app/constants/Status';
import { Location } from 'src/app/interfaces/Location';
import { Issue } from 'src/app/interfaces/responses/Issue';
import { Staff } from 'src/app/interfaces/responses/Staff';
import { StaffService } from 'src/app/services/staff/staff.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-issue-create-modal',
  templateUrl: './issue-create-modal.component.html',
  styleUrls: ['./issue-create-modal.component.css']
})
export class IssueCreateModalComponent implements OnInit {

  staffs: Staff[] = [];
  queriedStaffs: Staff[] = [];
  staffSearch: string = "";

  selectedStaffs: Staff[] = [];

  selectedFiles: File[] = [];
  srcSelectedFiles: string[] = [];

  statuses: string[] = Object.keys(Status);

  location: Location = {
    lat: environment.defaultMapPosition.lat,
    lng: environment.defaultMapPosition.lng,
  };

  constructor(
    private staffService: StaffService,
  ) { }

  ngOnInit() {
    this.staffService.getStaffs().subscribe(staffs => {
      this.staffs = staffs;
      this.staffs = this.staffs.sort((a, b) => {
        return a.username.localeCompare(b.username);
      })
      this.queriedStaffs = this.staffs;
    });

  }

  staffSearchChange() {
    this.queriedStaffs = this.staffs.filter(staff => {
      return staff.username.includes(this.staffSearch);
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

  onClickHandle() {
    // const issue: Issue = {
    //   issueId: 0,
    //   title: "",
    //   latitude: this.location.lat,
    //   longtitude: this.location.lng,
    //   thumbnailPath: ""
    // }

    // console.log(issue);

  }

  markerEventHandle(location: Location) {
    this.location = location;
  }
}
