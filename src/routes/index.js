import express from 'express'
import { userRoute } from './userRoute'
import { bookRoute } from './bookRoute'
import { groupRoute } from './groupRoute'
import { roleRoute } from './roleRoute'

const router = express.Router()

router.use('/user', userRoute)
router.use('/book', bookRoute)
router.use('/group', groupRoute)
router.use('/role', roleRoute)

export const APIs = router
