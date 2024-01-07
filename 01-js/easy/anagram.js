/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    let len1 = str1.length
    let len2 = str2.length

    // cannot be anagram if they are of different length
    if(len1 !== len2){
        return false
    }

    //init frequency array to zero for all possible alphabets
    let charFrequency = []
    for(let i=0; i<26; i++){
        charFrequency[i] = 0
    }

    //iterate and increment in respective position
    for(let i = 0; i < len1; i++){
        let pos = str1.charCodeAt(i)
        charFrequency[pos] = charFrequency[pos] + 1
    }

    //iterate and decrement in respective position
    for(let i = 0; i < len1; i++){
        let pos = str1.charCodeAt(i)
        charFrequency[pos] = charFrequency[pos] - 1
    }

    //freq array should be same as initialisation
    for(let i=0; i<26; i++){
        if(charFrequency[i] !== 0){
            return false
        }
    }
    return true
}
console.log(isAnagram("harsha", "arshah"))
console.log(isAnagram("harsha", "harsha"))
console.log(isAnagram("harsha", "arsh"))

module.exports = isAnagram;
