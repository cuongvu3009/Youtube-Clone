const update = async (req, res) => {
  res.send('update');
};

const deleteUser = async (req, res) => {
  res.send('deleteUser');
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
