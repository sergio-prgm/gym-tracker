import { Component } from '@angular/core'
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
  uid!: string | undefined
  showList: string[] = []
  toggle: boolean = false

  constructor(private fireSvc: FireService) {
    // this.uid = '7lxzaoPr1cXSNF5OEB1duPxyk4v2'
    this.fireSvc.getLoggedUser().subscribe(user => {
      this.uid = user?.uid
    })
    this.showWorkout = this.fakeWorkout.filter(wo => wo['uid'] === this.uid)
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
