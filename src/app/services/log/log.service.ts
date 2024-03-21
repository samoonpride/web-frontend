import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from 'src/app/interfaces/Log';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private http: HttpClient
  ) { }

  public getLogs() {
    return this.http.get<Log[]>(environment.apiUrl + "/staff");
  }

}
