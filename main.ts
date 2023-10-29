#! /usr/bin/env node
import inquirer from 'inquirer';

async function startCountdown() {
  let { duration } = await inquirer.prompt({
    type: 'number',
    name: 'duration',
    message: 'Enter the countdown duration in seconds:',
  });

  duration *= 1000;
  let remainingTime = duration;

  const interval = setInterval(() => {
    remainingTime -= 1000;
    const seconds = remainingTime / 1000;

    if (!seconds) {
      clearInterval(interval);
      console.log('Countdown finished!');
    } else {
      console.clear();
      console.log(`Time remaining: ${seconds}`);
    }
  }, 1000);
}

startCountdown();
