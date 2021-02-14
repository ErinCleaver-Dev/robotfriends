
var userInput = document.getElementById("userInput");
var currentMath = document.getElementById("currentMath");
var storeInput = document.getElementById("storeInput");
var count = 0;
var checkValue = true;
var stringMathConecepts = ["add", "subtract", "divide", "mulutiply"];
var mathfunctions = [add, subtract, divide, mulutiply];


function newFunction() {
    return 0;
}

function clickedNumber (clicked) {
    var number = document.getElementById(clicked);
    if (number.id == "period" && !userInput.value.includes(".") ) 
    {
        userInput.value += number.value.toString();
    }
    else if(userInput.value == 0) {
        userInput.value = number.value.toString();
    } else if (userInput.value != 0 && number.id != "period") {
        userInput.value +=  number.value.toString();
    }

}


function clickedClear(clicked) {
    var clear = document.getElementById(clicked);
    userInput.value = 0;    
    storeInput.value = "";

}

function clickedAdvanceMatthButton(clicked) {

    var clickedButton = document.getElementById(clicked);

    if(clickedButton.id === "precentage") {
        precentage();
    }    else if(clickedButton.id === "squreRoot") {
        squreRoot();
    }   else if(clickedButton.id === "powerOfTwo") {
        powerOfTwo();
    }
}

function clickedMathButton(clicked) {
    var clickedButton = document.getElementById(clicked);

    if(count === 0 ) {
        storeInput.value = parseFloat(userInput.value);
        
        userInput.value = 0;
        count = 1;

        for(var i = 0; i < stringMathConecepts.length; i++)
        {
            if(clickedButton.id === stringMathConecepts[i]) {
                currentMath.value = stringMathConecepts[i];
            }
        }
        
        
    } 

    for(var i = 0; i < mathfunctions.length; i ++) {
        if(count === 1 && clickedButton.id === stringMathConecepts[i]) {
            mathfunctions[i](stringMathConecepts[i]);
            userInput.value = 0;
        }
    }

    for(var i = 0; i < mathfunctions.length; i++) {
        if(clickedButton.id === "equals" && currentMath.value === stringMathConecepts[i]) {
            mathfunctions[i](stringMathConecepts[i]);
            userInput.value = storeInput.value;
            count = 0;
            currentMath.value = "";
        }
    }
  
}

function subtract (getValue)
{
    if(currentMath.value != getValue) {
        lastButtonPressed(getValue);
    } else {
        storeInput.value = parseFloat(storeInput.value) - parseFloat(userInput.value);    
        currentMath.value = getValue;
    }

}
function add(getValue) {
    if(currentMath.value != getValue) {
        lastButtonPressed(getValue);
    } else {
        storeInput.value = parseFloat(storeInput.value) + parseFloat(userInput.value);
    }
    currentMath.value = getValue;
}

function mulutiply(getValue) {
    if(currentMath.value != getValue) {
        lastButtonPressed(getValue);
    } else {
        if (parseFloat(userInput.value) === 0) {
            userInput.value = 0;
        } else {
            storeInput.value = parseFloat(storeInput.value) * parseFloat(userInput.value);
        }
    }

    currentMath.value = getValue;
}

function divide(getValue) {
    if(currentMath.value != getValue) {
        lastButtonPressed(getValue);
    } else {
        if (parseFloat(userInput.value) === 0) {
            userInput.value = 0;
        } else {
            storeInput.value = parseFloat(storeInput.value) / parseFloat(userInput.value);
        }
    }
    
    currentMath.value = getValue;
}

function precentage() {
    userInput.value = parseFloat(userInput.value)/100;
    if(storeInput.value === 0) {
        storeInput.value = userInput.value;
    }
}

function squreRoot() {
    userInput.value = Math.sqrt(parseFloat(userInput.value));
    if(storeInput.value === 0) {
        storeInput.value = userInput.value;
    }
}

function powerOfTwo() {
    var value = parseFloat(userInput.value);
    userInput.value = Math.pow(value, 2);
    if(storeInput.value === 0) {
        storeInput.value = userInput.value;
    }
}

function lastButtonPressed (getValue) {
    
    if(currentMath.value == "add") {
        add("add");

    }
    else if(currentMath.value == "subtract") {
        subtract("subtract");
    }
    if(currentMath.value == "divide")
    {
        divide("divide");
    }
    if(currentMath.value=="mulutiply")
    {
        mulutiply("mulutiply");
    }

}
