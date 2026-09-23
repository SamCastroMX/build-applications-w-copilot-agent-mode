import { User } from '../models/User.js'
import { createModelRouter } from './modelRouter.js'

export const usersRouter = createModelRouter(User)
