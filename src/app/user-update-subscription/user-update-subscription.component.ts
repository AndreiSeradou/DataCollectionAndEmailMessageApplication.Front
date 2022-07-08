import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SibscriptionsService } from '../AppService/sibscriptions/sibscriptions.service';
import { Subscriptions } from '../Models/subscriptionModel';

@Component({
  selector: 'app-user-update-subscription',
  templateUrl: './user-update-subscription.component.html',
  styleUrls: ['./user-update-subscription.component.scss']
})
export class UserUpdateSubscriptionComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private subService:SibscriptionsService) { }

  public updateSubForm=this.formBuilder.group({
    name:['',[Validators.required]],
    id:['',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    description:['',[Validators.required]],
    cronParams:['',[Validators.required]],
    apiParams:['',[Validators.required]],
    apiName:['',[Validators.required]],
  })
  
  ngOnInit(): void {
  }

  onSubmit(){
    let id=this.updateSubForm.controls["id"].value;
    let apiName=this.updateSubForm.controls["apiName"].value;
    let name=this.updateSubForm.controls["name"].value;
    let description=this.updateSubForm.controls["description"].value;
    let cronParams=this.updateSubForm.controls["cocronParams"].value;
    let apiParams=this.updateSubForm.controls["apiParams"].value;
    let userName=localStorage.getItem("name");

    this.subService.UpdateSubscription(new Subscriptions(name, description,userName,cronParams,"",id,apiParams,apiName)).subscribe(data => {

      if (data) {
        alert("Successfully create");
        console.log(data);
        location.reload();
      }
      else
      {
        alert("Error create");
      }
      })
      }

}
