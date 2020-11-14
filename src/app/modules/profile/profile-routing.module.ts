import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { FavoritesViewComponent } from './views/favorites-view/favorites-view.component';


const routes: Routes = [
  {
    path: '', //Admin
    children: [
      // {
      //   path: '',
      //   canActivate: [AuthGuard],
      //   component: FavoritesViewComponent
      // },
    ],
    component: ProfileNavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
