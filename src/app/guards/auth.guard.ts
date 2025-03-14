import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { UserService } from '../services/user.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  return inject.isLoggedIn()?true: inject(Router).createUrlTree(['login']);
  
};