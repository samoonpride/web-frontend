import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { HttpClient } from '@angular/common/http';
import { UserTokenDto } from 'src/app/interfaces/responses/UserTokenDto';
import { environment } from 'src/environments/environment';
import { UserLoginDto } from 'src/app/interfaces/requests/UserLoginDto';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (
    private http: HttpClient,
  ) { }

  public login(user: UserLoginDto) {
    const userLoginDto: UserLoginDto = {
      username: user.username,
      password: Md5.hashStr(user.password),
    };

    return this.http.post<UserTokenDto>(environment.apiUrl + "/staff/login", userLoginDto);
  }

}
