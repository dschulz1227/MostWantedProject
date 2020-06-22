"use strict"
// '// lets make sure im linked, Lars typed here
// // mike is here 
// /*
// Build all of your functions for displaying and gathering information below (GUI).


// app is the function called to start the entire application
function app(peopleArray) {
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch (searchType) {
    case 'yes':
      searchResults = searchByName(peopleArray);
      break;
    case 'no':
      searchResults = searchByTraits(peopleArray);   //closed gap after break where old comment with task was, may need to add more search types
      break;
    default:
      app(peopleArray); // restart app
      break;
  }
}
//   // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
//   mainMenu(searchResults, peopleArray); //results are passed with array to be able to find more information of object
// }

function infoLookUpTool(el) {
  let newData = data.filter(function (el) {
    //return (firstName == el.firstName && lastName == el.lastName)
  })
  if (newData.length > 0) {
    console.log(newData[0].id);
    console.log(newData[0].dob);
    // console.log(newData[0].id);
    // console.log(newData[0].id);
  }
}

// // Menu function to call once you find who you are looking for
function mainMenu(person, peopleArray) {

//   /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of peopleArray. We need peopleArray in order to find descendants and other information that the user may want. */

  if (!person) {
    alert("Could not find that individual.");
    return app(peopleArray); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch (displayOption) {
    case "info":
      infoLookUpTool(searchResults);
      break;
    case "family":
      // TODO: get person's family and this
      break;
    case "descendants":
      // TODO: get person's descendants and this
      break;
    case "restart":
      app(peopleArray); // restart and this
      break;
    case "quit":
      return; // stop execution
    default:
      return mainMenu(person, peopleArray); // ask again
  }
}

function searchByName(peopleArray) {
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);
  let foundPerson = peopleArray.filter(function (person) {
    if (person.firstName === firstName && person.lastName === lastName) {
      return true;
    }
    else {
      return false;
    }
  })
  // TODO: find the person using the name they entered  Michael is doing this.
  return foundPerson[0];
}

// alerts a list of peopleArray
function displaypeopleArray(peopleArray) {
  alert(peopleArray.map(function (person) {
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person) {
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// // function that prompts and validates user input
function promptFor(question, valid) {
  do {
    var response = prompt(question).trim();
  } while (!response || !valid(response));
  return response;
}

// // helper function to pass into promptFor to validate yes/no answers
function yesNo(input) {
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// // helper function to pass in as default promptFor validation
function chars(input) {
  return true; // default validation only
}

//search by weight function
function searchByWeight(peopleArray) {            
  let weight = promptFor("What is the person's weight?", chars);
  let foundByWeight = peopleArray.filter(function (person) {              //person's trait must match trait entered in prompt
    if (person.weight == weight) {
      return true;
    }
    else {
      return false;
    }
  })
  return foundByWeight;
}
//search by height function
function searchByHeight(peopleArray) {
  let height = promptFor("What is the person's height?", chars);
  let foundByHeight = peopleArray.filter(function (person) {
    if (person.height == height) {
      return true;
    }
    else {
      return false;
    }
  })
  return foundByHeight;
}
//search by eye color function
function searchByEyeColor(peopleArray) {
  let eyecolor = promptFor("What is the person's eye color?", chars);
  let foundByEyeColor = peopleArray.filter(function (person) {
    if (person.eyeColor == eyecolor) {
      return true;
    }
    else {
      return false;
    }
  })
  return foundByEyeColor;
}
//search by gender function
function searchByGender(peopleArray) {
  let gender = promptFor("What is the person's gender?", chars);
  let foundByGender =  peopleArray.filter(function (person) {
    if (person.gender == gender) {
      return true;
    }
    else {
      return false;
    }
  })
  return foundByGender;
}

// //**if you filter down to only one person, they will hold index 0 of people array**
// //create for loop for more 

//search by all traits function
function searchByTraits(peopleArray) {
  let yourChoice = prompt("What trait would you like to search by?","eyecolor, weight, height, or gender");         //choose where to start
  let askAgain = false;       //ask again = false when there are no more options
  let arr = peopleArray;       //arr takes spot of peopleArray after each loop with new "array" of names that match search
  while (arr.length > 1) {    //loop continues until only one name left on array
    if (askAgain == true) {
      yourChoice = prompt(arr.length + " Matches Found! What trait would you like to search by for these cases?");   //tells how many search matches were found-what trait to search next
    }
    askAgain = true;        //prompts what trait to search for
    if (yourChoice == "weight") {
      arr = searchByWeight(arr); 
    } else if (yourChoice == "height") {
      arr = searchByHeight(arr);
    } else if (yourChoice == "eyecolor") {
      arr = searchByEyeColor(arr);     
    } else if (yourChoice == "gender") {
      arr = searchByGender(arr);   
    }
  }
  return arr[0];    //returns index 0 of array holding our final search result to our app function
}




