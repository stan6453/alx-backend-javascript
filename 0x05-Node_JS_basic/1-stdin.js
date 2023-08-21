console.log('Welcome to Holberton School, what is your name?');
let user_name = '';
process.stdin.once('data', data => { 
  user_name = data.toString().slice(0,-1);
  console.log('Your name is: ' + user_name);
  process.exit();
 });