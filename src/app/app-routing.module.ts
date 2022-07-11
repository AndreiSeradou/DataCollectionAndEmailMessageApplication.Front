import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationCreateApiComponent } from './components/administration-create-api/administration-create-api.component';
import { AdministrationGetUsersComponent } from './components/administration-get-users/administration-get-users.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserCreateSubscriptionComponent } from './components/user-create-subscription/user-create-subscription.component';
import { UserSubscriptionsComponent } from './components/user-subscriptions/user-subscriptions.component';
import { UserUpdateSubscriptionComponent } from './components/user-update-subscription/user-update-subscription.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"administration-get-users",component:AdministrationGetUsersComponent,canActivate:[AuthGuard]},
  {path:"user-create-subscription",component:UserCreateSubscriptionComponent,canActivate:[AuthGuard]},
  {path:"user-subscriptions",component:UserSubscriptionsComponent,canActivate:[AuthGuard]},
  {path:"user-update-subscription",component:UserUpdateSubscriptionComponent,canActivate:[AuthGuard]},
  {path:"administration-create-api",component:AdministrationCreateApiComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
