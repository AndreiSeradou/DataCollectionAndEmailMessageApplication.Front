import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  private readonly baseURL:string="http://localhost:8090/";

  constructor(private httpClient:HttpClient) { }

  public getAllUsers()
  {
    let token = localStorage.getItem("token");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return  this.httpClient.get<User[]>(this.baseURL+"Administration/all",{headers:headers});
  }

  public GetUserGoogleSubscriptions(userName:string)
  {
    let token = localStorage.getItem("token");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'userName': `${userName}`
    });
    return  this.httpClient.get<User[]>(this.baseURL+"Administration/google-subscriptions",{headers:headers});
  }

  public GetUserWheatherSubscriptions(userName:string)
  {
    let token = localStorage.getItem("token");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'userName': `${userName}`
    });
    return  this.httpClient.get<User[]>(this.baseURL+"Administration/weather-subscriptions",{headers:headers});
  }

  public GetUserFootballSubscriptions(userName:string)
  {
    let token = localStorage.getItem("token");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'userName': `${userName}`
    });
    return  this.httpClient.get<User[]>(this.baseURL+"Administration/football-subscriptions",{headers:headers});
  }
}
