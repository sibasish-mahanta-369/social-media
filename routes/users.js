const {getSingleUser,getSingleUsersfollowers,getSingleUsersfollowing} = require('../controllers/controllers')
const express = require('express')
const router = express.Router()


router.route('/:username').get(getSingleUser)
router.route('/:username/followers').get(getSingleUsersfollowers)
router.route('/:username/following').get(getSingleUsersfollowing)

module.exports = router
