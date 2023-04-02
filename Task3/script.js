let str = "Salam hamiya. Salam her vaxtiviz xeyr";
let words = findSameWords(str);
console.log(words);

function findSameWords(sentence) {
    let wordMap = {};
    let result = [];
    let words = sentence.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (wordMap[word]) {
        if (!result.includes(word)) {
          result.push(word);
        }
      } else {
        wordMap[word] = 1;
      }
    }
    
    return result;
  }
  
