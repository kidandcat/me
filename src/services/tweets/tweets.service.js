// Initializes the `tweets` service on path `/tweets`
const createService = require('feathers-memory');
const hooks = require('./tweets.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'tweets',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tweets', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tweets');

  service.hooks(hooks);
};
