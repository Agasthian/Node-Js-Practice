//CRUD -

// const monogodb = require('mongodb');
// const MongoClient = monogodb.MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

//Connection url
const url = 'mongodb://127.0.0.1:27017';

//Database Name
const dbname = 'taskmanager';

//connect method
MongoClient.connect(url, (error, client) => {
  if (error) {
    return console.log('Unnable to connect to database!');
  }

  const db = client.db(dbname);

  //Single data insert
  // db.collection('users').insertOne(
  //   {
  //     name: 'John doe',
  //     age: 18,
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Cannot insert data into collection');
  //     }
  //     console.log(result.ops);
  //   }
  // );

  //Insert multiple data
  // db.collection('users').insertMany(
  //   [
  //     {
  //       name: 'Jimmy',
  //       age: 48,
  //     },
  //     { name: 'Badsha', age: 31 },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Cannot insert data');
  //     }

  //     console.log(result.ops);
  //   }
  // );

  // db.collection('tasks').insertMany(
  //   [
  //     { description: 'Compelete Section 6', compeleted: true },
  //     { description: 'Re do tthe whole exercise', compeleted: false },
  //     { description: 'Arrange the meet up', compeleted: true },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Cannot enter the tasks ');
  //     }
  //     console.log(result.ops);
  //   }
  // );

  //Read single data
  // db.collection('users').findOne(
  //   { _id: new ObjectID('5e9dd682deb5c71bc8573734') },
  //   (error, user) => {
  //     if (error) {
  //       return console.log('Cannot fetch the data');
  //     }
  //     console.log(user);
  //   }
  // );

  //Read multiple data
  // db.collection('users')
  //   .find({ name: 'Agasthian' })
  //   .toArray((error, users) => {
  //     console.log(users);
  //   });

  //Fetch last task with the id
  // db.collection('tasks').findOne(
  //   { _id: new ObjectID('5e9dd805ea46b8465c58f1f3') },
  //   (error, task) => {
  //     if (error) {
  //       return console.log('Cannot fetch the task');
  //     }
  //     console.log(task);
  //   }
  // );

  //Fetch all tasks that are not compeleted
  // db.collection('tasks')
  //   .find({ compeleted: false })
  //   .toArray((error, tasks) => {
  //     if (error) {
  //       return console.log('Cannot fetch the task');
  //     }
  //     console.log(tasks);
  //   });

  // Update One user with id
  // db.collection('users')
  //   .updateOne(
  //     { _id: new ObjectID('5e9d947d05d0423edca27a10') },
  //     {
  //       $set: {
  //         name: 'Ram',
  //       },
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // db.collection('users')
  //   .updateOne(
  //     { _id: new ObjectID('5e9d947d05d0423edca27a10') },
  //     {
  //       $inc: {
  //         age: 1,
  //       },
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //Update all the task records
  // db.collection('tasks')
  //   .updateMany(
  //     { compeleted: false },
  //     {
  //       $set: {
  //         compeleted: true,
  //       },
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result.modifiedCount);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //Delete many
  // db.collection('users')
  //   .deleteMany({
  //     age: 31,
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //Delete One
  // db.collection('tasks')
  //   .deleteOne({
  //     description: 'Re do tthe whole exercise',
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});
