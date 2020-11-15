import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {

  registerForm: FormGroup = null;

  constructor(private authService: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit(): void{
    this.authService.singUpWithCredentials(this.registerForm.get('email').value, this.registerForm.get('password').value)
  }

}
