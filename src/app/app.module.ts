import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChangePwdComponent } from './auth/change-pwd/change-pwd.component';
import { ResetPwdComponent } from './auth/reset-pwd/reset-pwd.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChatboxComponent,
    DashboardPageComponent,
    ChatPageComponent,
    LoginComponent,
    RegisterComponent,
    ChangePwdComponent,
    ResetPwdComponent,
    VerificationComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
