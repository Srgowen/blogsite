const { Comment } = require('../models');

const commentdata = [
  {
    body: 'Test comment.',
    user_id: 1,
    post_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
