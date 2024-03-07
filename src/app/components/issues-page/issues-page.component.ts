import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/interfaces/responses/Issue';
import { IssueService } from 'src/app/services/issue/issue.service';
import { environment } from 'src/environments/environment';
import { LeafletMapComponent } from '../leaflet-map/leaflet-map.component';

@Component({
  selector: 'app-issues-page',
  templateUrl: './issues-page.component.html',
  styleUrls: ['./issues-page.component.css']
})
export class IssuesPageComponent implements OnInit {

  issues: Issue[] = [];
  queriedIssues: Issue[] = [];

  issueSearch: string = "";

  selectedIssue: Issue = {
    issueId: 0,
    title: "",
    latitude: 0,
    longitude: 0,
    thumbnailPath: "",
    assigneeIds: [],
    status: "IN_CONSIDERATION"
  };

  thumbnailPathUrl: string = environment.thumbnailPathUrl;

  filter: string[] = [];

  constructor(
    private issueService: IssueService,
  ) { }

  ngOnInit() {
    this.issueService.getIssues().subscribe({
      next: (issues) => {
        this.issues = issues;
        this.queriedIssues = this.issues;
      }
    })
  }

  handleSelectedIssueClick(issue: Issue) {
    this.selectedIssue = issue;
    LeafletMapComponent.map?.setView([issue.latitude, issue.longitude]);
    LeafletMapComponent.marker?.setLatLng([issue.latitude, issue.longitude]);
  }

  onIssueSearchHandle() {
    this.queriedIssues = this.issues.filter(issue => {
      return this.issueSearch === "" ? true :
        issue.title.includes(this.issueSearch) || issue.issueId.toString() === this.issueSearch;
    });

    this.queriedIssues = this.queriedIssues.filter(issue => {
      return !this.filter.includes(issue.status);
    })

    console.log(this.queriedIssues);
    console.log(this.filter);



  }

  filterStatusSelect(status: string) {
    const element = document.getElementById(status);
    if (element) {
      if (this.filter.includes(status)) {
        var style = window.getComputedStyle(element);
        element.style.backgroundColor = style.borderColor;
        this.filter = this.filter.filter(s => {
          return s !== status;
        })
      } else {
        element.style.backgroundColor = "transparent";
        this.filter.push(status);
      }

      this.onIssueSearchHandle();
    }
  }




}
