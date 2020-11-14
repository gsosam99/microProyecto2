import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { FavoritesViewComponent } from './views/favorites-view/favorites-view.component';


@NgModule({
  declarations: [ProfileNavigationComponent, FavoritesViewComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
