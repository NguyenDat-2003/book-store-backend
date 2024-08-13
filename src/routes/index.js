import express from 'express'
import { userRoute } from './userRoute'
import { bookRoute } from './bookRoute'
import { groupRoute } from './groupRoute'

const router = express.Router()

router.use('/user', userRoute)
router.use('/book', bookRoute)
router.use('/group', groupRoute)

export const APIs = router
