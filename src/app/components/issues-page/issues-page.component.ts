import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/interfaces/responses/Issue';
import { IssueService } from 'src/app/services/issue/issue.service';

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
    longtitude: 0,
    thumbnailPath: ""
  };

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
  }

  onIssueSearchHandle() {
    this.queriedIssues = this.issues.filter(issue => {
      return this.issueSearch === "" ? true :
        issue.title.includes(this.issueSearch) || issue.issueId.toString() === this.issueSearch;
    });
  }


}
