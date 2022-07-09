import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userKey } from 'src/app/constants/user.constant';
import { IUser } from 'src/app/interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  private readonly baseURL:string="http://localhost:8090/";

  constructor(private httpClient:HttpClient) { }

  public getAllUsers()
  {
    let token = localStorage.getItem(userKey);

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return  this.httpClient.get<IUser[]>(this.baseURL+"Administration/all-users",{headers:headers});
  }
}
