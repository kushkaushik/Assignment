const express = require('express')
const auth = require('../middleware/auth')
const router = express.Router();
const {POST,active,getAll,getResult, getPublish,allResult}  = require('../controller/quizController')


router.post('/quizzes',auth,POST)
router.get('/quizzes/active',active)
router.get('/quizzes/all',auth,getAll)

router.post('/quizzes/:id',auth,getResult)

router.put('/quizzes/publish/:id',auth,getPublish)

router.get('/quizzes/allresult',auth,allResult)



module.exports = router