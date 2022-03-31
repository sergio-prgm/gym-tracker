import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
  // AuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate
} from '@angular/fire/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([''])
const redirectLoggedInToDash = () => redirectLoggedInTo(['dashboard'])

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.module').then(m => m.AuthModule),
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectLoggedInToDash }
    ...canActivate(redirectLoggedInToDash)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToLogin }
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'workout',
    loadChildren: () =>
      import('./pages/workout/workout.module').then(m => m.WorkoutModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
