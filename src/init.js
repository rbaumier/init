#!/usr/bin/env node

'use strict';

let path = require('path');
var fs = require('fs');
let cli = require('commander');
let cwd = process.cwd();
let cp = require('child_process');
let helpers = require('./helpers');
let execute = helpers.execute(cwd, cp.exec, console.log);
let config = require('./config');
let nodeinitFile;

// initialize cli
cli
  .version('0.0.1')
  .option('-r, --repo [url]', 'Add remote git repository')
  .option('-f, --file <filecfg>', 'Specify configuration file to use only this time')
  .parse(process.argv);

// check if .nodeinit is defined, if not take the default one
async.filter([
  // TODO: search first into --file <FILE>
  path.resolve(process.cwd(), './.nodeinit'),
  path.resolve(process.cwd(), './default/.nodeinit')
], fs.exists, (filepath) => {
  helpers.read(fs, _.first(filepath), (initFile) => {
    try {
      nodeinitFile = JSON.parse(initFile);
    } catch(err) {
      console.error('cannot parse configuration file:', err);
      process.exit(1);
    }
    require('./services')(helpers)(
      cli,
      execute,
      _.extend(nodeinitFile, _.pick(cli, config.cli.services))
    );
  });
});

// execute commands depending on configuration

// regarder si -f est précisé, si oui on va chercher le fichier du path et on le parse
// sinon on va regarder si config.json existe dans configurations/user
// sinon on affiche un message "no configuration file, please create /path/to/config.json or specify a configuration file with -f <cfgfile> option"

// parser le config.json avec
