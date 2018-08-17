/*

Object desctructuring




const person = {
    name: 'Diego',
    age: 36,
    location: {
        city: "Brisbane",
        temp: 15
    }
};

const { name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}` );

const {city, temp: temperature} = person.location;
if(city && temperature){
    console.log(`In ${city} is ${temperature} degrees` );
}

const book ={
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

*/


/*

Array desctructuring

*/

const address = ['31 Twine','Brisbane','QLD','19147'];
const [street, city, state, zipcode] = address;
console.log(`You are in ${city} , ${state}`);


const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [itemName,,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);
