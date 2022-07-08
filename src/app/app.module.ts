import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AddInformationComponent } from './add-information/add-information.component';
import { AdministrationGetUsersComponent } from './administration-get-users/administration-get-users.component';
import { UserCreateSubscriptionComponent } from './user-create-subscription/user-create-subscription.component';
import { UserUpdateSubscriptionComponent } from './user-update-subscription/user-update-subscription.component';
import { UserSubscriptionsComponent } from './user-subscriptions/user-subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddInformationComponent,
    AdministrationGetUsersComponent,
    UserCreateSubscriptionComponent,
    UserUpdateSubscriptionComponent,
    UserSubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
