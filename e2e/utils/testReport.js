const { exec } = require('child_process');
console.log(__dirname)
const env = process.env.NODE_ENV || 'local';
const config = require("./environment/"+env+".json");
let folderName = "Automation-Report-"+ '-' + newDate.getMonth() + '-' + newDate.getDate() + '-'
+ newDate.getFullYear() + '-' + newDate.getHours() + '-' + newDate.getMinutes() ;
let command = "allure generate allure-results --clean -o "+ folderName +" || true";
// console.log(envConfig)
// console.log(envConfig.emailableFolderDestination);
exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  //command = "move "+folderName+ ' ' + envConfig.emailableFolderDestination;
  command = "move "+folderName+ ' ' + config.destinationFolder;
  
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    // const fs = require('fs');
    // const dir = './directory';

    // fs.readdir(dir, (err, files) => {
    // console.log(files.length);
    // });
    console.log(`Success ${stdout}`);
  });
});