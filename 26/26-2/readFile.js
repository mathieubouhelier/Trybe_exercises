const fs = require('fs');
console.log("hello I am in readFile");
fs.writeFile('./myfile.txt','writeFile test', (err) => {
  if(err) throw err
  console.log('writeFile used successfully');
}
)

fs.readFile('./myfile.txt','utf-8',(error,data) =>{
  if(error){
    return console.log(`Reading error:${error.message}` );
  }
  console.log(`file content: ${data}`);
})
