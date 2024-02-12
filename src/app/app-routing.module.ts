import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ChangePasswordPageComponent } from './change-password-page/change-password-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SuccessfullyCreatedAccountComponent } from './successfully-created-account/successfully-created-account.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginPageComponent,
  },
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
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
