"use strict"
console.log(data[1]);

// let firstName = "UMA";
// let lastName = "Bob";

let information = console.log("What information do you want. ie:","");

function infoLookUpTool(firstName, lastName) {
    let newData = data.filter(function (el) {
        return (firstName == el.firstName && lastName == el.lastName)
    })
    if (newData.length > 0) {
        console.log(newData[0].eyeColor);
    }
}
infoLookUpTool("Uma", "Bob");