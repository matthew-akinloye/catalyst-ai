import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChangePwdComponent } from './auth/change-pwd/change-pwd.component';
import { ResetPwdComponent } from './auth/reset-pwd/reset-pwd.component';
import { VerificationComponent } from './auth/verification/verification.component';


const routes: Routes = [
  { path: 'chat', component: ChatPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'change-password', component: ChangePwdComponent },
  { path: 'reset-password', component: ResetPwdComponent },
  { path: 'verify', component: VerificationComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/404' } // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
