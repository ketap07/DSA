function printName(i, n) {
    if (i > n) {
        return;
    }

    console.log("Calling me");

    printName(i + 1, n);
}

// console.log("recusion", printName(1, 20))

// Print Linearly from 1 to N
function printLinearly(i, n) {
    console.log("printLinearly", i)

    if (i >= n) {
        return
    }

    printLinearly(i + 1, n)
}

// console.log(printLinearly(1, 20))

function printNtoOne(i, n) {
    console.log("print n to 1", n);

    if (i >= n) {
        return
    }

    printNtoOne(i, n - 1);
}

// console.log("printNtoOne", printNtoOne(1, 20));



function backTracking(i, n) {
    if (i < 1) {
        return;
    }

    backTracking(i - 1, n);
    console.log("backTracking", i);
}

// console.log("printNtoOne", backTracking(20, 20))



// function sumOfN (i ,sum){

//     if (i < 1){
//         console.log(sum)
//         return sum

//     }

//     sumOfN(i-1,sum + i);

// }
// console.log(sumOfN(5,0))



// using functional  recursion



function sumofnumber(n) {

    if (n == 0) {
        return 0
    }

    return n + sumofnumber(n - 1)

}
// console.log(sumofnumber(5))




// factorial

function factorialofN(N) {

    if (N == 0) {
        return 1
    }

    return N * factorialofN(N - 1)
}
// console.log(factorialofN(6))


// two pointer using recurission


function twopinterA(l, r, arraytwo) {

    if (l >= r) {
        return arraytwo;
    }

    swap(arraytwo, l)

    return twopinterA(l + 1, r - 1, arraytwo)
}

let arraytwo = [1, 3, 4, 5, 6]
console.log("twopinterAm", twopinterA(0, arraytwo.length - 1, arraytwo))


function swap(arr, i ) {
    
    let tmp = arr[i];
    arr[i] = arr[arr.length- i - 1];
    arr[arr.length - i- 1] = tmp

    return arr;
}

// console.log(swap(0))

























