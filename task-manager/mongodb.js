// CRUD Create Read Update Delete

//Import
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

//Connectipon URL
const url = 'mongodb://localhost:27017';

//DB name
const dbName = 'task-manager';

//id Generation
// const id = new ObjectID();
// console.log(id);

//Connect using mongo Client
MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.log('Unnable to connect to DB');
  }

  const db = client.db(dbName);

  //Single data insert
  // db.collection('users').insertOne(
  //   {
  //     name: 'Jane',
  //     age: 10,
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert data');
  //     }

  //     console.log(result.ops);
  //   }
  // );

  //Multiple data insert
  // db.collection('users').insertMany(
  //   [
  //     { name: 'John', age: 13 },
  //     { name: 'steve', age: 55 },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert data');
  //     }
  //     console.log(result.ops);
  //   }
  // );

  //New Collection and multiple data insert
  // db.collection('tasks').insertMany(
  //   [
  //     { description: 'Wash Cloths', compeleted: false },
  //     {
  //       description: 'Workout',
  //       compeleted: false,
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Unnable to insert multiple data ');
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
  //   { _id: new ObjectID('5ee5e644706ad30ad41a7319') },
  //   (error, data) => {
  //     if (error) {
  //       return console.log('Unable to fetch task');
  //     }
  //     console.log(data);
  //   }
  // );

  //Find all
  // db.collection('tasks')
  //   .find({ compeleted: false })
  //   .toArray((error, task) => {
  //     console.log(task);
  //   });

  // Update data using Promises - Update one(Node API)
  //Using promises instead of callback
  // db.collection('users')
  //   .updateOne(
  //     {
  //       _id: new ObjectID('5ee5d5ba6293a428d877e715'),
  //     },
  //     {
  //       $set: { name: 'Agasthian' },
  //     }
  //   )
  //   .then((result) => {
  //     console.log('Success', result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //Update many data using promises - Update Many(Node API)
  // db.collection('tasks')
  //   .updateMany(
  //     { compeleted: false },
  //     {
  //       $set: { compeleted: true },
  //     }
  //   )
  //   .then((result) => {
  //     console.log('Success', result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // Delete Many data - with users of age 20
  // db.collection('users')
  //   .deleteMany({ age: 55 })
  //   .then((result) => {
  //     console.log(result.deletedCount);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //Delete Single data Entry
  // db.collection('tasks')
  //   .deleteOne({ description: 'Workout' })
  //   .then((result) => {
  //     console.log(result.deletedCount);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});
