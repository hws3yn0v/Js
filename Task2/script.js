let str = "Salam hamiya her vaxtiviz xeyr";
let letter = findSameletters(str);
console.log(letter);

function findSameletters(str) {
    let charMap = {};
    let result = [];
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (charMap[char]) {

        if (!result.includes(char)) {
          result.push(char);
        }
      } else {
        charMap[char] = 1;
      }
    }
  
    return result;
  }
  