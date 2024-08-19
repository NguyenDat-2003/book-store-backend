import express from 'express'
import { userRoute } from './userRoute'
import { bookRoute } from './bookRoute'
import { groupRoute } from './groupRoute'
import { roleRoute } from './roleRoute'
import { categoryRoute } from './categoryRoute'
import { supplierRoute } from './supplierRoute'

const router = express.Router()

router.use('/user', userRoute)
router.use('/book', bookRoute)
router.use('/category', categoryRoute)
router.use('/supplier', supplierRoute)
router.use('/group', groupRoute)
router.use('/role', roleRoute)

export const APIs = router
