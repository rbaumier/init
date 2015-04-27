#!/usr/bin/env node

'use strict';

let path = require('path');
var fs = require('fs');
let cli = require('commander');
let cwd = process.cwd();
let helpers = require('./helpers');
let cp = require('child_process');
let execute = helpers.execute(cwd, cp.exec, console.log);
let nodeinitFile;

// initialize cli
cli
  .version('0.0.1')
  .option('-r, --repo [url]', 'Add remote git repository')
  .option('-f, --file <filecfg>', 'Specify configuration file to use only this time')
  .parse(process.argv);

// check if nodeinit is defined, if not take the default one
async.filter([
  path.resolve(process.cwd(), './.nodeinit.json'),
  path.resolve(process.cwd(), './default/.nodeinit.json')
], fs.exists, (filepath) => {
  helpers.read(fs, _.first(filepath), (initFile) => {
    try {
      nodeinitFile = JSON.parse(initFile);
    } catch(err) {
      console.error('cannot parse configuration file:', err);
      process.exit(1);
    }
    require('./commands')(helpers)(cli, execute);
  });
});

