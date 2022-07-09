import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userKey } from 'src/app/constants/user.constant';
import { IApi } from 'src/app/interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseURL:string="http://localhost:8090/";

  constructor(private httpClient:HttpClient) { }

  public GetAllApis()
  {
    const headers=new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return  this.httpClient.get<string[]>(this.baseURL+"Api/all",{headers:headers});
  }

  public Create(model : IApi)
  {
    let token = localStorage.getItem(userKey);

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body={
      name:model.name,
      url:model.url,
      apiKey:model.apiKey,
      apiHost:model.apiHost,
      apiKeyHeader :model.apiKeyHeader,
      apiHostHeader:model.apiHostHeader
    }

    return  this.httpClient.post<boolean>(this.baseURL+"Api/create",body,{headers:headers});
  }

  public Update(model : IApi)
  {
    let token = localStorage.getItem(userKey);

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body={
      name:model.name,
      url:model.url,
      apiKey:model.apiKey,
      apiHost:model.apiHost,
      apiKeyHeader :model.apiKeyHeader,
      apiHostHeader:model.apiHostHeader
    }
    
    return  this.httpClient.put<boolean>(this.baseURL+"Api/update",body,{headers:headers});
  }

  public Delete(model : IApi)
  {
    let token = localStorage.getItem(userKey);

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'id': `${model.id}`,
      'name': `${model.name}`,
      'url': `${model.url}`,
      'apiKey': `${model.apiKey}`,
      'apiHost': `${model.apiHost}`,
      'apiKeyHeader': `${model.apiKeyHeader}`,
      'apiHostHeader': `${model.apiHostHeader}`,
    });

    return  this.httpClient.delete<boolean>(this.baseURL+"Api/delete",{headers:headers});
  }
}
