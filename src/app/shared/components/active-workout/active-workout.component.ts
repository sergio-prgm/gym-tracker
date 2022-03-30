import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'

@Component({
  selector: 'app-active-workout',
  templateUrl: './active-workout.component.html',
  styleUrls: ['./active-workout.component.scss']
})
export class ActiveWorkoutComponent implements OnInit {
  workoutForm!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.workoutForm = this.fb.group({
      workoutName: ['', Validators.required],
      date: [null, Validators.required],
      exercises: this.fb.array([])
    })
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
    console.log(this.workoutForm.value)
  }
  // Angular Reactive Form

  // createExercise(): FormGroup {
  //   return this.fb.group({
  //     exerciseName: ['', Validators.required],
  //     sets: this.fb.array([this.createSet()])
  //   })
  // }

  // get exerciseForm(): FormArray {
  //   return <FormArray>this.workoutForm.get('exerciseForm')
  // }

  // addExercise(): void {
  //   this.exerciseForm.push(this.createExercise())
  // }

  // createSet(): FormGroup {
  //   return this.fb.group({
  //     reps: [null, Validators.required],
  //     weight: [null, Validators.required]
  //   })
  // }

  // sets(index: number): FormArray {
  //   return <FormArray>this.exerciseForm.at(index).get('sets')
  // }

  // addSet(index: number): void {
  //   this.sets(index).push(this.createSet())
  // }

  // getValue() {
  //   console.log(this.workoutForm.value)
  // }

  // TODO Angular FormArray Angular University

  // get exercises(): FormArray {
  //   return this.workoutForm.get('exercises') as FormArray
  // }

  // get exercisess(): FormArray {
  //   return this.workoutForm.controls['exercises'] as FormArray
  // }

  // addExercise() {
  //   const exerciseForm: FormGroup = this.fb.group({
  //     exerciseName: ['', Validators.required]
  //     // combo: this.fb.array([])
  //   })
  //   console.log(this.workoutForm.value)
  //   this.exercises.push(exerciseForm)
  // }

  // *  the below only took into account the last 'combo' data added.

  // exercises(): FormArray {
  //   return this.workoutForm.get('exercises') as FormArray
  // }

  // newExercise(): FormGroup {
  //   return this.fb.group({
  //     exerciseName: '',
  //     combo: this.fb.array([])
  //   })
  // }

  // addExercise(): void {
  //   this.exercises().push(this.newExercise())
  // }

  // exerciseCombo(exIndex: number): FormArray {
  //   return this.exercises().at(exIndex).get('combo') as FormArray
  // }

  // newCombo(): FormGroup {
  //   return this.fb.group({
  //     reps: null,
  //     weight: null
  //   })
  // }

  // addCombo(exIndex: number): void {
  //   this.exerciseCombo(exIndex).push(this.newCombo())
  // }

  // onSubmit(): void {
  //   console.log(this.workoutForm.value)
  // }

  //* The below code didn't add the nested formGroup

  // createExercise(): FormGroup {
  //   return this.fb.group({
  //     exercise_name: ['', Validators.required],
  //     exercise_feat: [''],
  //     combo: this.fb.array([this.createCombo()], Validators.required)
  //   })
  // }

  // createCombo(): FormGroup {
  //   return this.fb.group({
  //     reps: [null, Validators.required],
  //     weight: [null, Validators.required]
  //   })
  // }

  // get exercises(): FormArray {
  //   return <FormArray>this.workoutForm.get('exercises')
  // }
  // get combo(): FormArray {
  //   return <FormArray>this.exercises.get('combo')
  // }

  // addCombo(): void {
  //   this.combo.push(this.createCombo())
  // }
}

// Also, in the template, there is a button to add a ticket. On click of the button, it pushes a new ticket in the tickets FormArray as shown below.
