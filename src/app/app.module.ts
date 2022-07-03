import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WheatherSubscriptionsComponentComponent } from './wheather-subscriptions-component/wheather-subscriptions-component.component';
import { GoogleTranslateSubscriptionsComponentComponent } from './google-translate-subscriptions-component/google-translate-subscriptions-component.component';
import { FootballSubscriptionsComponentComponent } from './football-subscriptions-component/football-subscriptions-component.component';
import { AdministrationComponentComponent } from './administration-component/administration-component.component';
import { CreateSubscriptionComponentComponent } from './create-subscription-component/create-subscription-component.component';
import { UpdateSubscriptionComponentComponent } from './update-subscription-component/update-subscription-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WheatherSubscriptionsComponentComponent,
    GoogleTranslateSubscriptionsComponentComponent,
    FootballSubscriptionsComponentComponent,
    AdministrationComponentComponent,
    CreateSubscriptionComponentComponent,
    UpdateSubscriptionComponentComponent
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
