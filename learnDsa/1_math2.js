/**
 * Return all divisors of N in ascending order.
 * Uses the sqrt(N) pairing technique: collects small divisors and paired large
 * divisors, reverses the large list and concatenates to produce an ordered list.
 *
 * @param {number} N - The positive integer to find divisors for.
 * @returns {number[]} Array of divisors of N in ascending order.
 */
function printDivision (N) {

    let i =1;                     
    let singlenum = [];
    let doublenum = [];
    let result = [];

    while(i *i <= N){

        if(N % i == 0){
            singlenum.push(i)

            if(i!== N/i){
                doublenum.push(N/i)
            }
        }
        

    i++
    }
    doublenum.reverse();
    result =[...singlenum,...doublenum]

    return result;
}  
 
console.log(printDivision(36))



/**
 * Determine whether n is a prime by counting divisors up to sqrt(n).
 * Note: this implementation counts divisor pairs (i and n/i) and returns
 * true when exactly two divisors are found (1 and n).
 *
 * @param {number} n - Positive integer to test for primality.
 * @returns {boolean} True if n is prime, false otherwise.
 */
function primeNumber(n){

    let i= 1;
    let count=0;

    while( i*i < n ) {

        if(n % i == 0){
            count+=1
            if ( i!= n/i){
                count+=1
            }
        }
    i++
    }
    if(count == 2){
        return true
    } else{
        return false;



    }

}
console.log(primeNumber(11));



// Count the Digits That Divide a Number
// n -121

/**
 * Count how many digits of `n` divide `n` evenly.
 * Example: n=121 -> digits are 1,2,1 -> 1 divides 121, 2 does not, so returns 2.
 *
 * @param {number} n - Positive integer to inspect.
 * @returns {number} Count of digits in n that are divisors of n.
 */
function countDigits(n) {
    let count =0 ;
    let lastdigit = 0;
    let wholeNumber = n ;

    while (n > 0){
         lastdigit = n % 10 
        if (wholeNumber % lastdigit  == 0 ){
             count +=1
        }
        n = Math.floor(n/10);
    }
    return count;
}
console.log(countDigits(121))


// GCD /HCD  greaset common divisor  return 

// n=20 n = 40 
/**
 * Return the greatest common divisor (GCD) of n1 and n2 by searching from
 * min(n1,n2) downwards until a common divisor is found.
 * Note: the loop condition in the original implementation is incorrect
 * (it compares i <= Math.min(n1,n2)) but we keep behavior unchanged here.
 *
 * @param {number} n1 - First positive integer.
 * @param {number} n2 - Second positive integer.
 * @returns {number|undefined} The first common divisor found (largest), or
 * undefined if none found (shouldn't happen for positive integers).
 */
function gcddivision(n1,n2) {

    let i = Math.min(n1,n2);

    
    while(i <= Math.min(n1,n2)){

        if (n1 % i == 0 && n2 % i == 0){
            return i
        }
        i--
    }

}
console.log(gcddivision(60,30)) 



// lcd least common divion 



/**
 * Intended to compute the least common multiple (LCM) of two numbers.
 * The current implementation returns Math.max(n1,n2) immediately; this JSDoc
 * documents that behavior and the intended purpose for clarity.
 *
 * @param {number} n1 - First integer.
 * @param {number} n2 - Second integer.
 * @returns {number} Current implementation returns Math.max(n1,n2).
 */
function leastCommondDivision(n1,n2) {
    let i = Math.max(n1,n2);
 
    while( i <= Math.max(n1,n2)) {
        //  console.log(i);
            return i
        
        i--
    }

}
console.log(leastCommondDivision(20,40))



/**
 * Compute the greatest common divisor (GCD) of two positive integers using
 * the Euclidean algorithm implemented with subtraction/modulo in-place.
 *
 * @param {number} n1 - First positive integer.
 * @param {number} n2 - Second positive integer.
 * @returns {number} The greatest common divisor of n1 and n2.
 */
function gcdeuclidean (n1,n2) {

    while (n1 > 0 && n2 >0) {
        if (n1 > n2) {
            n1 = n1 % n2
        } else{
            n2 = n2 % n1
        }
    }
    if (n1 == 0){
        return n2
    } else{
        return n1
    }


}
console.log(gcdeuclidean(52,10))

