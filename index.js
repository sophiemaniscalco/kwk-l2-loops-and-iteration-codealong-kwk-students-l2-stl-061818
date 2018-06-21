// Code your solutions in this file
function tailsNeverFails() {
  let tails = 0;
  
  while(Math.random() >= 0.000000001) {
    tails++
  }
  console.log (`You got ${tails} tails in a row!`);
  
}

tailsNeverFails();