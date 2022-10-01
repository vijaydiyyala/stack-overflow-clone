import express from 'express';

import { login, signup, otpLogin } from '../controllers/auth.js'
import { getAllUsers, updateProfile } from '../controllers/users.js'
import auth from '../middlewares/auth.js'

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/OtpLogin' , otpLogin)

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)

export default router