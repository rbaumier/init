'use strict';

let command = 'git init && git remote add origin ';

/**
 * required by eval.js
 * clone git repository
 * @param  {object} config
 * @param  {string} value  [agument value]
 * @return {void}
 */
module.exports = (value, execute) =>
  execute(command + value);
