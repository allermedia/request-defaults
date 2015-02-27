/*
 * request wrapper which provides global defaults
 * 
 */
/* jshint node: true */
module.exports = require('request').defaults({});

module.exports.globalDefaults = function(options) {
  module.exports = require('request').defaults(options);
  return module.exports;
};
