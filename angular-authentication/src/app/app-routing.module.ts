import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register', loadChildren: () =>
      import('./features/register/register.module').then(m => m.RegisterModule),
      //Con esto protegemos esta ruta

  },
  {
    path: 'signin', loadChildren: () =>
      import('./features/sigin/sig-in.module').then(m => m.SigInModule)
  },
  {
    path: 'user', loadChildren: () =>
      import('./features/user-profile/user-profile.module').then(m => m.UserProfileModule),
      canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

