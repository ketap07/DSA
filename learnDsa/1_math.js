/**
 * Log each digit of a number from least-significant to most-significant.
 * Prints each last digit to the console and returns 0 if input is falsy.
 * Note: this function writes output via console.log and does not return the
 * extracted digits as a collection.
 *
 * @param {number} n - The positive integer to extract digits from.
 * @returns {number} 0 when n is falsy; otherwise undefined (prints digits).
 */
function extractionDigits(n) {
    if (!n) return 0;

    while (n > 0) {
        lastDigit = n % 10;

        // console.log("looping n see!! ->",n);


        console.log("the last digit ->", lastDigit);
        n = Math.floor(n / 10);

    }


}

// console.log(extractionDigits(123));


// Find out the number of digits in Number.
/**
 * Count the number of digits in a positive integer using repeated division.
 *
 * @param {number} n - The positive integer to count digits of.
 * @returns {number} The number of digits, or 0 for falsy/invalid input.
 */
function countDigits(n) {
    if (!n) return 0;

    let count = 0;

    while (n > 0) {

        count = count + 1;
        // count++;
        // count += 1;

        // console.log("COUNT", count)
        n = Math.floor(n / 10);
    }

    return count;
}

/**
 * Count digits using logarithm for large numbers (faster than loop).
 *
 * @param {number} n - The positive integer to count digits of.
 * @returns {number} The number of digits, or 0 for falsy/invalid input.
 */
function withLogcountDigits(n) {
    if (!n) return 0;

    let count = Math.floor(Math.log10(n) + 1)

    return count;
}



// let num = 123;

// console.log("countDigit of " + num +" is ",countDigits(num));

// console.log("countDigit of " + num +" is ",withLogcountDigits(num));

// find out the digit count and don't consider user provided digit numbers 
// eg. 1239  user provided 9 then 123 and count is 3

/**
 * Find remaining digit count of `n` after removing a matching suffix `userNum`.
 * Example: n=12390, userNum=90 -> removes suffix 90 and returns digits count of 123 -> 3
 *
 * @param {number} n - The full number to inspect.
 * @param {number} userNum - The trailing number to remove from n for the count.
 * @returns {number} Number of digits left in n after removing matching trailing digits.
 */
function foundDigitCount(n, userNum) {
    if (!n || !userNum) return 0;

    let count = 0

    // remove matched digit
    while (n > 0 && userNum > 0 && ((n % 10) == (userNum % 10))) {
        n = Math.floor(n / 10);
        userNum = Math.floor(userNum / 10);
    }

    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }

    return count;
}

let n = 12390;
let userNum = 90

// console.log("USER Expected count ->" + n, "UserNUm", userNum, foundDigitCount(n, userNum));


/**
 * Return a number built by concatenating digits of `n` in reverse order using string concat.
 * Note: Leading zeros in the reversed representation are dropped by parseInt.
 *
 * @param {number} n - Positive integer to reverse.
 * @returns {number} Reversed integer (as number).
 */
function reverseOrder(n) {
    let rev = "";

    // while (n > 0 && n % 10 == 0) {
    //     n = Math.floor(n / 10);
    // }

    while (n > 0) {
        rev += n % 10;
        n = Math.floor(n / 10);
    }

    return parseInt(rev);
}

// console.log("revering 40100",reverseOrder(10400))

// revering the number
/**
 * Reverse digits of a number arithmetically and return the reversed integer.
 *
 * @param {number} n - Positive integer to reverse.
 * @returns {number} Reversed integer.
 */
function reverseNum(n) {
    let revNum = 0
    let lastDigit = 0;

    while (n > 0) {
        lastDigit = n % 10;
        revNum = (revNum * 10) + lastDigit
        n = Math.floor(n / 10);
    }

    return revNum;
}

console.log("Reverse Number", reverseNum(2001));

// whos reverse order is exact same as original
/**
 * Check whether a number is a palindrome (reads the same forwards and backwards).
 *
 * @param {number} n - Positive integer to test.
 * @returns {boolean} True if palindrome, otherwise false.
 */
function palindrome(n) {
    let revNum = 0;
    let original = n;
    let ld = 0

    while (n > 0) {
        ld = n % 10;
        revNum = (revNum * 10) + ld;
        n = Math.floor(n / 10);
    }

    if (original == revNum) {
        return true;
    } else {
        return false;
    }
}

console.log("Palindorne", palindrome(121));



// a number that is equal to the sum of its own digits, each raised to the power of the total number of digits
/**
 * Test whether a number is an Armstrong (narcissistic) number.
 * An Armstrong number equals the sum of its digits each raised to the power of
 * the number of digits. Example: 153 = 1^3 + 5^3 + 3^3.
 *
 * @param {number} n - Positive integer to test.
 * @returns {boolean} True if n is an Armstrong number, otherwise false.
 */
function armstrongNumbers(n) {
    let lastDigit = 0;
    let powerOfNum = 0;
    let total = 0
    let power = String(n).length;
    let original = n;

    while (n > 0) {
        lastDigit = n % 10;
        powerOfNum = Math.pow(lastDigit, power);
        total += powerOfNum;

        n = Math.floor(n / 10);
    }

    return total == original;
}

console.log("armstrongNumber", armstrongNumbers(1634));




































// function cubeNumber(N) {
//     let wholeNumber = N ;
//     let lengthNumber = String(N).length;
//     let sum = 0;

//     while(N > 0) {
//         endNumber = N % 10 

//         sum = sum + Math.pow(endNumber , lengthNumber)
        
//         N = Math.floor(N /10)

//     }

//     if (sum == wholeNumber){
//         return true;
//     } else{
//         return false;
//     }

// }
// let N = 371
// console.log(cubeNumber(N))




// print the all division of N 



/**
 * Return an array of proper divisors of a positive integer (excluding the number itself).
 *
 * @param {number} YY - Positive integer to find divisors for.
 * @returns {number[]} Array of divisors less than YY.
 */
function divisiblebyNumber (YY) {
    let i = 1 ;
    let arr = []

    while (i < YY){
        if (YY % i == 0) {
        //   let b = i 
            // console.log(i)
            arr.push(i);
            // arr = ...i
        }

        i++
    }

    return arr;
}
// let YY = 36 ;
// console.log(divisiblebyNumber(YY))


/**
 * Print all divisors of `n` in ascending order by collecting small/large pairs.
 * This function writes the result to console and returns undefined.
 *
 * @param {number} n - Positive integer to list divisors for.
 */
function print_divisor(n) {
    let i = 1;
    let small = [];
    let large = [];

    while (i * i <= n) {
        if (n % i == 0) {
            small.push(i);

            if (i !== n / i) {
                large.push(n / i);
            }
        }

        i++;
    }

    large.reverse();

    let result = [...small, ...large];

    console.log(result)
}

// console.log(print_divisor(20))




// dvide by 1 and iteself
/**
 * Determine whether a number is prime by counting divisors.
 * Note: This checks up to sqrt(n) and counts both factors i and n/i.
 *
 * @param {number} n - Positive integer to test for primality.
 * @returns {boolean} True if n is prime, otherwise false.
 */
function isPrimeNumber(n){
    if (!n) return false;

    let count = 0;
    let  i = 1;

    while(i * i <= n) {
        if (n % i == 0) {
            count++;

            if (i != n / i) {
                count++;
            }
        }

        i++;
    }

    if (count == 2) {
        return true
    } else {
        return false;
    }
}


console.log("isPrime", isPrimeNumber(11));