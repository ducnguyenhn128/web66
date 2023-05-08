
const stringContainRepeatLetter = (str) => {
    let result = false;
    let arr = [str[0]];
    // default, string not contain double letter
    for (let i = 1; i < str.length; i++) {
        let foundDouble = arr.findIndex(el => el === str[i]);
        // check if str[i] not it the array, so foundDouble = -1
        if ( foundDouble === -1 ) {
            arr.push(str[i]);
        } else {
            result = true;
            break;
        }
    }
    return result;
}

const lengthOfLongestSubstring = function(s) {
    let result = 1;
    if (stringContainRepeatLetter(s) === false ) {
        return s.length;
    }

    for (let i = s.length - 1; i > 0; i--) {
        let found = false;
        result = i
        // we want to check if any s[i] can pass stringContainRepeatLetter = false
        // if all s[i] can not pass string ContainRepeatLetter => we check i - 1
        for (let index = 0; index <= s.length -i ; index++) {
            if (stringContainRepeatLetter(s.slice(index, index + i)) === false) {
                found = true;
                console.log(`We find a substring do not contain any repeat letter ${s.slice(index, index + i)}`)
                break;
            }
        }

        if (found) {
            return result;
            break;
        }
    }
    return result;
};

console.log(lengthOfLongestSubstring('abcabcbb'))

// check truong hop n = s.length 
// neu tat ca cac s(n) deu contain repeat letter => false
// check truong hop n = s.length - 1