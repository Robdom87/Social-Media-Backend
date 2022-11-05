const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/thoughts
router.route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/thoughts/:courseId
router.route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete (removeFriend);

module.exports = router;