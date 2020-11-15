import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.scss']
})
export class ProfileNavbarComponent implements OnInit {
  isAuthenticated = false;
  // user = this.authService.userDataSubject$;

  constructor() { }

  ngOnInit(): void {
  }

}
