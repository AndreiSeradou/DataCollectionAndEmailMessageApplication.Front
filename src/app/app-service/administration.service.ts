import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FootballSubscriptions } from '../Models/FootballSubscriptions';
import { GoogleSubscriptions } from '../Models/GoogleSubscriptions';
import { User } from '../Models/User';
import { WheatherSubscriptions } from '../Models/WheatherSubscriptions';

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
    return  this.httpClient.get<GoogleSubscriptions[]>(this.baseURL+"Administration/google-subscriptions",{headers:headers});
  }

  public GetUserWheatherSubscriptions(userName:string)
  {
    let token = localStorage.getItem("token");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'userName': `${userName}`
    });
    return  this.httpClient.get<WheatherSubscriptions[]>(this.baseURL+"Administration/weather-subscriptions",{headers:headers});
  }

  public GetUserFootballSubscriptions(userName:string)
  {
    let token = localStorage.getItem("token");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'userName': `${userName}`
    });
    return  this.httpClient.get<FootballSubscriptions[]>(this.baseURL+"Administration/football-subscriptions",{headers:headers});
  }
}
