import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FireService } from 'src/app/shared/services/fire.service'
import { LoginData } from 'src/app/shared/models/loginData.interface'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm!: FormGroup
  registered: boolean = true
  emailError = false
  passwordError = false

  passwordPattern: RegExp =
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/

  constructor(
    private fb: FormBuilder,
    private fireSvc: FireService,
    private router: Router
  ) {
    this.loginForm = this.initForm()
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(this.passwordPattern)]
      ]
    })
  }

  toRegistered(i: number) {
    i === 1 ? (this.registered = false) : (this.registered = true)
    console.log(i ? 'sign' : 'login')
  }

  onLogin(): void {
    this.registered
      ? this.fireSvc
          .login(this.loginForm.value)
          .then(res => {
            console.log(res)
            this.router.navigate(['/dashboard'])
          })
          .catch(error => console.log(error.message))
      : this.fireSvc
          .register(this.loginForm.value)
          .then(() => this.router.navigate(['/dashboard']))
          .catch(error => console.log(error.message))
  }
}
