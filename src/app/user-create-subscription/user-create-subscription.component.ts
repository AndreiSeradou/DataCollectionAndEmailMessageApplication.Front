import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SibscriptionsService } from '../AppService/sibscriptions/sibscriptions.service';
import { Subscriptions } from '../Models/subscriptionModel';

@Component({
  selector: 'app-user-create-subscription',
  templateUrl: './user-create-subscription.component.html',
  styleUrls: ['./user-create-subscription.component.scss']
})
export class UserCreateSubscriptionComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private subService:SibscriptionsService) { }

  public createSubForm=this.formBuilder.group({
    name:['',[Validators.required]],
    description:['',[Validators.required]],
    cronParams:['',[Validators.required]],
    apiParams:['',[Validators.required]],
    apiName:['',[Validators.required]],
  })
  
  ngOnInit(): void {
  }

  onSubmit(){
    let apiName=this.createSubForm.controls["apiName"].value;
    let name=this.createSubForm.controls["name"].value;
    let description=this.createSubForm.controls["description"].value;
    let cronParams=this.createSubForm.controls["cocronParams"].value;
    let apiParams=this.createSubForm.controls["apiParams"].value;
    let userName=localStorage.getItem("name");

    this.subService.Subscribe(new Subscriptions(name, description,userName,cronParams,"",0,apiParams,apiName)).subscribe(data => {

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
