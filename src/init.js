#!/usr/bin/env node
'use strict';

let cli = require('commander');
let config = require('./config');
let helpers = require('./helpers');
let io = require('./io');

cli
  .version('0.0.1')
  .option('-r, --repo [url]', 'Add remote git repository')
  .parse(process.argv);

require('./args')(config, helpers)(cli, io);
