'use strict';

var path = require('path');
var fs = require('fs-extra');
var glob = require('glob');

function rename(dest, src) {
  var srcPath = src.split('/').reverse();
  return dest + srcPath[2] + '/' + srcPath[0];
}

// options is optional
glob(process.argv[2], {}, function (er, files) {
  files.forEach(function (file) {
    var destFile = path.normalize(rename(process.argv[3], file));
    fs.copy(file, destFile, function (err) {
      if (err) {
        return console.error(err);
      }
    });
  });
});
