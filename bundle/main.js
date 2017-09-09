
// The debugger pauses here when you run `meteor debug`, because this is 
// the very first code to be executed by the server process. If you have 
// not already added any `debugger` statements to your code, feel free to 
// do so now, wait for the server to restart, then reload this page and 
// click the |▶ button to continue.
process.argv.splice(2, 0, 'program.json');
process.chdir(require('path').join(__dirname, 'programs', 'server'));
process.env['ROOT_URL'] = 'http://localhost:3000';
process.env['PORT'] = '3000';

require('./programs/server/boot.js');