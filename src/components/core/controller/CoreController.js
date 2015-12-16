'use strict';
/**
 * @ngInject
 */
module.exports = function () {
  var vm = this;

  vm.sendMessage = sendMessage;

  vm.messages = [
    {
      'username': 'Matt',
      'content': 'Hi!'
    },
    {
      'username': 'Elisa',
      'content': 'Whats up?'
    },
    {
      'username': 'Matt',
      'content': 'I found this nice AngularJS Directive'
    },
    {
      'username': 'Matt',
      'content': 'Hi!'
    },
    {
      'username': 'Elisa',
      'content': 'Whats up?'
    },
    {
      'username': 'Matt',
      'content': 'I found this nice AngularJS Directive'
    },
    {
      'username': 'Matt',
      'content': 'Hi!'
    },
    {
      'username': 'Elisa',
      'content': 'Whats up?'
    },
    {
      'username': 'Matt',
      'content': 'I found this nice AngularJS Directive'
    },
    {
      'username': 'Matt',
      'content': 'Hi!'
    },
    {
      'username': 'Elisa',
      'content': 'Whats up?'
    },
    {
      'username': 'Matt',
      'content': 'I found this nice AngularJS Directive'
    },
    {
      'username': 'Matt',
      'content': 'Hi!'
    },
    {
      'username': 'Elisa',
      'content': 'Whats up?'
    },
    {
      'username': 'Matt',
      'content': 'I found this nice AngularJS Directive'
    },
    {
      'username': 'Matt',
      'content': 'Hi!'
    },
    {
      'username': 'Elisa',
      'content': 'Whats up?'
    },
    {
      'username': 'Matt',
      'content': 'I found this nice AngularJS Directive'
    },
    {
      'username': 'Elisa',
      'content': 'Looks Great!'
    }
  ];

  vm.username = 'Matt';

  function sendMessage(message, username) {
    if (message && message !== '' && username) {
      vm.messages.push({
        'username': username,
        'content': message
      });
    }
  }

};
