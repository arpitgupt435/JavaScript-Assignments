// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let count=0;

let counter=()=>{
    count++;
    console.log(count);
}

let currtime=new Date();

while(true){
    let newtime=new Date();
    if(newtime-currtime>=1000){
        counter();
        currtime=newtime;
    }
}