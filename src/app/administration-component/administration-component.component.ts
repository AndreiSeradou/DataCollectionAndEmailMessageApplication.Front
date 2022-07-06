import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../app-service/administration.service';
import { User } from '../Models/User';
import { WheatherSubscriptions } from '../Models/WheatherSubscriptions';

@Component({
  selector: 'app-administration-component',
  templateUrl: './administration-component.component.html',
  styleUrls: ['./administration-component.component.css']
})
export class AdministrationComponentComponent implements OnInit {

  public userList: User[] = [];
  public userWhether: WheatherSubscriptions[] = [];
  public userGoogle: WheatherSubscriptions[] = [];
  public userFootball: WheatherSubscriptions[] = [];

  constructor(private adminService:AdministrationService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

   getAllUsers()
   {
     this.adminService.getAllUsers().subscribe((data:any)=>{
       this.userList = data;
     })
   }

   getUserStatistics(userName: string){
    

    this.adminService.GetUserFootballSubscriptions(userName).subscribe((data:any)=>{
      this.userFootball = data;
    })

    this.adminService.GetUserGoogleSubscriptions(userName).subscribe((data:any)=>{
      this.userGoogle = data;
    })

    this.adminService.GetUserWheatherSubscriptions(userName).subscribe((data:any)=>{
      this.userWhether = data;
    })

    alert("User statictics: Football subscriptions" + this.userFootball.length + "Google subscriptions" + this.userGoogle.length + "Wheather subscriptions" + this.userWhether.length);
  }
}
