#!/usr/bin/env node
'use strict';

let cli = require('commander');
let cwd = process.cwd();
let config = require('./config')(cwd);
let helpers = require('./helpers');
let execute = require('./execute')(
  config,
  require('child_process').exec,
  console.log
);

cli
  .version('0.0.1')
  .option('-r, --repo [url]', 'Add remote git repository')
  .parse(process.argv);

require('./args')(config, helpers)(cli, execute);
