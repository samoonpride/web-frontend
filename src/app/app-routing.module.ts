import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ChangePasswordPageComponent } from './components/change-password-page/change-password-page.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SuccessfullyCreatedAccountComponent } from './components/successfully-created-account/successfully-created-account.component';
import { UsersComponent } from './components/users/users.component';
import { IssuesPageComponent } from './components/issues-page/issues-page.component';
import { LoggedInAuthGuard, nonLoggingInAuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginPageComponent,
    canActivate: [
      LoggedInAuthGuard
    ]
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "issues",
  },
  {
    path: "",
    canActivate: [
      nonLoggingInAuthGuard
    ],
    children: [
      {
        path: "password/change",
        component: ChangePasswordPageComponent,
      },
      {
        path: "account/create",
        component: CreateAccountComponent,
      },
      {
        path: "account/create/success",
        component: SuccessfullyCreatedAccountComponent,
      },
      {
        path: "users",
        component: UsersComponent,
      },
      {
        path: "issues",
        component: IssuesPageComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "issues"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
