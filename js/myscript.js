"use strict"

const FizzBuzzList = document.getElementById("element-list");

for (let counter = 1; counter <= 100; counter++) {
    let FizzBuzzElement = document.createElement("li")
    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log("FizzBuzz");
        FizzBuzzElement.append("FizzBuzz");
        FizzBuzzList.append(FizzBuzzElement);
    } else if (counter % 3 === 0) {
        console.log("Fizz");
        FizzBuzzElement.append("Fizz");
        FizzBuzzList.append(FizzBuzzElement);
    } else if (counter % 5 === 0) {
        console.log("Buzz");
        FizzBuzzElement.append("Buzz");
        FizzBuzzList.append(FizzBuzzElement);
    } else {
        console.log(counter);
        FizzBuzzElement.append(counter);
        FizzBuzzList.append(FizzBuzzElement);
    }
}


