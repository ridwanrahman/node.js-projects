var person = {};  //This is an object. An object has key and value
person.firstName = 'ridwan';
person.lastName = 'rahman';

function greetUser(person) {
    console.log("hello "+person.firstName);
}

greetUser(person)