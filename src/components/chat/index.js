'use strict';
/**
 * @ngInject
 */
var ModuleName = 'chat',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('ChatController', require('./controller/ChatController'))

  .factory('WebSocketService', require('./service/WebSocketService'))

  .config(function ($stateProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
  })
;
