'use strict';

/**
 * @ngInject
 */

var appName = 'tox-chat-app';
var angular = require('angular');

//window.SockJS = require('sockjs-client');
//window.Stomp = require('stompjs/lib/stomp.min').Stomp;

var requires = [];

angular.module(appName, requires)

;

angular.bootstrap(document, [appName]);
