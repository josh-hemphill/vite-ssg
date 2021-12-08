#!/usr/bin/env node
'use strict'
/* eslint-disable no-unused-expressions */
import * as yargs from 'yargs'
import { build } from './build.js'

yargs
  .scriptName('vite-ssg')
  .usage('$0 [args]')
  .command(
    'build',
    'Build SSG',
    args => args
      .option('script', {
        choices: ['sync', 'async', 'defer', 'async defer'] as const,
        describe: 'Rewrites script loading timing',
      })
      .option('mock', {
        type: 'boolean',
        describe: 'Mock browser globals (window, document, etc.) for SSG',
      }),
    async(args) => {
      await build(args)
    },
  )
  .showHelpOnFail(false)
  .help()
  .argv
