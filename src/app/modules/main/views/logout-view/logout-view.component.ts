import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout-view',
  templateUrl: './logout-view.component.html',
  styleUrls: ['./logout-view.component.scss']
})
export class LogoutViewComponent implements OnInit {

  constructor(private authService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(): void{
    this.authService.logOut().then(response => {
      this.router.navigate(['/home/login'])
    })
  }
}
