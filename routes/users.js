const {createNewUser,getSingleUser,getSingleUsersfollowers,getSingleUsersfollowing,followUser,unFollowUser} = require('../controllers/controllers')
const express = require('express')
const router = express.Router()

router.route('/').post(createNewUser)
router.route('/:username').get(getSingleUser)
router.route('/:username/followers').get(getSingleUsersfollowers)
router.route('/:username/following').get(getSingleUsersfollowing)
router.route('/:username/follow').post(followUser).delete(unFollowUser)


module.exports = router
