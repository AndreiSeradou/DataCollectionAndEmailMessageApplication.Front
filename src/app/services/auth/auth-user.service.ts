import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponses } from 'src/app/interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  
  private readonly baseURL:string="http://localhost:8090/";

  constructor(private httpClient:HttpClient) { }

  public login(email:string,password:string)
  {
    const body={
      email:email,
      password:password
    }

    return this.httpClient.post<IResponses>(this.baseURL+"AuthManagement/login",body);
  }

  public register(fullname:string,email:string,password:string)
  {

    const body={
      username:fullname,
      email:email,
      password:password
    }

    return this.httpClient.post<IResponses>(this.baseURL+"AuthManagement/register",body);
  }

}
