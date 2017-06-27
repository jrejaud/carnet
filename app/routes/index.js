const routes = require('./routes');

module.exports = function(app, db) {
  routes(app, db);
  //other route groups could go here in future
}
