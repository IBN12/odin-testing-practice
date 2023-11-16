// reverseString(): Will reverse all the characters in the string and return it.
function reverseString(nString){
    let nStringArr = nString.split(' ');
    let nStringReversed = '';

    nStringArr.forEach((item) => {
        let itemArr = item.split('');
        nStringReversed += ' ' + itemArr.reverse().toString().replaceAll(',', '');
    });

    return nStringReversed;
}

module.exports = reverseString;

