// export interface Workout {
//   uid: string
//   workoutName: string
//   date: Date
//   exercises: Exercise[]
// }

// interface Exercise {
//   exerciseName: string
//   sets: Sets[]
// }

// interface Sets {
//   reps: number
//   weight: number
// }

export interface Workout {
  uid: string
  workoutName: string
  date: string
  exercises: Exercise[]
}
interface Exercise {
  exerciseName: string
  sets: Set[]
}
interface Set {
  reps: number
  weight: number
}
