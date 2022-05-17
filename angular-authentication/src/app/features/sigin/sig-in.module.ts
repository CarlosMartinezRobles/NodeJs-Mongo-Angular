
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigInRoutingModule } from './sig-in-routing.module';
import { SigninComponent } from './components/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
        SigninComponent
  ],
  imports: [
    CommonModule,
    SigInRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SigInModule { }
