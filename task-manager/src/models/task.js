const mongoose = require('mongoose');

// Creating a model Tasks
const Task = mongoose.model('Tasks', {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  compeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task;

// const task1 = new Tasks({
//   description: '          Find new material for the product',
//   compeleted: true,
// });

// task1
//   .save()
//   .then(() => {
//     console.log(task1);
//   })
//   .catch((error) => {
//     console.log('Error', error);
//   });
