import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: 'update', loadChildren: './update/update.module#UpdatePageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }