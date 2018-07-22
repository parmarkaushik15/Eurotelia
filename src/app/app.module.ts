import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { UserProfileComponent } from './component/pages/user-profile/user-profile.component';
import { CallForwardComponent } from './component/pages/call-forward/call-forward.component';
import { CallRecordsComponent } from './component/pages/call-records/call-records.component';
import { PayHistoryComponent } from './component/pages/pay-history/pay-history.component';
import { VoiceMailComponent } from './component/pages/voice-mail/voice-mail.component';
import { CallRatesComponent } from './component/pages/call-rates/call-rates.component';
import { PhoneBookComponent } from './component/pages/phone-book/phone-book.component';
import { HomeLayoutComponent } from './component/layout/home-layout/home-layout.component';
import { SidebarComponent } from './component/layout/sidebar/sidebar.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UserProfileComponent,
    CallForwardComponent,
    CallRecordsComponent,
    PayHistoryComponent,
    VoiceMailComponent,
    CallRatesComponent,
    PhoneBookComponent,
    HomeLayoutComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxIntlTelInputModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
