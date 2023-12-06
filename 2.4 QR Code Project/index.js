import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: 'ENTER YOUR URL',
      name: 'url',
    },
  ])
  .then((answers) => {
    const userURL = answers.url; // Retrieve the user's URL input

    // Generate the QR code image
    const qr_svg = qr.image(userURL, { type: 'png' });

    // Pipe the QR code image to a file stream and save it as 'hereisur_qr.png'
    qr_svg.pipe(fs.createWriteStream('hereisur_qr.png'));

    console.log('QR code generated and saved as hereisur_qr.png');
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt couldn\'t be rendered in the current environment');
    } else {
      console.error('Something else went wrong:', error);
    }
  });
















/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
