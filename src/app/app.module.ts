import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdministrationComponentComponent } from './administration-component/administration-component.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { CreateSubscriptionComponent } from './create-subscription/create-subscription.component';
import { UpdateSubscriptionComponent } from './update-subscription/update-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdministrationComponentComponent,
    SubscriptionsComponent,
    CreateSubscriptionComponent,
    UpdateSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
