const yargs = require('yargs')
const chalk = require('chalk')
const data = require('./database.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new datum',
    builder: {
        title: {
            describe: 'Datum title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Datum body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        data.addDatum(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a datum',
    builder: {
        title: {
            describe: 'Datum title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        data.removeDatum(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your data',
    handler: function () {
        data.listData()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a datum',
    builder: {
        title: {
            describe: 'Datum title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        data.readDatum(argv.title)
    }
})

yargs.parse()