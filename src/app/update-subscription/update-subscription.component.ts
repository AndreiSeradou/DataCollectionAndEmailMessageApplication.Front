import { Component, OnInit } from '@angular/core';
import { FootballSubscriptions } from '../Models/FootballSubscriptions';
import { WheatherSubscriptions } from '../Models/WheatherSubscriptions';

@Component({
  selector: 'app-update-subscription',
  templateUrl: './update-subscription.component.html',
  styleUrls: ['./update-subscription.component.css']
})
export class UpdateSubscriptionComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private subService:SibscriptionsService) { }

  public createSubForm=this.formBuilder.group({
    name:['',[Validators.required]],
    description:['',[Validators.required]],
    cronParams:['',[Validators.required]],
    param1:['',[Validators.required]],
    param2:['',[Validators.required]],
    apiName:['',[Validators.required]],
    id:['',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
  })
  
  ngOnInit(): void {
  }

  onSubmit(){
    let id=this.createSubForm.controls["id"].value;
    let apiName=this.createSubForm.controls["apiName"].value;
    let name=this.createSubForm.controls["name"].value;
    let description=this.createSubForm.controls["description"].value;
    let cronParams=this.createSubForm.controls["cocronParams"].value;
    let param1=this.createSubForm.controls["param1"].value;
    let param2=this.createSubForm.controls["param2"].value;
    let userName=localStorage.getItem("name");

    if (apiName == "football")
    {
      this.subService.UpdateFootballSubscription(new FootballSubscriptions(name, description,userName,cronParams,"",id)).subscribe(data => {

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


    if (apiName == "google")
    {
      this.subService.UpdateGoogleSubscription(new GoogleSubscriptions(name, description,userName,cronParams,"",id)).subscribe(data => {

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

    if (apiName == "wheather")
    {
      this.subService.UpdateWheatherSubscription(new WheatherSubscriptions(name, description,userName,cronParams,param1,param2,"",id)).subscribe(data => {

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

    alert("error api name");
  }
}
