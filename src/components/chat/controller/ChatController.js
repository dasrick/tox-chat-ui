'use strict';
/**
 * @ngInject
 */
module.exports = function ($scope, WebSocketService) {
  var vm = this;
  // vars
  vm.appversion = process.env.appversion;
  var clientId = generateUUID();
  var routingKey = 'room42'; // TODO to be dynamic
  var destination = '/exchange/webcast-chat/' + routingKey;
  vm.messages = [];
  vm.now = Date.now();
  vm.chatSettings = {
    title: 'Mi Awesome Chat - v' + vm.appversion,
    botname: 'Chatbot',
    message: {
      placeholder: 'just write here',
      button: 'Send'
    },
    register: {
      placeholder: 'your nickname',
      button: 'Choose'
    }
  };
  // methods
  vm.sendMessage = sendMessage;
  vm.setUsername = setUsername;

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  pushRegisterMessage();

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

  function setUsername(user) {
    console.log(user);
    if (angular.isDefined(user)) {
      vm.username = user;

      // ToDo nur so eine Idee, könnte auch weg ... landet nicht in der Queue
      vm.messages = [];
      pushWelcomeMessage();
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

  function pushRegisterMessage() {
    // ToDo nur so eine Idee, könnte auch weg ... landet nicht in der Queue
    vm.messages.push({
      'clientId': clientId,
      'username': vm.chatSettings.botname,
      'content': 'Wie möchteste heißn?',
      'date': Date.now(),
      'systemMsg': true
    });
  }

  function pushWelcomeMessage() {
    // ToDo nur so eine Idee, könnte auch weg ... landet nicht in der Queue
    vm.messages.push({
      'clientId': clientId,
      'username': vm.chatSettings.botname,
      'content': 'Welcome ' + vm.username + ' ...',
      'date': Date.now(),
      'systemMsg': true
    });
  }

};
