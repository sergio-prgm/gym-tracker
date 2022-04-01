import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'
import { Workout } from '../../models/workout.interface'
// import { FireService } from '../../services/fire.service'

@Component({
  selector: 'app-active-workout',
  templateUrl: './active-workout.component.html',
  styleUrls: ['./active-workout.component.scss']
})
export class ActiveWorkoutComponent implements OnInit {
  workoutForm!: FormGroup
  @Input() uid!: string | undefined
  submitWorkout!: Workout

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.workoutForm = this.fb.group({
      workoutName: ['', Validators.required],
      date: [null, Validators.required],
      exercises: this.fb.array([])
    })
    console.log(this.uid)
  }

  exercises(): FormArray {
    return this.workoutForm.get('exercises') as FormArray
  }

  newExercise(): FormGroup {
    return this.fb.group({
      exerciseName: ['', Validators.required],
      sets: this.fb.array([this.newSet()])
    })
  }

  addExercise() {
    this.exercises().push(this.newExercise())
    console.log(this.sets(0).length)
  }

  removeExercise(exIndex: number): void {
    this.exercises().removeAt(exIndex)
  }
  // //
  sets(exIndex: number): FormArray {
    return this.exercises().at(exIndex).get('sets') as FormArray
  }

  newSet(): FormGroup {
    return this.fb.group({
      reps: [null, Validators.required],
      weight: [null, Validators.required]
    })
  }

  addSet(exIndex: number): void {
    this.sets(exIndex).push(this.newSet())
  }

  removeSet(exIndex: number, setIndex: number): void {
    this.sets(exIndex).removeAt(setIndex)
  }

  onSubmit(): void {
    this.submitWorkout = { ...this.workoutForm.value, uid: this.uid }
    console.log(this.submitWorkout)
    // if (this.workoutForm.valid) {
    //   this.fireSvc.addWorkout(this.submitWorkout)
    // }
  }
}
