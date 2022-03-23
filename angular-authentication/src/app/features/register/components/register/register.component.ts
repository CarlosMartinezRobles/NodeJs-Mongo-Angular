import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm?: FormGroup;

  constructor( public AuthService: AuthService, public fb: FormBuilder, public router: Router) {
    this.buildForm();
   }

   ngOnInit(): void {/*Empty */}

   public buildForm (){
    this.registerForm = this.fb.group({
      name: ['',Validators.required,], //validations optional better like back requires(user.routes.js) to put more secure in our app 
      email: ['',Validators.email, Validators.required],
      password: ['',Validators.required, Validators.minLength(6)],
      emoji: ['']
  })
  }

  public registerUser(){
    this.AuthService.register(this.registerForm?.value).subscribe((res:any)=>{
    if(res.result){
    this.registerForm?.reset();
    this.router.navigate(['sign-in'])


  }
})}
}

//video 1.2 min 49:14