import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;

  constructor( public fb: FormBuilder, public authService: AuthService) {
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {/*Empty*/  }

  // public buildForm(){
  //   this.signinForm = this.fb.group({
  //     email: [''],
  //     password: ['']
  //   })
    // }
  public loginUser() {
    this.authService.signIn(this.signinForm.value)
  }

}
