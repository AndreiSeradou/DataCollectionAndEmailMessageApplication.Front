import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Constants } from '../Helper/Constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem(Constants.USER_KEY);
    const role = localStorage.getItem(Constants.USER_ROLE);
 
    if (token)
    {
      if (role == "User")
      {
        return true
      }

      if (role == "Admin")
      {
        return true
      }

      alert("Don't touch");
      this.router.navigate(["login"]);
      return false;
    }
    else
    {
      alert("Don't touch");
      this.router.navigate(["login"]);
      return false;
    }
  }
}
