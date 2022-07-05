import { Component, OnInit } from '@angular/core';
import { SibscriptionsService } from '../app-service/sibscriptions.service';
import { FootballSubscriptions } from '../Models/FootballSubscriptions';
import { GoogleSubscriptions } from '../Models/GoogleSubscriptions';
import { WheatherSubscriptions } from '../Models/WheatherSubscriptions';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css']
})
export class CreateSubscriptionComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private subService:SibscriptionsService) { }

  public createSubForm=this.formBuilder.group({
    name:['',[Validators.required]],
    description:['',[Validators.required]],
    cronParams:['',[Validators.required]],
    param1:['',[Validators.required]],
    param2:['',[Validators.required]],
    apiName:['',[Validators.required]],
  })
  
  ngOnInit(): void {
  }

  onSubmit(){
    let apiName=this.createSubForm.controls["apiName"].value;
    let name=this.createSubForm.controls["name"].value;
    let description=this.createSubForm.controls["description"].value;
    let cronParams=this.createSubForm.controls["cocronParams"].value;
    let param1=this.createSubForm.controls["param1"].value;
    let param2=this.createSubForm.controls["param2"].value;
    let userName=localStorage.getItem("name");

    if (apiName == "football")
    {
      this.subService.SubscribeFootball(new FootballSubscriptions(name, description,userName,cronParams,"",0)).subscribe(data => {

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
      this.subService.SubscribeGoogle(new GoogleSubscriptions(name, description,userName,cronParams,"",0)).subscribe(data => {

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
      this.subService.SubscribeWheather(new WheatherSubscriptions(name, description,userName,cronParams,param1,param2,"",0)).subscribe(data => {

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
