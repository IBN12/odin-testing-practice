// analyzeArray(): Will take an array of numbers and returns them in an object.
const analyzeArray = (nArray) => {
    let nAverage = 0;
    let nMinimum = 0;
    let nMaximum = 0;
    let minObj = {};
    let maxObj = {};

    console.log('Original Array: ', nArray); // Testing 
    // Remove any duplicates from the array. 
    for(let i = 0; i < nArray.length; i++)
    {
        let searchIndex = i + 1;
        while(searchIndex < nArray.length)
        {
            if (nArray[i] === nArray[searchIndex])
            {
                nArray.splice(searchIndex, 1);
            }
            searchIndex++; 
        }
    }
    console.log('After duplicate check: ', nArray); // Testing


    nAverage = nArray.reduce((total, curValue) => {
        return total += curValue; 
    });
    nAverage /= nArray.length;
    // nAverage = nAverage.toFixed(2);
    console.log(nAverage, " is the average value."); // Testing 

    nArray.forEach((item) => {
        let smaller = 0;
        for(let i = 0; i < nArray.length; i++){
            if (item < nArray[i])
            {
                smaller++;
            }
        }
        minObj[item] = smaller;

        if (smaller === nArray.length - 1)
        {
            nMinimum = item;
        }
    });
    console.log(nMinimum, " is the minimum value."); // Testing 
    console.log(minObj); // Testing 

    nArray.forEach((item) => {
        let larger = 0;
        for (let i = 0; i < nArray.length; i++)
        {
            if (item > nArray[i])
            {
                larger++;
            }
        }
        maxObj[item] = larger;

        if (larger === nArray.length - 1)
        {
            nMaximum = item;
        }
    });
    console.log(nMaximum, " is the maximum value."); // Testing
    console.log(maxObj); // Testing

    let nLength = nArray.length;

    return {nAverage, nMinimum, nMaximum, nLength};
}

const objOne = analyzeArray([2, 3, 2]); 
console.log('\n'); // Testing 

const objTwo = analyzeArray([9, 3, 10, 3, 4]);
console.log('\n'); // Testing 

const objThree = analyzeArray([10, 5, 3, 10, 12, 8]);
console.log('\n'); // Testing 

module.exports = analyzeArray;

