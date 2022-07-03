import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponentComponent } from './administration-component/administration-component.component';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
import { AuthService } from './Guards/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { UpdateSubscriptionComponent } from './update-subscription/update-subscription.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"administration",component:AdministrationComponentComponent,canActivate:[AuthService]},
  {path:"create-subscription",component:CreateSubscriptionComponent,canActivate:[AuthService]},
  {path:"subscriptions",component:SubscriptionsComponent,canActivate:[AuthService]},
  {path:"update-subscriptions",component:UpdateSubscriptionComponent,canActivate:[AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
