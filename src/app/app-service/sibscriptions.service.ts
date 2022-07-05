import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FootballSubscriptions } from '../Models/FootballSubscriptions';
import { GoogleSubscriptions } from '../Models/GoogleSubscriptions';
import { WheatherSubscriptions } from '../Models/WheatherSubscriptions';

@Injectable({
  providedIn: 'root'
})
export class SibscriptionsService {

  private readonly baseURL:string="http://localhost:8090/";

  constructor(private httpClient:HttpClient) { }

  public GetAllFootballSubscriptions()
  {
    let token = localStorage.getItem("token");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return  this.httpClient.get<FootballSubscriptions[]>(this.baseURL+"FootballSubscription/all",{headers:headers});
  }

  public GetAllWheatherSubscriptions()
  {
    let token = localStorage.getItem("token");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return  this.httpClient.get<FootballSubscriptions[]>(this.baseURL+"WheatherSubscription/all",{headers:headers});
  }

  public GetAllGoogleSubscriptions()
  {
    let token = localStorage.getItem("token");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return  this.httpClient.get<GoogleSubscriptions[]>(this.baseURL+"GoogleTranslateSubscription/all",{headers:headers});
  }

  public SubscribeFootball(model : FootballSubscriptions)
  {
    let token = localStorage.getItem("token");
    let userName = localStorage.getItem("name");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body={
      name:model.name,
      description:model.description,
      cronParams:model.cronParams,
      lastRunTime:model.lastRunTime,   
      userName:userName
    }

    return  this.httpClient.post<boolean>(this.baseURL+"FootballSubscription/subscribe",body,{headers:headers});
  }

  public SubscribeWheather(model : WheatherSubscriptions)
  {
    let token = localStorage.getItem("token");
    let userName = localStorage.getItem("name");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body={
      name:model.name,
      description:model.description,
      cronParams:model.cronParams,
      lastRunTime:model.lastRunTime,   
      userName:userName,
      date:model.date,
      city:model.city
    }

    return  this.httpClient.post<boolean>(this.baseURL+"WheatherSubscription/subscribe",body,{headers:headers});
  }

  public SubscribeGoogle(model : GoogleSubscriptions)
  {
    let token = localStorage.getItem("token");
    let userName = localStorage.getItem("name");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body={
      name:model.name,
      description:model.description,
      cronParams:model.cronParams,
      lastRunTime:model.lastRunTime,   
      userName:userName
    }

    return  this.httpClient.post<boolean>(this.baseURL+"GoogleTranslateSubscription/subscribe",body,{headers:headers});
  }

  public UpdateFootballSubscription(model : FootballSubscriptions)
  {
    let token = localStorage.getItem("token");
    let userName = localStorage.getItem("name");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body={
      name:model.name,
      description:model.description,
      cronParams:model.cronParams,
      lastRunTime:model.lastRunTime,   
      userName:userName
    }
    
    return  this.httpClient.put<boolean>(this.baseURL+"FootballSubscription/update",body,{headers:headers});
  }

  public UpdateWheatherSubscription(model : WheatherSubscriptions)
  {
    let token = localStorage.getItem("token");
    let userName = localStorage.getItem("name");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body={
      name:model.name,
      description:model.description,
      cronParams:model.cronParams,
      lastRunTime:model.lastRunTime,   
      userName:userName,
      date:model.date,
      city:model.city
    }
    
    return  this.httpClient.put<boolean>(this.baseURL+"WheatherSubscription/update",body,{headers:headers});
  }

  public UpdateGoogleSubscription(model : FootballSubscriptions)
  {
    let token = localStorage.getItem("token");
    let userName = localStorage.getItem("name");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body={
      name:model.name,
      description:model.description,
      cronParams:model.cronParams,
      lastRunTime:model.lastRunTime,   
      userName:userName
    }
    
    return  this.httpClient.put<boolean>(this.baseURL+"GoogleTranslateSubscription/update",body,{headers:headers});
  }

  public UnsubscribeFootball(model : FootballSubscriptions)
  {
    let token = localStorage.getItem("token");
    let userName = localStorage.getItem("name");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body={
      name:model.name,
      description:model.description,
      cronParams:model.cronParams,
      lastRunTime:model.lastRunTime,   
      userName:userName
    }
    return  this.httpClient.delete<boolean>(this.baseURL+"FootballSubscription/unsubscribe",body,{headers:headers});
  }

  public UnsubscribeWheather(model : WheatherSubscriptions)
  {
    let token = localStorage.getItem("token");
    let userName = localStorage.getItem("name");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body={
      name:model.name,
      description:model.description,
      cronParams:model.cronParams,
      lastRunTime:model.lastRunTime,   
      userName:userName,
      date:model.date,
      city:model.city
    }

    return  this.httpClient.delete<boolean>(this.baseURL+"WheatherSubscription/unsubscribe",body,{headers:headers});
  }

  public unsubscribeGoogle(model : GoogleSubscriptions)
  {
    let token = localStorage.getItem("token");
    let userName = localStorage.getItem("name");

    const headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body={
      name:model.name,
      description:model.description,
      cronParams:model.cronParams,
      lastRunTime:model.lastRunTime,   
      userName:userName
    }

    return  this.httpClient.delete<boolean>(this.baseURL+"GoogleTranslateSubscription/unsubscribe",body,{headers:headers});
  }
}
