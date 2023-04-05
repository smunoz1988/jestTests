const string = (word) => {
    if (word.length < 1 || word.length > 10) {
        throw new Error('word is less than 1 or larger than 10!');
    } else {
        return word.length;
    }
}

module.exports = string;