 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimerComponent} from './timer/timer.component'
import {Timer2Component} from './timer2/timer2.component'
//import { from } from 'rxjs';

const routes: Routes = [{path:"newclick", component:TimerComponent},
{path:"userlist", component:Timer2Component}];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { 
}
export const routingComponents = [TimerComponent]; 
 
