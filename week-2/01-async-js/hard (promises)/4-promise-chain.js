/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond(a) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, a*1000);
    });
}

function waitTwoSecond(b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, b*1000);
    });
}

function waitThreeSecond(c) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, c*1000);
    });
}

function calculateTime(a,b,c) {

    let start = Date.now();
     return waitOneSecond(a).then(() => 
         waitTwoSecond(b)
    ).then(() =>
         waitThreeSecond(c)
    ).then(() => 
        Date.now()-start 
     );
}
// calculateTime();
module.exports = calculateTime;