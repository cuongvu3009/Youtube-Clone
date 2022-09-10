const express = require('express');
const router = express.Router();

const {
  addComment,
  deleteComment,
  getComments,
} = require('../controllers/comment');

//token
router.post('/', addComment);

//token
router.delete('/:id', deleteComment);

router.get('/:videoId', getComments);

module.exports = router;
