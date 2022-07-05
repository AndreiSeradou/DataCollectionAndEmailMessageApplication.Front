import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthToRequestService } from '../app-service/auth-to-request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm=this.formBuilder.group({
    fullName:['',[Validators.required]],
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.required]
  })
  constructor(private formBuilder:FormBuilder, private authService:AuthToRequestService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let fullName=this.registerForm.controls["fullName"].value;
    let email=this.registerForm.controls["email"].value;
    let password=this.registerForm.controls["password"].value;
    this.authService.register(fullName,email,password).subscribe((data: { name: string; success: any; token: string; role: string; })=>{
     console.log("response",data.name);
    if (data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.name);
      localStorage.setItem("role", data.role);
      if (data.role == "User")
        {
          this.router.navigateByUrl('subscriptions');
        }
        else
        {
          this.router.navigateByUrl('administrations');
        }
    }
   },(error: any)=>{
    console.log("error",error);
   })
  }
}
