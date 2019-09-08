import { PhoneBookComponent } from './phonebook/phonebook.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'phonebook', component: PhoneBookComponent},
  {path: '', pathMatch: 'full', redirectTo: 'phonebook'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
