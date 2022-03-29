import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DoneWorkoutComponent } from './done-workout.component'

@NgModule({
  declarations: [DoneWorkoutComponent],
  imports: [CommonModule],
  exports: [DoneWorkoutComponent]
})
export class DoneWorkoutModule {}
