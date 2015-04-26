'use strict';

/**
 * required by eval.js
 * open in sourcetree and sublime text
 * @param  {object} config
 * @param  {string} values  [programs to open]
 * @return {void}
 */
module.exports = (config, values, execute) =>
  values.forEach(program => execute(program + ' .'));
