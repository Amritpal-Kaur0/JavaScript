## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

// Read file asynchronously
fs.readFile(amrit.txt, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File Contents:' + data);
    

    //  expensive operation 
    simulateExpensiveOperation();
});
 
 function simulateExpensiveOperation() {
    const startTime = Date.now();
    
    let sum=;
    // Simulate an expensive loop
    for (let i = 0; i < 1000000000; i++) {
       sum+=i;
    }

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    console.log(`Expensive operation completed in ${elapsedTime} milliseconds.`);
}