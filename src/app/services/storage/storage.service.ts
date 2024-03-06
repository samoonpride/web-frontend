import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { JwtTokenDecoded } from 'src/app/interfaces/JwtTokenDecoded';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly TOKEN_KEY_NAME: string = "token";

  constructor() { }

  public saveToken(token: string, isPersistent: boolean = false) {
    if (isPersistent) {
      localStorage.setItem(this.TOKEN_KEY_NAME, token);
    } else {
      sessionStorage.setItem(this.TOKEN_KEY_NAME, token);
    }
  }

  public removeToken() {
    localStorage.removeItem(this.TOKEN_KEY_NAME);
    sessionStorage.removeItem(this.TOKEN_KEY_NAME);
  }

  public getToken() {
    return localStorage.getItem(this.TOKEN_KEY_NAME) ?? sessionStorage.getItem(this.TOKEN_KEY_NAME);
  }

  public getClaims() {
    try {
      return jwtDecode<JwtTokenDecoded>(this.getToken() ?? "");
    } catch (e) {
      return null;
    }
  }

}
