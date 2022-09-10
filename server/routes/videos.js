const express = require('express');
const router = express.Router();

const {
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
} = require('../controllers/video');

//create a video, need token
router.post('/', addVideo);

//update a video, need token
router.put('/:id', updateVideo);

//delete a video, need token
router.delete('/:id', deleteVideo);

//get video
router.get('/find/:id', getVideo);

//add view
router.put('/view/:id', addView);

//get trend
router.get('/trend', trend);

//get random
router.get('/random', random);

//create a video, need token
router.get('/sub', sub);

//get by tag
router.get('/tags', getByTag);

//get by search
router.get('/search', search);

module.exports = router;
