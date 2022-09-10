const addVideo = async (req, res) => {
  res.send('addVideo');
};

const updateVideo = async (req, res) => {
  res.send('updateVideo');
};

const deleteVideo = async (req, res) => {
  res.send('deleteVideo');
};

const getVideo = async (req, res) => {
  res.send('getVideo');
};

const addView = async (req, res) => {
  res.send('addView');
};

const random = async (req, res) => {
  res.send('random');
};

const trend = async (req, res) => {
  res.send('trend');
};

const sub = async (req, res) => {
  res.send('sub');
};

const getByTag = async (req, res) => {
  res.send('getByTag');
};

const search = async (req, res) => {
  res.send('search');
};

module.exports = {
  getByTag,
  getVideo,
  addVideo,
  updateVideo,
  deleteVideo,
  addView,
  random,
  trend,
  sub,
  search,
};
