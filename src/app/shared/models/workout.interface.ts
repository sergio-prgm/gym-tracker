export interface Workout {
  name: string
  date: Date
  exercises: Exercise[]
}

interface Exercise {
  name: string
  combo: Combo[]
}

interface Combo {
  reps: number
  weight: number
}
