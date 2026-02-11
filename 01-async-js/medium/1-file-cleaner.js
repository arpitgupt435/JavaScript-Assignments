// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

let helper=(err,content)=>{
    if(err){
        return Error;
    }

    return content;
}
const fs=require('fs');

let content=fs.readFileSync('sample.txt','utf-8',helper);

let newcontent="";

let i=0;
while(i<content.length){
    if(content[i]==' '){
        newcontent+=' ';
        while(i<content.length&&content[i]==' '){
            i++;
        }
    }
    else{
        newcontent+=content[i];
        i++;
    }
}

console.log(newcontent);

fs.writeFileSync('output.txt',newcontent);