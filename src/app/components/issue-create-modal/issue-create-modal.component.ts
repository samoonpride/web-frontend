import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-issue-create-modal',
  templateUrl: './issue-create-modal.component.html',
  styleUrls: ['./issue-create-modal.component.css']
})
export class IssueCreateModalComponent {
  logMarker(location: number[]) {
    console.log(location);
  }
}
