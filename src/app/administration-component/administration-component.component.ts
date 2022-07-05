import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../app-service/administration.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-administration-component',
  templateUrl: './administration-component.component.html',
  styleUrls: ['./administration-component.component.css']
})
export class AdministrationComponentComponent implements OnInit {

  public userList: User[] = [];
  constructor(private formBuilder:FormBuilder,private adminService:AdministrationService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

   getAllUsers()
   {
     this.adminService.getAllUsers().subscribe((data:any)=>{
       this.userList = data;
     })
   }
}
