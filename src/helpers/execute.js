'use strict';

module.exports = (config, exec, logger) => (command) =>
  exec(`(cd ${config.cwd}; ${command})`, (error, stdout, stderr) =>
    logger(error || stderr || stdout)
  );

