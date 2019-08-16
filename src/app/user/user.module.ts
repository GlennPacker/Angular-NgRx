import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginContainerComponent } from './containers/login/login-container.component';
import { LoginComponent } from './components/login/login.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';

const userRoutes: Routes = [
  { path: 'login', component: LoginContainerComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', reducer)
  ],
  declarations: [
    LoginContainerComponent,
    LoginComponent
  ]
})
export class UserModule { }
