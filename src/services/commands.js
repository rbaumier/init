'use strict';

module.exports = (commands, exec) =>
  _.forEach(commands, command =>
    exec(command)
  );

