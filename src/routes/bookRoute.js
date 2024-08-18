import express from 'express'
import { bookController } from '~/controllers/bookController'
import { verifyToken } from '~/middlewares/verifyToken'

const router = express.Router()
router.get('/', bookController.getAllBook)
router.get('/:id', bookController.getBook)
router.use(verifyToken)
router.route('/').post(bookController.createBook)
router.route('/:id').put(bookController.updateBook)
router.delete('/delete/:id', bookController.deleteBook)
export const bookRoute = router
