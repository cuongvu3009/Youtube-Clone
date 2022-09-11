const createError = require('../error');
const Video = require('../models/Video');

const addVideo = async (req, res) => {
  const newVideo = await Video.create({ userId: req.user.id, ...req.body });
  res.status(201).json(newVideo);
};

const updateVideo = async (req, res, next) => {
  const video = await Video.findById(req.params.id);
  if (!video) {
    return next(createError(404, `No video with ${req.params.id} found!`));
  }
  if (req.user.id === video.userId) {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedVideo);
  } else {
    return next(createError(403, `You can only update your video!`));
  }
};

const deleteVideo = async (req, res) => {
  const video = await Video.findById(req.params.id);
  if (!video)
    return next(createError(404, `No video with ${req.params.id} found!`));
  if (req.user.id === video.userId) {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedVideo);
  } else {
    return next(createError(403, `You can only delete your video!`));
  }
};

const getVideo = async (req, res) => {
  const video = await Video.findById(req.params.id);
  res.status(200).json(video);
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
