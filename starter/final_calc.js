const prompt = require('node-sync')();
const gravityFactors = require('./utils/earthGravityFactors.js');

function showUserFactors(type, value) {
    let results = {};
    let measurement;

    for (let planet in gravityFactors) {
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
    }

    switch (type) {
        case "jump":
            measurement = "cm";
            break;
        case "weight":
            measurement = "kg";
            break;
        default:
            measurement = "units";
    };

    for (let planet in results) {
        console.log(`Your ${type} on ${planet} is ${results[planets]} ${measurement}`);
    }
}

function getUserInput() {
    // VARIABLES
    checkMatch = false;

    // TYPE
    console.log("Enter your measurement type; jump or weight.");
    const inputType = prompt("Enter type: ").trim().toLowerCase();
    if (!isNaN(inputType) == true) {
        checkMatch = true
    }


    // SYSTEM
    console.log("Enter your system. ");
    const inputSystem = prompt("Enter system: ").trim().toLowerCase();
    if (!isNaN(inputSystem) == true) {
        checkMatch = true
    }

    // MEASUREMENTS
    console.log("Enter your measurements. ");
    const inputMeasure = prompt("Enter meansurements: ").trim().toLowerCase();
    if (!isNaN(inputMeasure) == true) {
        checkMatch = true
    }

    // VALUE
    console.log("Enter the value (as a number)");
    const inputValue = prompt("Enter value: ").trim().toLowerCase();
    if (!isNaN(inputValue) == true) {
        checkMatch = true
    }

    // PLANETS
    console.log("Enter your planet.")
    const inputPlanet = prompt("Enter planet: ").trim().toLowerCase();
    if (!isNaN(inputPlanet) == true) {
        checkMatch = true

    }


    // CHECKING USER INPUT
    while (checkMatch == true) {
        // something
    }



    showUserFunctions(inputType, inputValue);
    getUserInput();
    global.getUserInput = getUserInput;
    global.showUserFactors = showUserFactors;
}
