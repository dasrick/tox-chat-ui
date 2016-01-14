'use strict';
/**
 * @ngInject
 */
module.exports = function ($q, $log, $location) {
  var webSocketClient;
  webSocketClient = null;
  return {
    connect: function () {
      var deferred, onConnect, onError;

      // TODO von außen injizieren ...
      //var stompConfig = {
      //  user: 'user',
      //  password: 'guest',
      //  host: '//' + $location.host() + ':15672/stomp'
      //  //host: 'amqp://127.0.0.1'
      //};
      var stompConfig = {
        user: 'jlbnllvg',
        password: 'hL4BAyeN_IKMwWnVtcDlQQJ9b0zhFL24',
        host: 'https://hare.rmq.cloudamqp.com/stomp',
        vhost: 'jlbnllvg'
        //host: 'amqp://127.0.0.1'
      };
      deferred = $q.defer();
      webSocketClient = window.Stomp.over(new window.SockJS(stompConfig.host));
      webSocketClient.heartbeat.incoming = 0;
      webSocketClient.heartbeat.outgoing = 0;
      webSocketClient.debug = function (message) {
        $log.debug('STOMP DEBUG:\'' + message + '\'');
      };
      onConnect = function () {
        return deferred.resolve();
      };
      onError = function () {
        return deferred.reject();
      };
      webSocketClient.connect(stompConfig.user, stompConfig.password, onConnect, onError, stompConfig.vhost);
      return deferred.promise;
    },
    subscribe: function (queue, onMessage) {
      return webSocketClient.subscribe(queue, onMessage);
    },
    disconnect: function () {
      var deferred;
      deferred = $q.defer();
      if (webSocketClient != null) {
        webSocketClient.disconnect(function () {
          return deferred.resolve();
        });
      }
      return deferred.promise;
    },
    send: function (destination, headers, body) {
      return webSocketClient.send(destination, headers, body);
    }
  };
};