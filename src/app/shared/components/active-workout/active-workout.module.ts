import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { ActiveWorkoutComponent } from './active-workout.component'

@NgModule({
  declarations: [ActiveWorkoutComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ActiveWorkoutComponent]
})
export class ActiveWorkoutModule {}
