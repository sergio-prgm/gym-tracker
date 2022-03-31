import { Component } from '@angular/core'
import { FireService } from 'src/app/shared/services/fire.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private fireSvc: FireService) {}

  logout() {
    this.fireSvc.logout()
  }
}
