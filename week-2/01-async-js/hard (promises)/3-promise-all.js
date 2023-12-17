/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
        },c*1000 );
    });
}

  async function calculateTime(a, b, c) {

    let start = Date.now();
     await  Promise.all([waitOneSecond(a), waitTwoSecond(b), waitThreeSecond(c)]);
    return Date.now() - start;
    };

// calculateTime();
module.exports = calculateTime;