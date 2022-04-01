import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FireService } from 'src/app/shared/services/fire.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  uid!: string | undefined
  constructor(private router: Router, private fireSvc: FireService) {
    this.fireSvc.getLoggedUser().subscribe(user => {
      this.uid = user?.uid
    })
  }

  onGoToNew(): void {
    this.router.navigate(['workout'], { state: { value: this.uid } })
  }
}
