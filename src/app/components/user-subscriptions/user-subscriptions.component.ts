import { Component, OnInit } from '@angular/core';
import { ISubscriptions } from 'src/app/interfaces/subscription.interface';
import { SibscriptionsService } from 'src/app/services/sibscriptions/sibscriptions.service';


@Component({
  selector: 'app-user-subscriptions',
  templateUrl: './user-subscriptions.component.html',
  styleUrls: ['./user-subscriptions.component.scss']
})
export class UserSubscriptionsComponent implements OnInit {

  public subList:ISubscriptions[] = [];

 constructor(private subService:SibscriptionsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  onSubmitDeleteSub(id:number)
  {
    this.subService.Unsubscribe(this.subList.find(el => el.id == id));
  }

  getAll()
  {
    this.subService.GetAllSubscriptions().subscribe((data:any)=>{
      this.subList = data;
    })
  }
}