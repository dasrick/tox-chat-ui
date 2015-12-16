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
      'content': 'Hi!',
      'date': 1450254829
    },
    {
      'username': 'Elisa',
      'content': 'Whats up?',
      'date': 1450264829
    },
    {
      'username': 'Matt',
      'content': 'I found this nice AngularJS Directive',
      'date': 1450274829
    },
    {
      'username': 'Matt',
      'content': 'Hi!',
      'date': 1450284829
    },
    {
      'username': 'Elisa',
      'content': 'Whats up?',
      'date': 1450290829
    },
    {
      'username': 'Matt',
      'content': 'I found this nice AngularJS Directive',
      'date': 1450291829
    },
    {
      'username': 'Matt',
      'content': 'Hi!',
      'date': 1450292829
    },
    {
      'username': 'Elisa',
      'content': 'Whats up?',
      'date': 1450293829
    },
    {
      'username': 'Matt',
      'content': 'I found this nice AngularJS Directive',
      'date': 1450293829
    },
    {
      'username': 'Matt',
      'content': 'Hi!',
      'date': 1450293929
    },
    {
      'username': 'Elisa',
      'content': 'Whats up?',
      'date': 1450294029
    },
    {
      'username': 'Matt',
      'content': 'I found this nice AngularJS Directive',
      'date': 1450294129
    },
    {
      'username': 'Matt',
      'content': 'Hi!',
      'date': 1450294229
    },
    {
      'username': 'Elisa',
      'content': 'Whats up?',
      'date': 1450294329
    },
    {
      'username': 'Matt',
      'content': 'I found this nice AngularJS Directive',
      'date': 1450294429
    },
    {
      'username': 'Matt',
      'content': 'Hi!',
      'date': 1450294529
    },
    {
      'username': 'Elisa',
      'content': 'Whats up?',
      'date': 1450294629
    },
    {
      'username': 'Matt',
      'content': 'I found this nice AngularJS Directive',
      'date': 1450294729
    },
    {
      'username': 'Enrico Hoffmann von Fallersleben',
      'content': 'Looks Great!',
      'date': 1450294829
    }
  ];

  vm.username = 'Matt';

  function sendMessage(message, username) {
    if (message && message !== '' && username) {
      vm.messages.push({
        'username': username,
        'content': message,
        'date': Date.now()
      });
    }
  }

};
