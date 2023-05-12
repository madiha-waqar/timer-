//Implement an alarm clock / timer which will beep after a specified amount of time has passed.
//The user can specify an unlimited number of alarms using command line arguments

//No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
//An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
//An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

const allArgs = process.argv;
const input = allArgs.slice(2);

const nums = input.filter(function (str) {
  if (str && Number(str) && Number(str) > 0) {   // Mentor helped with this
    return str;
  }
});

if (!nums.length) { // No numbers are provided
  return;
}

for (const item of nums) {
  setTimeout(() => {
    process.stdout.write('*\n');
    //process.stdout.write('\x07');  // Not working
  }, item * 1000)
}
