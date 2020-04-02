const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes');
const yargs = require('yargs');

// const msg = notes();
// console.log(msg);

// console.log(validator.isEmail('aga@gmail.com'));
// console.log(validator.isURL('http://www.agagmail.com'));
// console.log(chalk.bold.white.bgGreen('Success!'));
// console.log(chalk.bold.white.bgRed('Error'));

// const command = process.argv[2];
// console.log(process.argv);

// if (command === 'add') {
//   console.log('Notes added');
// } else if (command === 'remove') {
//   console.log('Notes removed !');
// }

//Customize yars version
yargs.version('1.1.2');

//create add command
yargs.command({
  command: 'add',
  description: 'Add a new notes',
  builder: {
    title: {
      describe: 'Add a new title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Add a content',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});
//remove command
yargs.command({
  command: 'remove',
  description: 'remove a note',
  builder: {
    title: {
      describe: 'Enter the title to be removed',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

//List all command
yargs.command({
  command: 'list',
  description: 'List all the notes in the application',
  handler() {
    notes.listNotes();
  }
});

//Read the List
yargs.command({
  command: 'read',
  description: 'Reads the selected note',
  builder: {
    title: {
      description: 'Enter the title to read',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.ReadNote(argv.title);
  }
});

// console.log(yargs.argv);
yargs.parse();
