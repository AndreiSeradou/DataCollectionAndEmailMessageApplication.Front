import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationGetUsersComponent } from './administration-get-users/administration-get-users.component';
import { AuthService } from './guards/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserCreateSubscriptionComponent } from './user-create-subscription/user-create-subscription.component';
import { UserSubscriptionsComponent } from './user-subscriptions/user-subscriptions.component';
import { UserUpdateSubscriptionComponent } from './user-update-subscription/user-update-subscription.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"administration-get-users",component:AdministrationGetUsersComponent,canActivate:[AuthService]},
  {path:"user-create-subscription",component:UserCreateSubscriptionComponent,canActivate:[AuthService]},
  {path:"user-subscriptions",component:UserSubscriptionsComponent,canActivate:[AuthService]},
  {path:"user-update-subscription",component:UserUpdateSubscriptionComponent,canActivate:[AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
