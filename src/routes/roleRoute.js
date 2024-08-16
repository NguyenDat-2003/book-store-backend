import express from 'express'
import { roleController } from '~/controllers/roleController'

const router = express.Router()

router.post('/create', roleController.createRoles)

export const roleRoute = router
