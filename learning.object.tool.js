"use strict"
console.log(data[1]);

let firstName = "UMA";
let lastName = "Bob";

let information = console.log("What information do you want. ie:","");

function infoLookUpTool(firstName) {
    let newData = data.filter(function (el) {
        console.log(firstName)
        return (firstName == el.firstName)
    })
    if (newData.length > 0) {
        console.log(newData[0].eyeColor);
    }
}
infoLookUpTool("Uma");