var x = 0;
var y = 0;
var z = 0;

function myMoveFunction() {
  document.getElementById("demo").innerHTML = z+=1;
}

function myEnterFunction() {
  document.getElementById("demo2").innerHTML = x+=1;
}

function myOverFunction() {
  document.getElementById("demo3").innerHTML = y+=1;
}

function addMyName() {
    // object: person
    const person = {
        firstName: "Clare",
        lastName: "XU",
        id: 5566,
    };
    // declare method of an object
    person.name = function() {
        return this.firstName + " " + this.lastName;
    };
    document.getElementById("author").innerHTML = "My name is " + person.name(); 
}

function hideMyName() {
    document.getElementById("author").innerHTML = "My name is "; 
}

