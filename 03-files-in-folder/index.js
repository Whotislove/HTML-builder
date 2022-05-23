const fs = require('fs');
const path = require('path');
const ns = path.join(__dirname,'secret-folder');
let arr = [];
fs.readdir(ns,{withFileTypes: true},(err, files)=>{
  if (err) {
    console.error(err);
    return;
  } else{
    for(const file of files){
      if(!file.isDirectory()){
        arr.push(file.name);
      }
    }
  }
  for(const ar of arr){
    let name = path.basename(ar, path.extname(ar));
    let extension = path.extname(ar);
    fs.stat(path.join(__dirname,'secret-folder',ar),(err, {size})=>{
      console.log(`${name} - ${extension} - ${size}`);
    }
    );
  }
}
);

