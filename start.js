
const flights = [
  ['NTF46W', 'Stephen', 'Johnson'],
];

const { spawn } = require('child_process');

flights.forEach((flight) => {
  console.log("Starting: ", flight);
  const process = spawn('python',[
    "./checkin.py",
      flight[0],
      flight[1],
      flight[2],
    ], {
      // detached: true,
      stdio: [ 'ignore', 'inherit', 'inherit' ]
    }
  );

  // process.stdout.on('data', (data) => {
  //   console.log(`stdout: ${data}`);
  // });
  // process.stderr.on('data', (data) => {
  //   console.error(`stderr: ${data}`);
  // });

  process.on('close', (code) => {
    console.log(`child process for flight ${flight} exited with code ${code}`);
  });

});
