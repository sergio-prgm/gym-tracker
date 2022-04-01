import { Component, OnInit } from '@angular/core'
import { tap } from 'rxjs'
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

  showList: string[] = []
  toggle: boolean = false

  constructor(private fireSvc: FireService) {}

  // ngOnInit(): void {

  // }

  getUserWorkout(user: any): Workout[] {
    let uId = user?.uid
    this.showWorkout = this.fakeWorkout.filter(wo => wo['uid'] === uId)
    return this.showWorkout
  }

  toggleList(date: string) {
    if (this.showList.some(item => date === item)) {
      this.showList = this.showList.filter(item => item !== date)
      console.log(this.showWorkout[0])
    } else {
      this.showList.push(date)
    }
  }
}
