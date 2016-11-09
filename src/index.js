#! /usr/bin/env node

'use strict';

const chalk = require('chalk');
const hexName = require('hex-name');
const program = require('commander');
const pckg = require('../package.json');

const render = function (name, available) {
  if (available) {
    console.log(chalk.green(name + ' is available'));
  } else {
    console.log(chalk.red(name + ' is unavailable'));
  }
}

program.version(pckg.version, '-v, --version')
  .arguments('<name>')
  .action(function (name) {
    hexName(name)
      .then(available => {
        render(name, available);
      })
      .catch(available => {
        render(name, available);
      });
  })
  .parse(process.argv);

if (!program.args[0]) {
  return console.log('No package name given. Please try: hex-name cowboy');
}