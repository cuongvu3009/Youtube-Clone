const User = require('../models/User');

const update = async (req, res) => {
  const { id } = req.params;
  if (id === req.user.id) {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } else {
    res.send('You can only update your account');
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (id === req.user.id) {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).json(deletedUser);
  } else {
    res.send('You can only delete your account');
  }
};

const getUser = async (req, res) => {
  res.send('getUser');
};

const subscribe = async (req, res) => {
  res.send('subscribe');
};

const unsubscribe = async (req, res) => {
  res.send('unsubscribe');
};

const like = async (req, res) => {
  res.send('like');
};

const dislike = async (req, res) => {
  res.send('dislike');
};

module.exports = {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
};
