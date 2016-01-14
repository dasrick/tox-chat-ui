'use strict';
/**
 * @ngInject
 */
module.exports = function ($scope, WebSocketService) {
  var vm = this;
  // vars
  vm.username = generateUUID(); // TODO to be injected - what about a username
  var clientId = generateUUID();
  var routingKey = 'room42'; // TODO to be dynamic
  var destination = '/exchange/webcast-chat/' + routingKey;
  vm.messages = [];
  // methods
  vm.sendMessage = sendMessage;

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  WebSocketService.connect().then(function () {
    WebSocketService.subscribe(destination, function (message) {
      vm.messages.push(JSON.parse(message.body));
      $scope.$apply();
    });
  });

  $scope.$on('$destroy', function () {
    WebSocketService.disconnect().then(
      function () {
        console.log('... bye bye ...');
      }
    );
  });

  function sendMessage(message, username) {
    if (message && message !== '' && username) {
      var messageObject = {
        'clientId': clientId,
        'username': username,
        'content': message,
        'date': Date.now()
      };
      WebSocketService.send(destination, {}, JSON.stringify(messageObject));
    }
  }

  function generateUUID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

};
