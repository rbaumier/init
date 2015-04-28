'use strict';

module.exports = (folders, exec) =>
  _.forEach(folders, folder =>
    exec('cp ${folder}/* .'
  ));

