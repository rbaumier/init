'use strict';

let command = 'git init && git remote add origin ';

/**
 * required by eval.js
 * clone git repository
 * @param  {object} config
 * @param  {string} url  [agument url]
 * @return {void}
 */
module.exports = (url, exec) =>
  exec(command + url);
