const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');
const output = fs.createWriteStream(path.join(__dirname, 'some.txt'));
stdout.write('Привет, введите что нибудь\n');
stdin.on('data', (data) => {
  if(data.toString().trim()==='exit'){
    process.exit();
  } else{
    output.write(data);
  }
}
);
process.on('exit', ()=> console.log('Приходите ещё'));

process.on('SIGINT', () => {
  process.exit();
});
