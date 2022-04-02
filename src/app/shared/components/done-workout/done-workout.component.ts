import { Component, OnInit } from '@angular/core'
import { Observable, tap } from 'rxjs'
import mockworkout from '../../../../mock/mockWorkout.json'
import { Workout } from '../../models/workout.interface'
import { FireService } from '../../services/fire.service'

@Component({
  selector: 'app-done-workout',
  templateUrl: './done-workout.component.html',
  styleUrls: ['./done-workout.component.scss']
})
export class DoneWorkoutComponent {
  fakeWorkout: Workout[] = mockworkout['workouts']
  showWorkout!: Workout[]
  userInfo$ = this.fireSvc.getLoggedUser()
  workouts$ = this.fireSvc.getWorkouts()
  workouts!: []

  showList: string[] = []
  toggle: boolean = false

  constructor(private fireSvc: FireService) {}

  // ngOnInit(): void {
  // }

  // getUserWorkout(user: any): Observable<Workout[]> {
  //   // let uId = user?.uid
  //   // this.showWorkout = this.fakeWorkout.filter(wo => wo['uid'] === uId)
  //   // return this.showWorkout
  //   let uId = user?.uid
  //   this.workouts$ = this.fireSvc.getWorkouts(uId)
  //   console.log(uId)
  //   return this.workouts$
  // }

  toggleList(date: string) {
    if (this.showList.some(item => date === item)) {
      this.showList = this.showList.filter(item => item !== date)
    } else {
      this.showList.push(date)
    }
  }
}
