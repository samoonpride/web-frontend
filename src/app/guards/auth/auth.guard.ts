import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';

export const nonLoggingInAuthGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = inject(StorageService).getToken() !== null;
  return isLoggedIn ? true : inject(Router).parseUrl("/login");
};

export const LoggedInAuthGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = inject(StorageService).getToken() !== null;
  return isLoggedIn ? inject(Router).parseUrl("/issues") : true;
};
