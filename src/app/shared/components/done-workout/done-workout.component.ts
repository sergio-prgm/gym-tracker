import { Component } from '@angular/core'

@Component({
  selector: 'app-done-workout',
  templateUrl: './done-workout.component.html',
  styleUrls: ['./done-workout.component.scss']
})
export class DoneWorkoutComponent {
  fakeData = [
    {
      name: 'upper',
      date: '29/03/2022',
      exercises: [
        {
          name: 'bench press',
          combo: [
            {
              reps: 10,
              weight: 30
            },
            {
              reps: 8,
              weight: 35
            },
            {
              reps: 6,
              weight: 40
            }
          ]
        },
        {
          name: 'lat pull down',
          combo: [
            {
              reps: 10,
              weight: 45
            },
            {
              reps: 8,
              weight: 55
            },
            {
              reps: 6,
              weight: 60
            }
          ]
        }
      ]
    },
    {
      name: 'lower',
      date: '24/03/2022',
      exercises: [
        {
          name: 'squats',
          combo: [
            {
              reps: 10,
              weight: 70
            },
            {
              reps: 8,
              weight: 70
            },
            {
              reps: 6,
              weight: 80
            }
          ]
        },
        {
          name: 'hip thrust',
          combo: [
            {
              reps: 10,
              weight: 60
            },
            {
              reps: 8,
              weight: 65
            },
            {
              reps: 6,
              weight: 65
            },
            {
              reps: 6,
              weight: 70
            }
          ]
        }
      ]
    }
  ]

  showList: string[] = []

  toggle: boolean = false
  constructor() {}

  toggleList(date: string) {
    if (this.showList.some(item => date === item)) {
      this.showList = this.showList.filter(item => item !== date)
    } else {
      this.showList.push(date)
    }
    console.log(this.showList)
  }
}
