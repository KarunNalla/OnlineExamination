import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from "./registration/registration.component";
import { OnlineTestComponent } from './online-test/online-test.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    pathMatch: "full"
  },
  {
    path: 'onlineTest',
    component: OnlineTestComponent
  },
  {
    path: 'result',
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
