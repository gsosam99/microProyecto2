import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { FavoritesViewComponent } from './views/favorites-view/favorites-view.component';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';


const routes: Routes = [
  {
    path: '', //Profile
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        component: ProfileViewComponent
      },
      {
        path: 'favorites',
        canActivate: [AuthGuard],
        component: FavoritesViewComponent
      },
    ],
    component: ProfileNavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
