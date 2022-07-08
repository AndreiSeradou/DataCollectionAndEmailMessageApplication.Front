import { Component } from '@angular/core';
import { userKey } from './constants/user.constant';



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
    localStorage.removeItem("role");
    localStorage.removeItem("name");
  }

 get isUserLogin()
  {
    const user = localStorage.getItem(userKey);
    const role = localStorage.getItem("role");
    return user && user.length>0 && role == "User";
  }

  get isAdminLogin()
  {
    const user = localStorage.getItem(userKey);
    const role = localStorage.getItem("role");
    return user && user.length>0 && role == "Admin";
  }
}
