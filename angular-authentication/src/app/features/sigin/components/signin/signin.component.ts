import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signinForm!: FormGroup;
  constructor( public fb: FormBuilder, public authService: AuthService, /*public router: Router*/) { 
    this.buildForm();
  }

  ngOnInit(): void {/* EmpTy */  }
  public buildForm(){
    this.signinForm = this.fb.group({
      email: [''],
      password: [''],
  })
}


  public loginUser(){
    this.authService.signIn(this.signinForm.value);
  }
}
