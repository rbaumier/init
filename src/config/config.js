'use strict';

module.exports = (cwd) => ({
  cwd,
  container: '/www',
  bootstrap: '/www/libs/bootstrap',
  args: [
    'repo',
    'open'
  ]
});
