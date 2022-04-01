import { Injectable } from '@angular/core'
import { LoginData } from '../models/loginData.interface'
import { Workout } from '../models/workout.interface'
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User
} from '@angular/fire/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore'
import { BehaviorSubject, Observable, Subject, take, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FireService {
  private workoutsCollection: AngularFirestoreCollection<Workout>

  constructor(private auth: AngularFireAuth, private af: AngularFirestore) {
    this.workoutsCollection = af.collection<Workout>('workouts')
  }

  login({ email, password }: LoginData) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  register({ email, password }: LoginData) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }

  getLoggedUser() {
    return this.auth.authState
  }

  //? Workout methods

  getWorkouts(uid: string) {}

  addWorkout(workout: Workout): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = this.af.createId()
        const result = await this.workoutsCollection.doc(id).set(workout)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }
}
