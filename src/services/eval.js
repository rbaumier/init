'use strict';

/**
 * execute every service specified into configuration,
 */
module.exports = (helpers) => (nodeinitFile, exec) =>
  _.forEach(nodeinitFile, (value, service) =>
    require('./' + service)(value, exec)
  );

