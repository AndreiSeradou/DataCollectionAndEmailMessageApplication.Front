import { Component } from '@angular/core';
import { Constants } from './Helper/Constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataCollectionAndEmailMessageApplication.Front';

  constructor(){}

  onLogout()
  {
    localStorage.removeItem(Constants.USER_KEY);
    localStorage.removeItem("role");
    localStorage.removeItem("name");
  }

 get isUserLogin()
  {
    const user = localStorage.getItem(Constants.USER_KEY);
    const role = localStorage.getItem("role");
    return user && user.length>0 && role == "User";
  }

  get isAdminLogin()
  {
    const user = localStorage.getItem(Constants.USER_KEY);
    const role = localStorage.getItem("role");
    return user && user.length>0 && role == "Admin";
  }
}

