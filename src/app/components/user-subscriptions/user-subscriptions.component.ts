import { Component, OnInit } from '@angular/core';
import { ISubscriptions } from 'src/app/interfaces/subscription.interface';
import { ApiService } from 'src/app/services/apis/api.service';
import { SibscriptionsService } from 'src/app/services/sibscriptions/sibscriptions.service';


@Component({
  selector: 'app-user-subscriptions',
  templateUrl: './user-subscriptions.component.html',
  styleUrls: ['./user-subscriptions.component.scss']
})
export class UserSubscriptionsComponent implements OnInit {

  public subList:ISubscriptions[] = [];

 constructor(private subService:SibscriptionsService, private apiService:ApiService) { }

  ngOnInit(): void {
    this.getAll();
  }

  onSubmitDeleteSub(name:string)
  {
    this.subService.Unsubscribe(name);
  }

  getAll()
  {
    this.subService.GetAllSubscriptions().subscribe((data:any)=>{
      this.subList = data;
    })
  }

  getAllApis()
  {
    this.apiService.GetAllApis().subscribe((data:any)=>{
      alert(data);
    })
  }
}
