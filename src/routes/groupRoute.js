import express from 'express'
import { groupController } from '~/controllers/groupController'

const router = express.Router()

router.get('/', groupController.getAllGroup)

export const groupRoute = router
