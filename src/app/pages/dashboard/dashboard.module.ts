import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardComponent } from './dashboard.component'
import { DoneWorkoutModule } from 'src/app/shared/components/done-workout/done-workout.module'
import { UserIdModule } from 'src/app/shared/components/user-id/user-id.module'

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DoneWorkoutModule,
    UserIdModule
  ]
})
export class DashboardModule {}
