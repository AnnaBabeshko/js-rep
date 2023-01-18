const a = 'переменная "a" в script-1.js'

console.log(a);

const b = 'переменная "b" в script-1.js';

console.log(b);


function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    return message;
  } 
  else {
    message.slice (0, maxLength) + '...';
    return maxLength;
  }
  // Change code above this line
  return result;
}

