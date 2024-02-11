/* Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
You can ignore any need to sanitize words or add punctuation, 
but you should add spaces between each word. Be careful, 
there shouldn't be a space at the beginning or the end of the sentence! */

//solution 1

// function smash (words) {
//     let str = '';
//     for(let i=0; i< words.length;i++)
//     {
//         str +=' ' + words[i]
//     }
//     return str.slice(1,str.length)
//  };

// solution 2

function smash (words) {
return words.join(' ')
}

  console.log(smash(['hello', 'world', 'this', 'is', 'great']));
