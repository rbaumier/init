#!/usr/bin/env node
'use strict';

let cli = require('commander');
let cwd = process.cwd();
let config = require('./config')(cwd);
let helpers = require('./helpers');
let execute = helpers.execute(
  config,
  require('child_process').exec,
  console.log
);

cli
  .version('0.0.1')
  .option('-r, --repo [url]', 'Add remote git repository')
  .option('-f, --file <filecfg>', 'Open current folder with programs', helpers.split)
  .parse(process.argv);

require('./args')(config, helpers)(cli, execute);
