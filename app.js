"use strict"
// lets make sure im linked, Lars typed here
// mike is here 
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people) {
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch (searchType) {
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
<<<<<<< HEAD

        searchResults = searchByTraits(people);
        break;
=======
    case 'no':
      searchResults = searchByTraits(people);
      break;
>>>>>>> 08f7515c5228795293a2a2416db8ad0e09ab4969
      // TODO: search by traits Damon
      break;
    default:
      app(people); // restart app
      break;
  }

  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

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

// Menu function to call once you find who you are looking for
function mainMenu(person, people) {

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if (!person) {
    alert("Could not find that individual.");
    return app(people); // restart
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
      app(people); // restart and this
      break;
    case "quit":
      return; // stop execution
    default:
      return mainMenu(person, people); // ask again
  }
}

function searchByName(people) {
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function (person) {
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

// alerts a list of people
function displayPeople(people) {
  alert(people.map(function (person) {
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

// function that prompts and validates user input
function promptFor(question, valid) {
  do {
    var response = prompt(question).trim();
  } while (!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input) {
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input) {
  return true; // default validation only
}


<<<<<<< HEAD
function searchByWeight(people){
  let weight = promptFor("What is the person's weight?", chars);
  
  let foundByWeight = people.filter(function(person){
    if(person.weight == weight){
=======
function searchByWeight(weight) {
  let theirWeight = promptFor("What is the person's weight?", chars);

  let foundByWeight = weight.filter(function (person) {
    if (person.weight === person.weight) {
>>>>>>> 08f7515c5228795293a2a2416db8ad0e09ab4969
      return true;
    }
    else {
      return false;
    }
  })
  // TODO: find the person using the name they entered  Michael is doing this.
  return foundByWeight;
}

function searchByHeight(height) {
  let height = promptFor("What is the person's height?", chars);

  let foundByHeight = height.filter(function (person) {
    if (person.height === person.height) {
      return true;
    }
    else {
      return false;
    }
  })
  // TODO: find the person using the name they entered  Michael is doing this.
  return foundByHeight;

}

function searchByEyeColor(eyecolor) {
  let eyecolor = promptFor("What is the person's eye color?", chars);

  let foundByEyeColor = eyecolor.filter(function (person) {
    if (person.eyecolor === person.eyecolor) {
      return true;
    }
    else {
      return false;
    }
  })
  // TODO: find the person using the name they entered  Michael is doing this.
  return foundByEyeColor;

}



function searchByTraits(people){
    let yourChoice = prompt("What trait would you like to search by?");


      if (yourChoice =="weight"){
          searchByWeight(people)
          return weight;
      }
      else if (yourChoice == "height"){
          searchByHeight("height")
          return height;
      }
      else if(yourChoice == "eyecolor"){
          searchByEyeColor("eyecolor")
          return eyecolor;
      }

}
