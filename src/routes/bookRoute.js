import express from 'express'
import { bookController } from '~/controllers/bookController'
import { verifyToken } from '~/middlewares/verifyToken'

const router = express.Router()
router.get('/read', bookController.getAllBook)
router.get('/:id', bookController.getBook)
router.use(verifyToken)
router.post('/create', bookController.createBook)
router.route('/:id').put(bookController.updateBook)
router.delete('/delete/:id', bookController.deleteBook)
export const bookRoute = router
