import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};


firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


/* Create,, Update, Delete tracking with different options
//Notifies when entry removed
database.ref('expenses').on('child_removed', (snapshot) =>{
  console.log(snapshot.key, snapshot.val());
});

//Notifies when entry property changed
database.ref('expenses').on('child_changed', (snapshot) =>{
  console.log(snapshot.key, snapshot.val());
});

//Notifies when entry added, but fetches all existing entries
database.ref('expenses').on('child_added', (snapshot) =>{
  console.log(snapshot.key, snapshot.val());
});
*/


/* Read object and convert to array tracking changes
database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expenses);
}, (e) => { 'Error: ', e });
*/

/* Read object and convert to array
database.ref('expenses').once('value').then((snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expenses);
}).catch((e) => { 'Error: ', e });

//database.ref().set(null);
*/

/* Create objects
database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 976123498763
});

database.ref('expenses').push({
  description: 'Phone bill',
  note: '',
  amount: 5900,
  createdAt: 976123498763
});

database.ref('expenses').push({
  description: 'Food',
  note: '',
  amount: 1200,
  createdAt: 976123498763
});
*/

/*
database.ref().set({
  name: 'Andrew Mead',
  age: 26,
  stressLevel: 6,
  job: {
    title: 'Software Developer',
    company: 'Google'
  },
  isSingle: false,
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
}).then(() => {
  console.log('Data saved!');
}).catch((error) => {
  console.log('Error: ', error);
});
*/

/* Read with fomatted output
database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});
*/


/* Read and keep track of changes.
const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (error) => {
  console.log('Error with data fetching: ', error);
});

// to unsubscribe from changes
database.ref().off(snapshot.val());
*/

/* Read Once
database.ref().once('value').then((snapshot) => {
  const val = snapshot.val();
  console.log(val);
}).catch((error) => {
  console.log('Error: ', error);
});
*/

/* Update
database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seatle'
}).then(() => {
  console.log('Data updated!');
}).catch((error) => {
  console.log('Error: ', error);
});
*/


/* Remove-Delete
database.ref('isSingle').remove().then(() =>{
  console.log('Data removed');
}).catch((e) => {
console.log('Data NOT removed: ', e);
});
*/

