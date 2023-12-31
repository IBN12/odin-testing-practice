const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// caesarCipher(): Will shift each character in the string up by alphabetical order.
function caesarCipher(nString, nShift){
    if (nShift >= 25)
    {
        return console.log("Shift value has to be less than 26");
    }

    let nStringArr = nString.split(' ');
    let nStringShift = "";

    // split words into array. 
    nStringArr.forEach((item, index) => {
        let itemArr = item.split('');
        
        // Test each character from each word. 
        itemArr.forEach((itemChars) => {

            // Add punctuation to the string shift if the original string one contains it.
            if (itemChars === ',' || itemChars === '.' || itemChars === '!')
            {
                nStringShift += itemChars;
            }
            else
            {
                for (let i = 0; i < alphabet.length; i++)
                {
                    if (itemChars === alphabet[i] || itemChars.toLowerCase() === alphabet[i])
                    {
                        let itemIndex = alphabet.indexOf(itemChars.toLowerCase());
    
                        if ((itemIndex + nShift) <= 25)
                        {
                            nStringShift += alphabet[itemIndex + nShift]; 
                        }
                        else
                        {
                            let count = itemIndex;
                            let rotationIndex = itemIndex;
                            while(!(count === (itemIndex + nShift)))
                            {
                                if (alphabet[rotationIndex] === 'z' || alphabet[rotationIndex].toLowerCase() === 'z')
                                {
                                    rotationIndex = 0; 
                                    count++;
                                }
                                else
                                {
                                    rotationIndex++;
                                    count++;
                                }
                            }
                            nStringShift += alphabet[rotationIndex]; 
                        }
                    }
                }
            }
        }); 

        // Add white spaces back if the string contains more than 1 word.
        if (!(nStringArr.length - 1 === index))
        {
            nStringShift += " ";
        }
    });

    return nStringShift;
}
module.exports = caesarCipher;