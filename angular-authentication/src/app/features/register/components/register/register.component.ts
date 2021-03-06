import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective,  RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public registerForm/*!*/: FormGroup;

  constructor( public AuthService: AuthService, public fb: FormBuilder, public router: Router) {
  // this.buildForm();
  this.registerForm = this.fb.group({
    name: ['',Validators.required,], //validations optional better like back requires(user.routes.js) to put more secure in our app 
    email: ['',Validators.email, Validators.required],
    password: ['',Validators.required, Validators.minLength(4), Validators.maxLength(12)],      
})
   }

   ngOnInit(): void {/*Empty */}

  //  public buildForm (){
  //   this.registerForm = this.fb.group({
  //     name: ['',Validators.required,], //validations optional better like back requires(user.routes.js) to put more secure in our app 
  //     email: ['',Validators.email, Validators.required],
  //     password: ['',Validators.required, Validators.minLength(4), Validators.maxLength(12)],      
  // })
  // }

  public registerUser(){
    this.AuthService.register(this.registerForm?.value).subscribe((res:any)=>{
    if(res.result){
    this.registerForm?.reset();
    this.router.navigate(['register'])
  }
})}
}

