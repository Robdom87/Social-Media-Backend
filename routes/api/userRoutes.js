const router = require('express').Router();
const {
  getAllThoughts,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/thoughts
router.route('/')
  .get(getAllThoughts)
  .post(createUser);

// /api/thoughts/:courseId
router.route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

  // /api/users/:userId/friends
router.route('/:userId/friends')
  .post(addFriend);

  // /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .delete(removeFriend);

module.exports = router;