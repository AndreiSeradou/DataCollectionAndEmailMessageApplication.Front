import { Component } from '@angular/core';
import { adminRole, appName, appRole, userKey, userRole } from './constants/user.constant';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webAuth';
  constructor(){}
  onLogout()
  {
    localStorage.removeItem(userKey);
    localStorage.removeItem(appRole);
    localStorage.removeItem(appName);
  }

 get isUserLogin()
  {
    const user = localStorage.getItem(userKey);
    const role = localStorage.getItem(appRole);
    return user && user.length>0 && role == userRole;
  }

  get isAdminLogin()
  {
    const user = localStorage.getItem(userKey);
    const role = localStorage.getItem(appRole);
    return user && user.length>0 && role == adminRole;
  }
}
