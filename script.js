

/*const userInput = document.getElementById("user-input");
const resultOutput = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");


// karate implies start of a string and brackets for grouping, slashes for reg expressions
const validateNumber = (input) => {
    const countryCode = '^(\\+234|234|0)';
    const areaCode = '([7-9]{1}[0-1]{1}[0-9]{1})';
    const spaceDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9][4]';
    const phoneRegEx = new RegExp(`${countryCode}${areaCode}${spaceDashes}${phoneNumber}$`);

    if (userInput == "") {
        alert("Please enter a phone number");
        return;
    }

    const pTag = document.createElement("p");
    pTag.className = "result-text";

    phoneRegEx.test(input) ? (pTag.style.color = '#000000') : (pTag.style.color = '#ffffff');
    
    pTag.appendChild(document.createTextNode(`${phoneRegEx.test(input) ? 'valid' : 'invalid'} Nigeian Phone Number: ${input}`));

    resultOutput.appendChild(pTag);
};
checkBtn.addEventlistener('click', () => {
    validateNumber(userInput.value);
 userInput.value = '';
});
userInput.addEventListener('keydown', event =>{
  if (event.key === 'Enter') {
    validateNumber(userInput.vale);
    userInput.value = '';
  }
}
);
clearBtn.addEventListener('click', () => {
    resultOutput.textContent = '';
});*/

// regEx uses \\s\\ for spaces \\i\\ for case sensitive, \\n\\ new line, \\g\\ global

const userInput = document.getElementById("user-input");
const resultOutput = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const validateNumber = (input) => {
    const countryCode = '^(\\+234|234|0)';
    const areaCode = '([7-9]{1}[0-1]{1}[0-9]{1})';
    const spaceDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}';
    const phoneRegEx = new RegExp(`${countryCode}${areaCode}${spaceDashes}${phoneNumber}$`);

    if (input == "") {
        alert("Please enter a phone number");
        return;
    }

    const pTag = document.createElement("p");
    pTag.className = "result-text";

    phoneRegEx.test(input) ? (pTag.style.color = '#000000') : (pTag.style.color = '#FF0000');
    
    pTag.appendChild(document.createTextNode(`${phoneRegEx.test(input) ? 'Valid' : 'Invalid'} Nigerian Phone Number: ${input}`));

    resultOutput.appendChild(pTag);
};

checkBtn.addEventListener('click', () => {
    validateNumber(userInput.value);
    userInput.value = '';
});

userInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    validateNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
    resultOutput.textContent = '';
});