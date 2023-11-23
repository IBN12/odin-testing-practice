// analyzeArray(): Will take an array of numbers and returns them in an object.
const analyzeArray = (nArray) => {
    let nAverage = 0;
    let nMinimum = 0;
    let nMaximum = 0;
    let minObj = {};
    let maxObj = {};

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

    // Calculate the average of the array. 
    nAverage = nArray.reduce((total, curValue) => {
        return total += curValue; 
    });
    nAverage /= nArray.length;

    // Find the minimum in the array. 
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

    // Find the maximum in the array. 
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

    // The length of the array. 
    let nLength = nArray.length;

    return {nAverage, nMinimum, nMaximum, nLength};
}
module.exports = analyzeArray;

