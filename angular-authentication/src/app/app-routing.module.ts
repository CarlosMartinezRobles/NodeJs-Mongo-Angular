import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register', loadChildren: () =>
      import('./features/register/register.module').then(m => m.RegisterModule),
       //Con esto protegemos esta ruta
  },
  {
    path: 'sign-in', loadChildren: () =>
      import('./features/sigin/sig-in.module').then(m => m.SigInModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

