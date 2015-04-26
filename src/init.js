#!/usr/bin/env node

'use strict';

let cli = require('commander');
let cwd = process.cwd();
let config = require('./config')(cwd);
let helpers = require('./helpers');
let cp = require('child_process');
let execute = helpers.execute(config, cp.exec, console.log);

cli
  .version('0.0.1')
  .option('-r, --repo [url]', 'Add remote git repository')
  .option('-f, --file <filecfg>', 'Specify configuration file to use only this time')
  .parse(process.argv);

require('./commands')(config, helpers)(cli, execute);
