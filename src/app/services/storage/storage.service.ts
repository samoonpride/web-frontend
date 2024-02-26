import { Injectable } from '@angular/core';

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

}
