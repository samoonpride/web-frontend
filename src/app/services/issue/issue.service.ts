import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from 'src/app/interfaces/responses/Issue';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(
    private http: HttpClient,
  ) { }

  public getIssues() {
    return this.http.get<Issue[]>(environment.apiUrl + "/issue/get/all");
  }

  // public editIssues(issue: Issue) {
  //   return this.http.put(environment.apiUrl + "/issue/" + issue.issueId, );
  // }

}
