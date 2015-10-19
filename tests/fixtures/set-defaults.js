/**
 * Set global defaults in separate file
 */
var request = require('../../');
request.globalDefaults({
  timeout: 0.5*1000
});
