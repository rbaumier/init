'use strict';

/**
 * required by index.js
 * eval and execute commands
 * @param  {object} config
 * @return {void}
 */
module.exports = (helpers) => (args, execute) =>
  _.forEach(args, (value, arg) =>
    require('./' + arg)(value, execute)
  );

