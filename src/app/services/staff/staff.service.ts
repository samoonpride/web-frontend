import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaffApproveDto } from 'src/app/interfaces/requests/StaffApproveDto';
import { StaffCreateDto } from 'src/app/interfaces/requests/StaffCreateDto';
import { StaffDenyDto } from 'src/app/interfaces/requests/StaffDenyDto';
import { UserLoginDto } from 'src/app/interfaces/requests/UserLoginDto';
import { Staff } from 'src/app/interfaces/responses/Staff';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private tempCreatedStaff: any;

  constructor(
    private http: HttpClient
  ) { }

  public getStaffs() {
    return this.http.get<Staff[]>(environment.apiUrl + "/staff");
  }

  public createStaff(staffCreateDto: StaffCreateDto) {
    return this.http.post<UserLoginDto>(environment.apiUrl + "/staff/register", staffCreateDto);
  }

  public deleteStaff(staffId: number) {
    return this.http.delete(environment.apiUrl + "/staff/" + staffId);
  }

  public getTempCreatedStaff() {
    return this.tempCreatedStaff;
  }

  public setTempCreatedStaff(staff: any) {
    this.tempCreatedStaff = staff;
  }

  public approve(staffApproveDto: StaffApproveDto) {
    return this.http.post(environment.apiUrl + "/staff/approve", staffApproveDto);
  }

  public deny(staffDenyDto: StaffDenyDto) {
    return this.http.post(environment.apiUrl + "/staff/decline", staffDenyDto);
  }

}
