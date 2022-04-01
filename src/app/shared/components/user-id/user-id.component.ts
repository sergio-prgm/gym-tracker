import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { tap } from 'rxjs'
import { FireService } from '../../services/fire.service'

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.scss']
})
export class UserIdComponent {
  userInfo$ = this.fireSvc.getLoggedUser()
  userEmail = ''
  userName!: string

  constructor(private fireSvc: FireService, private router: Router) {}

  getname(userinfo: any): string {
    let email = userinfo?.email
    let i = email.indexOf('@')
    return email.slice(0, i)
  }

  onLogOut(): void {
    this.fireSvc.logout()
    this.router.navigate(['auth'])
  }
}
