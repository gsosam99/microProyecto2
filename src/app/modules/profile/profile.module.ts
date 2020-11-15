import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';


import { ProfileNavbarComponent } from './profile-components/profile-navbar/profile-navbar.component';
import { ProfileFooterComponent } from './profile-components/profile-footer/profile-footer.component';


@NgModule({
  declarations: [
    ProfileNavigationComponent, 
    ProfileNavbarComponent,
    ProfileFooterComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
