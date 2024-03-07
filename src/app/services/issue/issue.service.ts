import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public editIssues(issue: Issue, thumbnailFile: File) {
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    const formData = new FormData();
    formData.append('image', thumbnailFile);
    formData.append('issue', JSON.stringify(issue));

    const duplicateIssueId = issue.duplicateIssueId;
    if (duplicateIssueId) {
      formData.append('duplicateIssueId', duplicateIssueId.toString());
    }

    console.log(formData);


    return this.http.patch(environment.apiUrl + "/issue/" + issue.issueId, formData, {headers: headers});
  }

}
