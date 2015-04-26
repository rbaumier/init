'use strict';

// This is the internal application configuration file.
// To specify a configuration, create a config.json file into
// /configurations/user
module.exports = (cwd) => ({
  cwd,
  bootstrap: '/www/libs/bootstrap',
  args: [
    'repo',
    'open'
  ]
});
