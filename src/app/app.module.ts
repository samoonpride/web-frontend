import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ChangePasswordPageComponent } from './change-password-page/change-password-page.component';
import { FooterComponent } from './footer/footer.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SuccessfullyCreatedAccountComponent } from './successfully-created-account/successfully-created-account.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { IssuesPageComponent } from './issues-page/issues-page.component';
import { IssueDetailModalComponent } from './issue-detail-modal/issue-detail-modal.component';
import { IssueCreateModalComponent } from './issue-create-modal/issue-create-modal.component';
import { IssueCreateMapComponent } from './leaflet-map/issue-create-map.component';
import { IssueDetailMapComponent } from './leaflet-map/issue-detail-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChangePasswordPageComponent,
    FooterComponent,
    CreateAccountComponent,
    SuccessfullyCreatedAccountComponent,
    NavbarComponent,
    UsersComponent,
    IssuesPageComponent,
    IssueDetailModalComponent,
    IssueCreateModalComponent,
    IssueCreateMapComponent,
    IssueDetailMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
