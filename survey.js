const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {
  name: 0,
  sport: 0,
  music: 0,
  meal: 0
};


rl.question("Whats your name?: ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  answers.name = answer;

  rl.question("Whats your fav activity?: ", (sport) => {
    console.log(`ty for your feedback: ${sport}`);
    answers.sport = sport;

    rl.question("What's your fav song?: ", (music) => {
      console.log(`ty for your feedback: ${music}`);
      answers.music = music;

      rl.question("What's your fav dish?: ", (meal) => {
        console.log(`ty for your feedback: ${meal}`);
        answers.meal = meal;
        const output = `${answers.name} loves listening to ${answers.music} while eating ${answers.meal}. ${answers.name} loves to play ${answers.sport}`;
        console.log(output);
        rl.close();
      })
    })
  })
});

