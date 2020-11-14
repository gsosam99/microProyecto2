import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { CharactersViewComponent } from './views/characters-view/characters-view.component';
import { DetailViewComponent } from './views/detail-view/detail-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { RegisterViewComponent } from './views/register-view/register-view.component';


@NgModule({
  declarations: [MainNavigationComponent, HomeViewComponent, CharactersViewComponent, DetailViewComponent, LoginViewComponent, RegisterViewComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
