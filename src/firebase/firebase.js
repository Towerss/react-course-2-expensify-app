import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC9c6bS6lUqu5xiYVZRL8qn_y3-59FQOtQ",
    authDomain: "udemy-expensify-test.firebaseapp.com",
    databaseURL: "https://udemy-expensify-test.firebaseio.com",
    projectId: "udemy-expensify-test",
    storageBucket: "udemy-expensify-test.appspot.com",
    messagingSenderId: "17739129980"
};


firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Andrew Mead',
  age: 26,
  isSingle: false,
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
});

// database.ref().set('This is my data.');

database.ref('age').set(27);
database.ref('location/city').set('New York');

database.ref('attributes').set({
  height: 73,
  weight: 150
});

console.log('I made a request to change the data.');
