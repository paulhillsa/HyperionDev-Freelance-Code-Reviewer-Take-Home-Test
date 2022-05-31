/*  Section C
    Option 4
    Language: javascript
    Path: sectionC.js
    Function which:
    1. Return "Invalid" if it is not a valid ISBN-10 or ISBN-13.
    2. Return "Valid" if it is a valid ISBN-13.
    3. If it is a valid ISBN-10, convert it into an ISBN-13 and return the ISBN-13 number.
*/

function isbn13(string) {

    // if ISBN-10
    
    if (string.length === 10) {
        let sum = 0;
        for (let i = 0; i < string.length; i++) {
            // if not last digit (<9)
            if (i < 9) {
                sum += parseInt(string[i]) * (10 - i);
            }
            // if last digit (9)
            else {
                // if last digit is 'X'
                if (string[i] === 'X') {
                    sum += 10 * (10 - i);
                }
                // Else if last digit is not 'X'
                else {
                    sum += parseInt(string[i]) * (10 - i);
                }
            }
        }
        // if sum is divisible by 11 therefore Valid
        // if Valid then convert to ISBN-13
        if (sum % 11 === 0) {
            // take the 10 digit ISBN (10 digits)
            // drop the last character (9 digits)
            // tack on "978" to the front (12 digits)
            let newString = "978" + string.slice(0, 9);
            let sum = 0;
            //Calculate the sum of the digits in the new string
            for (let i = 0; i < newString.length; i++) {
                // alternate between 1 and 3 for sum calculation
                if (i % 2 === 0) {
                    sum += parseInt(newString[i]) * 1;
                } else {
                    sum += parseInt(newString[i]) * 3;
                }
            }
            // take sum and modulo by 10 and subtract from 10 to calculate new check digit
            let checkDigit = 10 - (sum % 10);
            // finally return the new string with check digit at the end
            return newString + checkDigit;
        }
        // if not divisible by 11 then return Invalid
        else {
            return 'Invalid';
        }
    }

    // if ISBN-13

    else if (string.length === 13) {
        let sum = 0;
        for (let i = 0; i < string.length; i++) {
            // alternate between 1 and 3 for sum calculation
            if (i % 2 === 0) {
                sum += parseInt(string[i]) * 1;
            } else {
                sum += parseInt(string[i]) * 3;
            }
        }
        // if sum is divisible by 10 then return Valid
        if (sum % 10 === 0) {
            return 'Valid';
        }
        // if not divisible by 10 then return Invalid
        else {
            return 'Invalid';
        }
    }
}

//Test Cases

// ISBN-10 tests
console.log(isbn13('9780131498')); // Invalid
console.log(isbn13('0205080057')); // Valid therefore converted to ISBN-13
console.log(isbn13('007462542X')); // Valid test with 'X' therefore converted to ISBN-13

// Return ISBN-13 after converting ISBN-10 tests
console.log(isbn13('9780205080052')); // Valid ISBN-13 after conversion
console.log(isbn13('9780074625422')); // Valid ISBN-13 after conversion

// ISBN-13 tests
console.log(isbn13('9780316066521')); // Invalid
console.log(isbn13('9783161484100')); // Valid
console.log(isbn13('978316148410X')); // Invalid test with 'X' (as X not accepted in ISBN-13)