'use strict';

/**
 * required by ../init
 * [compare valid user args with existing args and pass them to eval module]
 * @param  {object} config
 * @param  {object} helpers
 * @return {void}
 */
module.exports = (config, helpers) => (cli, execute) => {
  require('./eval')(config, helpers)(
    _.pick(cli, config.args),
    execute
  );
}
