// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


let helper=(err,content)=>{
    console.log(err);
}
const fs=require('fs');

fs.writeFile('output.txt','hello my name is giyan',helper);