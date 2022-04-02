import { Injectable } from '@angular/core'
import { LoginData } from '../models/loginData.interface'
import { Workout } from '../models/workout.interface'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import {
  AngularFirestore,
  AngularFirestoreCollection,
  Query
} from '@angular/fire/compat/firestore'
import { filter, map, Observable, pluck, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FireService {
  private workoutsCollection: AngularFirestoreCollection<Workout>
  workouts$!: Observable<Workout[]>
  workouts: any

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

  getWorkouts() {
    // const coll = this.af.collection<Workout>('workouts', ref =>
    //   ref.where('uid', '==', uid)
    // )
    // return coll.valueChanges()
    // const uid = '7lxzaoPr1cXSNF5OEB1duPxyk4v2'
    let uid: string
    this.getLoggedUser().subscribe(user => {
      if (user?.uid) uid = user?.uid
    })
    this.workouts = this.workoutsCollection.valueChanges().pipe(
      map(docs => docs.filter(doc => doc.uid === uid)),
      tap(doc => console.log(doc))
    )
    return this.workouts
  }

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
