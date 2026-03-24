//password GENERATOR

const passwordLength = 12;
const includeLowerCase = true;
const includeupperCase = true;
const includNumbers = true;
const includeSymbols = true;

function generatePasswords(length, includeLowerCase, includeupperCase, includNumbers, includeSymbols ){

    const lowerCase = "abcdefghigklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
    const Numbers = "1234567890";
    const Symbols = "!@#$%^&*_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCase : "";
    allowedChars += includeupperCase ? upperCase : "";
    allowedChars += includNumbers ? Numbers : "";
    allowedChars += includeSymbols ? Symbols : "";

    if (allowedChars.length === 0){
        return "at least 1 char to make the password!"
    }
    if (length <= 0){
        return "You must choose smth to make the password"
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;    
}

const password = generatePasswords(passwordLength, includeLowerCase, includeupperCase, includNumbers, includeSymbols);
console.log(password);
