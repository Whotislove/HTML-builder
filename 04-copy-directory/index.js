const fs = require('fs');
const path = require('path');
fs.mkdir(path.join(__dirname,'files-copy'),{recursive:true},err=>{
  if (err) throw err;
});
function copyDir(){
  fs.readdir(path.join(__dirname,'files'),(err, files)=>{
    if(err){
      console.error(err);
      return;
    } else {
      for(const file of files){
        const input = fs.createReadStream(path.join(__dirname,'files',file),'utf-8');
        const output = fs.createWriteStream(path.join(__dirname,'files-copy',file));
        input.on('data', chunk=> output.write(chunk));
      }
    }
  }
  );
}
copyDir();
