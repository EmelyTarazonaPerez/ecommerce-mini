import { CanActivateFn } from '@angular/router';
import { ServiceToken } from '../services/token.service';
import { Router } from '@angular/router'

export const authGuard: CanActivateFn = (route, state) => {
  //declaraciones
  const tokenService = new ServiceToken();
  const router = new Router()
 //----
  const token = tokenService.getToken();
  console.log(token)
  if(!token){
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
