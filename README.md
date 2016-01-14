# tox-chat-ui

[![GitHub version](https://badge.fury.io/gh/dasrick%2Ftox-chat-ui.svg)](https://badge.fury.io/gh/dasrick%2Ftox-chat-ui)
[![Build Status](https://travis-ci.org/dasrick/tox-chat-ui.svg?branch=master)](https://travis-ci.org/dasrick/tox-chat-ui)
[![dependency Status](https://david-dm.org/dasrick/tox-chat-ui/status.svg)](https://david-dm.org/dasrick/tox-chat-ui#info=dependencies)
[![devDependency Status](https://david-dm.org/dasrick/tox-chat-ui/dev-status.svg)](https://david-dm.org/dasrick/tox-chat-ui#info=devDependencies)
[![Heroku Badge](http://img.shields.io/badge/staging%20to-Heroku-7056bf.svg)](https://tox-chat-qa.herokuapp.com)
[![Heroku Badge](http://img.shields.io/badge/production%20to-Heroku-7056bf.svg)](https://tox-chat.herokuapp.com)

> Simple chat for AngularJS
 
A sample chat app ... based on AngularJS, Bootstrap, SockJS ...


## Installation

Install with [npm](https://www.npmjs.com/)

```sh
$ npm install
```


## Usage

Run with [npm](https://www.npmjs.com/)

```sh
$ npm run start
```

## RabbitMQ

* add exchange (example: webcast-chat) as type: fanout, durability: durable, auto-delete: no, internal: no
* add queue (example: chat-history) durability: durable, auto-delete: no
* bind the queue to exchange with routingkey room*