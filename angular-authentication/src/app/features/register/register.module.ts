import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class RegisterModule { }
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';


// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RegisterComponent } from './components/register/register.component';
// import { RegisterRoutingModule } from './register-routing.module';



// @NgModule({
//   declarations: [
//     RegisterComponent
//   ],
//   imports: [
//     CommonModule,
//     RegisterRoutingModule,
//     ReactiveFormsModule,
//     FormsModule
//   ]
// })
// export class SingupModule { }