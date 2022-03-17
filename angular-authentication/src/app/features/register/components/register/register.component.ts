import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm?: FormGroup;

  constructor( public AuthService: AuthService, public fb: FormBuilder,public router: Router) {
    this.buildForm();
   }
   

  ngOnInit(): void {}

  public buildForm (){
    this.registerForm = this.fb.group({
      name: [''], //validations optional better like back requires(user.routes.js) to put more secure in our app 
      email: [''],
      password: [''],
      emoji: ['']
  })
  }
}

