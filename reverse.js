const reverseString = (string) => {
    let split = string.split('');
    let reverseArray = split.reverse();
    let joinArray = reverseArray.join('');
    return joinArray;
};

module.exports = reverseString;