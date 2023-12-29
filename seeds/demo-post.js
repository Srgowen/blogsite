const { Post } = require('../models');

const postdata = [
  {
    title: 'A Fake Post',
    body: 'routes and posts test was successful',
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
