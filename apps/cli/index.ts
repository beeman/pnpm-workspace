import { add } from '@beeman/pnpm-workspace-add'
import { Command } from 'commander'

import app from './package.json' assert { type: 'json' }

const program = new Command().name(app.name).description(app.description).version(app.version)

program
  .command('add')
  .argument('<a>', 'first number', parseInt)
  .argument('<b>', 'second number', parseInt)
  .action(async (a: number, b: number) => {
    console.log(JSON.stringify({ operation: 'add', a, b, x: add(a, b) }, null, 2))
  })

program.parse()
