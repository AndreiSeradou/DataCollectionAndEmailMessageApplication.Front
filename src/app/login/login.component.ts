import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthToRequestService } from '../app-service/auth-to-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm=this.formBuilder.group({
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.required]
  })
  constructor(private formBuilder:FormBuilder, private authService:AuthToRequestService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let email=this.loginForm.controls["email"].value;
    let password=this.loginForm.controls["password"].value;
    this.authService.login(email,password).subscribe((data: { name: string; success: any; token: string; role: string; }) => {
      console.log(data.name)
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
    })
   }

}
