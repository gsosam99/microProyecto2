import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { FavoritesViewComponent } from '../profile/views/favorites-view/favorites-view.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { CharactersViewComponent } from './views/characters-view/characters-view.component';
import { DetailViewComponent } from './views/detail-view/detail-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { LogoutViewComponent } from './views/logout-view/logout-view.component';
import { RegisterViewComponent } from './views/register-view/register-view.component';


const routes: Routes = [
  {
    path: '', //Home
    children: [
      {
        path: '',
        component: HomeViewComponent
      },
      {
        path: 'login',
        component: LoginViewComponent
      },
      {
        path: 'register',
        component: RegisterViewComponent
      },
      {
        path: 'characters',
        component: CharactersViewComponent
      },
      {
        path: 'detail/:characterId',
        component: DetailViewComponent
      },
      {
        path: 'favorites',
        canActivate: [AuthGuard],
        component: FavoritesViewComponent
      },
      {
        path: 'logout',
        canActivate: [AuthGuard],
        component: LogoutViewComponent
      }
    ],
    component: MainNavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
