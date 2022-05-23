const fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname,'styles'), (err, files)=>{
  if(err) throw err;
  let arr = [];
  for(const file of files){
    if(path.extname(file) === '.css'){
      arr.push(file);
    }
  }
  const output =  fs.createWriteStream(path.join(__dirname,'project-dist','bundle.css'));
  for(const ar of arr) {
    const input = fs.createReadStream(path.join(__dirname,'styles', ar));
    input.on('data', chunk =>output.write(chunk));
  }
});