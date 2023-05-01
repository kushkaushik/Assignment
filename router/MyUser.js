const express = require('express')
const router = express.Router();
const {Creation,LOGIN,GetData} = require('../controller/MyuserController')

router.post('/create',Creation)
router.post('/login',LOGIN)
router.get('/all',GetData)

module.exports  = router;