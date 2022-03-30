import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { WorkoutRoutingModule } from './workout-routing.module'
import { WorkoutComponent } from './workout.component'
import { ActiveWorkoutComponent } from 'src/app/shared/components/active-workout/active-workout.component'
import { ActiveWorkoutModule } from 'src/app/shared/components/active-workout/active-workout.module'

@NgModule({
  declarations: [WorkoutComponent],
  imports: [CommonModule, WorkoutRoutingModule, ActiveWorkoutModule]
})
export class WorkoutModule {}
