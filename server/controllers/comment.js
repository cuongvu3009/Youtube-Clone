const addComment = async (req, res) => {
  res.send('addComment');
};

const deleteComment = async (req, res) => {
  res.send('deleteComment');
};

const getComments = async (req, res) => {
  res.send('getComments');
};

module.exports = { addComment, deleteComment, getComments };
