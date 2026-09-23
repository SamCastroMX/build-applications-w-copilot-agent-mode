import { Workout } from '../models/Workout.js'
import { createModelRouter } from './modelRouter.js'

export const workoutsRouter = createModelRouter(Workout)
