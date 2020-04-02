const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your Notes';
};

//Add Notes function
const addNotes = (title, body) => {
  const loadedData = loadContent();

  // const duplicateNote = loadedData.filter(function(note) {
  //   return note.title === title;
  // });

  // debugger;

  const duplicateNote = loadedData.find(note => note.title === title);

  if (!duplicateNote) {
    loadedData.push({
      title: title,
      body: body
    });
    saveData(loadedData);
    console.log(chalk.bold.white.bgGreen('New note added !'));
  } else {
    console.log(chalk.bold.white.bgRed('Note title already taken'));
  }
};

//Load data from file
const loadContent = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const data = dataBuffer.toString();
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Save data to file
const saveData = data => {
  const writeData = JSON.stringify(data);
  fs.writeFileSync('notes.json', writeData);
};

//Remove Note
const removeNote = title => {
  const loadedData = loadContent();
  // const newData = loadedData.filter(function(note) {
  //   return note.title !== title;
  // });
  const newData = loadedData.filter(note => note.title !== title);

  if (loadedData.length > newData.length) {
    saveData(newData);
    console.log(chalk.bold.white.bgGreen('Notes deleted!'));
  } else {
    console.log(chalk.bold.white.bgRed('No Note removed'));
  }
};

//List all Notes
const listNotes = () => {
  console.log(chalk.bold.blue('Your Notes'));
  const loadedData = loadContent();
  loadedData.forEach(note => console.log(chalk.bold.yellow.bgBlue(note.title)));
};

//Read the note
const ReadNote = title => {
  const loadedData = loadContent();
  const readData = loadedData.find(note => note.title === title);
  if (readData) {
    console.log(chalk.bold.blue(readData.title));
    console.log(readData.body);
  } else {
    console.log(chalk.bold.white.bgRed('No Note found'));
  }
};
module.exports = {
  addNotes,
  getNotes,
  removeNote,
  listNotes,
  ReadNote
};
