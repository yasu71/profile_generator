const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("1. What's your name? Nicknames are also acceptable :) ", (answer1) => {
  rl.question("2. What's an activity you like doing?  ", (answer2) => {
    rl.question("3. What do you listen to while doing that?  ", (answer3) => {
      rl.question("4. Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {     
        rl.question("5. What's your favourite thing to eat for that meal?", (answer5) => {    
          rl.question("6. Which sport is your absolute favourite?", (answer6) => {   
            rl.question("7. What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {                
  console.log(`${answer1} loves listening to ${answer3} while ${answer2}, ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);

  rl.close();
            })
          })
        })      
      })
    })
  })
});
