import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent {
  uid!: string
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation()
    this.uid = navigation?.extras?.state?.['value']
  }
}
