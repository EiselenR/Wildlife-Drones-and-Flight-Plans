import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'update', loadChildren: './update/update.module#UpdatePageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'routes', loadChildren: './routes/routes.module#RoutesPageModule' },
  { path: 'users', loadChildren: '../Admin/users/users.module#UsersPageModule' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
