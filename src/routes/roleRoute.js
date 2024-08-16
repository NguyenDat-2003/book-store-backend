import express from 'express'
import { roleController } from '~/controllers/roleController'

const router = express.Router()

router.post('/create', roleController.createRoles)
router.get('/read', roleController.getAllRoles)
router.delete('/delete', roleController.deleteRole)
router.put('/update', roleController.updateRole)

export const roleRoute = router
