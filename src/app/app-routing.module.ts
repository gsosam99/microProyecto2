import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: 'home',
    loadChildren: () => import ("../app/modules/main/main.module").then (m => m.MainModule)
    
  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import ("../app/modules/profile/profile.module").then (m => m.ProfileModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
