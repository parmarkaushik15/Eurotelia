import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeLayoutComponent } from './component/layout/home-layout/home-layout.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { UserProfileComponent } from './component/pages/user-profile/user-profile.component';
import { CallForwardComponent } from './component/pages/call-forward/call-forward.component';
import { CallRecordsComponent } from './component/pages/call-records/call-records.component';
import { PayHistoryComponent } from './component/pages/pay-history/pay-history.component';
import { VoiceMailComponent } from './component/pages/voice-mail/voice-mail.component';
import { CallRatesComponent } from './component/pages/call-rates/call-rates.component';
import { PhoneBookComponent } from './component/pages/phone-book/phone-book.component';
import { AuthGuardService } from './guard/auth-guard.service';

export const routes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },{
    path: 'login',
      component: LoginComponent
  },{
    path: 'register',
      component: RegisterComponent
  },{ 
    path: 'app', component: HomeLayoutComponent, canActivate: [AuthGuardService], children: [
    {
      path: 'user/profile',
        component: UserProfileComponent
    },{
      path: 'dashboard',
        component: DashboardComponent
    },{
      path: 'call/forward',
        component: CallForwardComponent
    },{
      path: 'call/records',
        component: CallRecordsComponent
    },{
      path: 'pay/history',
        component: PayHistoryComponent
    },{
      path: 'voice/mail',
        component: VoiceMailComponent
    },{
      path: 'call/rates',
        component: CallRatesComponent
    },{
      path: 'phonebook',
        component: PhoneBookComponent
    } 
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
