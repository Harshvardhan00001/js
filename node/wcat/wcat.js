const fs=require("fs");
let input =process.argv.slice(2);

let filesarr=[];
for( let i=0;i<input.length;i++){
filesarr.push(input[i]);
}
console.log("file to be read"+filesarr);

for(let i=0;i<filesarr.length;i++){
    let doesexist=fs.existsSync(filesarr[i]);
    if(!doesexist){
        console.log("file does not exist");
        return;
    }
}

// content reading and appending starts
let content="";
for(let i=0;i<filesarr.length;i++){
    let filecontent=fs.readFileSync(filesarr[i]);
    content+=filecontent+"\n";
}
console.log(content);