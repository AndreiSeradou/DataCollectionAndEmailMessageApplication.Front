import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { AdministrationService } from 'src/app/services/administration/administration.service';

@Component({
  selector: 'app-administration-get-users',
  templateUrl: './administration-get-users.component.html',
  styleUrls: ['./administration-get-users.component.scss']
})
export class AdministrationGetUsersComponent implements OnInit {

  public userList: IUser[] = [];
  
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

   getUserStatistics(numJob: number, numApi: number){
    alert("Number of jobs:" + numJob + "Number of Apis" + numApi);
   }
}
