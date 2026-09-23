import { Router } from 'express'
import type { Model } from 'mongoose'

export function createModelRouter<T>(resourceModel: Model<T>) {
  const router = Router()

  router.get('/', async (_request, response, next) => {
    try {
      const records = await resourceModel.find().lean()
      response.json(records)
    } catch (error) {
      next(error)
    }
  })

  return router
}
