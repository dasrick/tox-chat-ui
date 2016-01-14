'use strict';
/**
 * @ngInject
 */
module.exports = require('angular')
  .module('components', [
    require('./chat').name
  ]);
