import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ChangePasswordPageComponent } from './components/change-password-page/change-password-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SuccessfullyCreatedAccountComponent } from './components/successfully-created-account/successfully-created-account.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { IssuesPageComponent } from './components/issues-page/issues-page.component';
import { IssueDetailModalComponent } from './components/issue-detail-modal/issue-detail-modal.component';
import { IssueCreateModalComponent } from './components/issue-create-modal/issue-create-modal.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';
import { UserDeleteModalComponent } from './components/user-delete-modal/user-delete-modal.component';

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
    LeafletMapComponent,
    UserDeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
