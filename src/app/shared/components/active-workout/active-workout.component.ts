import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Workout } from '../../models/workout.interface'
import { FireService } from '../../services/fire.service'
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
  showError = false

  constructor(
    private fb: FormBuilder,
    private fireSvc: FireService,
    private router: Router
  ) {}

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
  }

  removeExercise(exIndex: number): void {
    this.exercises().removeAt(exIndex)
  }
  // //
  sets(exIndex: number): FormArray {
    return this.exercises().at(exIndex).get('sets') as FormArray
  }

  // convertDate() {
  //   const nDate = Date.parse(this.workoutForm.value.date)
  //   console.log(nDate, typeof nDate)
  // }

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

  showTouchedMain(field: string) {
    return {
      'border-rose-300':
        this.workoutForm.get(field)?.touched &&
        this.workoutForm.get(field)?.invalid
    }
  }

  showTouchedSub(field: string, fgIndex: any) {
    return {
      'border-rose-300':
        this.exercises().at(fgIndex).get(field)?.touched &&
        this.exercises().at(fgIndex).get(field)?.invalid
      // this.workoutForm.get(field)?.invalid
    }
  }

  showTouchedSub2(field: string, exIndex: number, setIndex: number) {
    return {
      'border-rose-300':
        this.sets(exIndex).at(setIndex).get(field)?.touched &&
        this.sets(exIndex).at(setIndex).get(field)?.invalid
    }
  }

  onGoBack(): void {
    this.router.navigate(['dashboard'])
  }

  onSubmit(): void {
    this.submitWorkout = { ...this.workoutForm.value, uid: this.uid }
    console.log(this.submitWorkout)
    if (this.workoutForm.valid) {
      this.fireSvc.addWorkout(this.submitWorkout)
      this.onGoBack()
    } else {
      this.showError = true
    }
  }
}
