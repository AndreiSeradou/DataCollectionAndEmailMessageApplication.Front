import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponceModel } from '../Models/ResponceModel';

@Injectable({
  providedIn: 'root'
})
export class AuthToRequestService {

  private readonly baseURL:string="http://localhost:8090/";

  constructor(private httpClient:HttpClient) { }

  public login(email:string,password:string)
  {
    const body={
      email:email,
      password:password
    }

    return this.httpClient.post<ResponceModel>(this.baseURL+"AuthManagement/Login",body);
  }

  public register(fullname:string,email:string,password:string)
  {

    const body={
      username:fullname,
      email:email,
      password:password
    }

    return this.httpClient.post<ResponceModel>(this.baseURL+"AuthManagement/Register",body);
  }

}
