'use strict';

let command = 'git remote add origin ';

/**
 * required by eval.js
 * clone git repository
 * @param  {object} config
 * @param  {string} value  [agument value]
 * @return {void}
 */
module.exports = (config, value, execute) =>
  execute(command + value);
