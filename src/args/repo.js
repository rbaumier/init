'use strict';

let exec = require('child_process').exec;
let command = 'git remote add origin ';

/**
 * required by eval.js
 * clone git repository
 * @param  {object} config
 * @param  {string} value  [agument value]
 * @return {void}
 */
module.exports = (config, value, io) =>
  // todo: check if user has git
  exec(command + value, (error, stdout, stderr) =>
    io(error || stderr || stdout)
  );
