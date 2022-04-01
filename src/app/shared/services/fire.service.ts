import { Injectable } from '@angular/core'
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from '@angular/fire/auth'
import { signOut } from '@firebase/auth'
import { LoginData } from '../models/loginData.interface'

@Injectable({
  providedIn: 'root'
})
export class FireService {
  constructor(private auth: Auth) {}

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  logout() {
    return signOut(this.auth)
  }

  getLoggedUser() {
    return this.auth.currentUser
  }
}
