import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInformationComponent } from './components/add-information/add-information.component';
import { AdministrationGetUsersComponent } from './components/administration-get-users/administration-get-users.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserCreateSubscriptionComponent } from './components/user-create-subscription/user-create-subscription.component';
import { UserSubscriptionsComponent } from './components/user-subscriptions/user-subscriptions.component';
import { UserUpdateSubscriptionComponent } from './components/user-update-subscription/user-update-subscription.component';

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
