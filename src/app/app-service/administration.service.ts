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
    return  this.httpClient.get<User[]>(this.baseURL+"Administration/GetAllUsers",{headers:headers});
  }

  public GetUserGoogleSubscriptions(userName:string)
  {
    let token = localStorage.getItem("token");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return  this.httpClient.get<User[]>(this.baseURL+"Administration/GetUserGoogleSubscriptions?="+userName,{headers:headers});
  }

  public GetUserWheatherSubscriptions(userName:string)
  {
    let token = localStorage.getItem("token");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return  this.httpClient.get<User[]>(this.baseURL+"Administration/GetUserWheatherSubscriptions?="+userName,{headers:headers});
  }

  public GetUserFootballSubscriptions(userName:string)
  {
    let token = localStorage.getItem("token");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return  this.httpClient.get<User[]>(this.baseURL+"Administration/GetUserFootballSubscriptions?="+userName,{headers:headers});
  }
}
