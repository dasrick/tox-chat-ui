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
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

};
