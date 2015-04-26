'use strict';

module.exports = (config, helpers) => (cli) => {
  // all existing args
  let args = {
    repo: require('./repo')(config)
  };

  // args specified by users
  let userArgs = helpers.extractArgs(cli, args);
}
