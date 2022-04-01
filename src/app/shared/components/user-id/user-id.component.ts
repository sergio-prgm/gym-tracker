import { Component, OnInit } from '@angular/core'
import { User } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { FireService } from '../../services/fire.service'

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.scss']
})
export class UserIdComponent implements OnInit {
  userInfo!: User | null
  userName!: string

  constructor(private fireSvc: FireService, private router: Router) {
    this.userInfo = this.fireSvc.getLoggedUser()
    if (this.userInfo?.email !== null && this.userInfo?.email !== undefined) {
      let i = this.userInfo?.email.indexOf('@')
      this.userName = this.userInfo?.email.slice(0, i)
    }
  }

  ngOnInit(): void {
    console.log(this.userInfo)
  }

  onLogOut(): void {
    this.fireSvc.logout()
    this.router.navigate(['auth'])
  }
}
