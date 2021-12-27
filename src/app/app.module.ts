import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecureChatInfoComponent } from './layouts/secure-chat-info/secure-chat-info.component';
import { BusinessChatAccountInfoComponent } from './layouts/business-chat-account-info/business-chat-account-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SecureChatInfoComponent,
    BusinessChatAccountInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
