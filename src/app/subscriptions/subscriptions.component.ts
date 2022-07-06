import { Component, OnInit } from '@angular/core';
import { SibscriptionsService } from '../app-service/sibscriptions.service';
import { FootballSubscriptions } from '../Models/FootballSubscriptions';
import { GoogleSubscriptions } from '../Models/GoogleSubscriptions';
import { WheatherSubscriptions } from '../Models/WheatherSubscriptions';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  public wheatherList: WheatherSubscriptions[] = [];
  public footballList:FootballSubscriptions[] = [];
  public googleList: GoogleSubscriptions[] = [];

  constructor(private subService:SibscriptionsService) { }

  ngOnInit(): void {
    this.getAllFootball();
    this.getAllGoogle();
    this.getAllWheather();
  }

  onSubmitDeleteGoogleSub(id:number)
  {
    this.subService.UnsubscribeGoogle(this.footballList.find(el => el.id == id));
  }

  onSubmitDeleteWheatherSub(id:number)
  {
    this.subService.UnsubscribeWheather(this.footballList.find(el => el.id == id));
  }

  onSubmitDeleteFootballSub(id:number)
  {
    this.subService.UnsubscribeFootball(this.footballList.find(el => el.id == id));
  }

   getAllFootball()
   {
     this.subService.GetAllFootballSubscriptions().subscribe((data:any)=>{
       this.footballList = data;
     })
   }

   getAllGoogle()
   {
     this.subService.GetAllGoogleSubscriptions().subscribe((data:any)=>{
       this.googleList = data;
     })
   }


    getAllWheather()
   {
     this.subService.GetAllWheatherSubscriptions().subscribe((data:any)=>{
       this.wheatherList = data;
     })
   }
}
