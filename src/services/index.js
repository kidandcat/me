const users = require('./users/users.service.js');
const tweets = require('./tweets/tweets.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(tweets);
};
