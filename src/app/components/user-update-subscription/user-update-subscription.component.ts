import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ISubscriptions } from 'src/app/interfaces/subscription.interface';
import { SibscriptionsService } from 'src/app/services/sibscriptions/sibscriptions.service';

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
    dateStart:['',[Validators.required]],
  })

  ngOnInit(): void {
  }

  onSubmit(){
    const id=this.updateSubForm.controls["id"].value;
    const apiName=this.updateSubForm.controls["apiName"].value;
    const name=this.updateSubForm.controls["name"].value;
    const description=this.updateSubForm.controls["description"].value;
    const cronParams=this.updateSubForm.controls["cocronParams"].value;
    const apiParams=this.updateSubForm.controls["apiParams"].value;
    const dateStart=this.updateSubForm.controls["dateStart"].value;
    const userName=localStorage.getItem("name");

    let sub : ISubscriptions = {
      name:name,
      description:description,
      userName:userName,
      cronExpression:cronParams,
      apiParams:apiParams,
      apiName:apiName,
      dateStart:dateStart,
      id:id,
      lastRunTime:'2022-07-12T11:57:48.339'
    }

    this.subService.UpdateSubscription(sub).subscribe(data => {

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
