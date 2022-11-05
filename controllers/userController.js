const { User } = require('../models');

module.exports = {
  getAllUsers(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
//   // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
  createUser(req, res) {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },
  //populate thought and friend data as well
  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .select('-__v')
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .then(() => res.json({ message: 'User deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    console.log('You are adding a friend');
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { _id: req.params.friendId } } },
      { runValidators: true, new: true }
    )
      .then((friend) =>
        !friend
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { _id: req.params.friendId } } },
      { runValidators: true, new: true }
    )
      .then((friend) =>
        !friend
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  }
};