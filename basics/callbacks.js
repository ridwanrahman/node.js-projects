//a callback is a function passed as an argument to another function
// this technique allows a function to call another function
// A callback function can run after another function has finished


// This is a callback function because, the function message is called after 3 seconds. 
// Which we defined with the setTimeout function.
const message = function() {
    console.log("this message is shown after 3 seconds");
}
setTimeout(message,3000);


setTimeout(function() {
    console.log("this message is shown after 3 seconds");
},3000)

setTimeout(() => {
    console.log("this message is shown after 3 seconds adn implemented with arrow function");
}, 3000)

var grades = [100,50]
grades.forEach(function(grade){
    console.log(grade);
});