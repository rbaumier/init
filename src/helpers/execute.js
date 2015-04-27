'use strict';

module.exports = (cwd, exec, logger) => (command) =>
  exec(`(cd ${cwd}; ${command})`, (error, stdout, stderr) =>
    logger(error || stderr || stdout)
  );

