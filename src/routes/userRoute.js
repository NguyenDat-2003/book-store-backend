import express from 'express'
import { authController } from '~/controllers/authController'
import { userController } from '~/controllers/userController'
import { checkUserPermission } from '~/middlewares/checkUserPermission'
import { verifyToken } from '~/middlewares/verifyToken'
import { authValidation } from '~/validations/authValidation'

const router = express.Router()

router.post('/signup', authValidation.signUp, authController.signup)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.post('/recommend', userController.recommendSystem)

router.use(verifyToken)
router.put('/update-password', userController.updatePassword)
router.put('/update-me', userController.updateMe)
// --------------------ADD TO CART--------------
router.post('/add-to-cart', userController.addCartUser)
router.get('/cart-quantity/:userId', userController.countQuantityCart)
router.post('/update-cart-quantity', userController.updateCartQuantity)
router.delete('/delete-cart-item/:bookId', userController.deleteCartItem)
router.get('/my-cart', userController.getMyCart)
router.post('/order', userController.orderCart)
router.get('/my-order', userController.getOrder)
router.get('/purchases', userController.getPurchases)

router.use(checkUserPermission)
router.route('/create').post(userController.createUser)
router.route('/read').get(userController.getAllUser)
router.route('/detail').get(userController.getUser)
router.route('/update').put(userController.updateUser)
router.route('/delete').delete(userController.deleteUser)

export const userRoute = router
