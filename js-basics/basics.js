// 1. **Sum values in object arrays**
//     - Input:
        
//         ```jsx
//         { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { food: 60, travel: 20, bills: 100 }
//         ```


// let obj={ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };

// let ans={};

// const arr=Object.entries(obj);

// for(let i=0;i<arr.length;i++){
//     let sum=0;
//     for(let j=0;j<arr[i][1].length;j++){
//         sum+=arr[i][1][j];
//     }
//     let key=arr[i][0];
//     ans[key]=sum;
// }

// console.log(ans);

// 2. **Count word occurrences in array**
//     - Input:
        
//         ```jsx
//         ["apple", "banana", "apple", "orange", "banana", "apple"]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { apple: 3, banana: 2, orange: 1 }
        
//         ```


// let ans={};

// let arr=["apple", "banana", "apple", "orange", "banana", "apple"];

// for(let i=0;i<arr.length;i++){
//     let key=arr[i];
//     if(Object.hasOwn(ans,key)){
//         ans[key]=ans[key]+1;
//     }
//     else{
//         ans[key]=1;
//     }
// }

// console.log(ans);


// 3. **Swap keys and values of object**
//     - Input:
        
//         ```jsx
//         { a: "x", b: "y", c: "z" }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { x: "a", y: "b", z: "c" }
        
//         ```

// let ans={};

// let obj= { a: "x", b: "y", c: "z" };

// const arr=Object.entries(obj);

// for(let i=0;i<arr.length;i++){
//     let key=arr[i][0];
//     let value=arr[i][1];
//     ans[value]=key;
// }

// console.log(ans);

// 4. **Find the largest value key**
//     - Input:
        
//         ```jsx
//         { a: 10, b: 50, c: 20 }
        
//         ```
        
//     - Output:
        
//         ```
//         b
//         ```

// let ans;

// let maxi=0;

// let obj={ a: 10, b: 50, c: 20 };

// let arr=Object.entries(obj);

// for(let i=0;i<arr.length;i++){
//     let key=arr[i][0];
//     let value=arr[i][1];
//     if(value>maxi){
//         maxi=value;
//         ans=key;
//     }
// }

// console.log(ans);


// 5. **Flatten object of arrays into one array**
//     - Input:
        
//         ```jsx
//         { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         ["apple", "banana", "carrot", "pea"]
        
//         ```

// let obj={ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
// let ans=[];
// for(let i in obj){
//     let value=obj[i];
//     for(let j=0;j<value.length;j++){
//         ans.push(obj[i][j]);
//     }
// }

// console.log(ans);



// 6. **Group people by city**
//     - Input:
        
//         ```jsx
//         [
//           { name: "A", city: "Delhi" },
//           { name: "B", city: "Mumbai" },
//           { name: "C", city: "Delhi" }
//         ]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { Delhi: ["A", "C"], Mumbai: ["B"] }
//         ```


// let arr=[
//           { name: "A", city: "Delhi" },
//           { name: "B", city: "Mumbai" },
//           { name: "C", city: "Delhi" }
//         ]

// let ans={};
// for(let i=0;i<arr.length;i++){
//     let ch=arr[i].name;
//     let place=arr[i].city;
//     if(Object.hasOwn(ans,place)){
//         ans[place].push(ch);
//     }
//     else{
//         ans[place]=[];
//         ans[place].push(ch);
//     }
// }

// console.log(ans);

// 7. **Filter object by values > 50**
//     - Input:
        
//         ```jsx
//         { a: 20, b: 60, c: 40, d: 90 }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { b: 60, d: 90 }
//         ```

// let ans={};

// let obj={ a: 20, b: 60, c: 40, d: 90 };

// for(let i in obj){
//     let key=i;
//     let value=obj[i];
//     if(value>50){
//         ans[key]=value;
//     }
// }

// console.log(ans);


// 8. Find student with highest average mark
//     - Input:
        
//         ```jsx
//         { A: [80, 90], B: [70, 75, 85] }
//         ```
        
//     - Output:
        
//         ```jsx
//         A
//         ```


// let ans;
// let maxi=0;

// let obj={ A: [80, 90], B: [70, 75, 85] };
// for(let i in obj){
//     let arr=obj[i];
//     let sum=0;
//     for(let j=0;j<arr.length;j++){
//         sum+=arr[j];
//     }
//     let avg=sum/arr.length;
//     if(maxi<avg){
//         maxi=avg;
//         ans=i;
//     }
// }

// console.log(ans);


// 9. **Unique values across all object arrays**
//     - Input:
        
//         ```jsx
//         { x: [1,2,3], y: [2,3,4], z: [4,5] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         [1,2,3,4,5]
        
//         ```

// let ans=[];

// let obj={ x: [1,2,3], y: [2,3,4], z: [4,5] };

// for(let i in obj){
//     let arr=obj[i];
//     for(let j=0;j<arr.length;j++){
//         if(ans.includes(arr[j])){
//             //
//         }
//         else{
//             ans.push(arr[j]);
//         }
//     }
// }

// console.log(ans);


// 10. **Pick only given keys from object**
//     - Input:
        
//         ```jsx
//         { name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { name: "Rahul", city: "Noida" }
        
//         ```

// let obj= { name: "Rahul", age: 23, city: "Noida" };

// let keys=["name","city"];

// let ans={};

// for(let j=0;j<keys.length;j++){
//     ans[keys[j]]=obj[keys[j]];
// }

// console.log(ans);

// 12. **Sort object entries by values (ascending)**
//     - Input:
        
//         ```jsx
//         { a: 3, b: 1, c: 2 }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         [["b",1], ["c",2], ["a",3]]
        
//         ```

// function compare(a,b){
    
//     if(a[1]<b[1]){
//         return -1;
//     }
//     return 0;
// }
// let ans=[];
// let obj={a: 3, b: 1, c: 2 }

// for(let i in obj){
//     ans.push([i,obj[i]]);
// }

// ans.sort(compare);
// console.log(ans);


// 13. **Count number of keys in object**
//     - Input:
        
//         ```jsx
//         { a: 1, b: 2, c: 3 }
        
//         ```
        
//     - Output:
        
//         ```
//         3
//         ```


// let obj={ a: 1, b: 2, c: 3 };

// let ans=Object.entries(obj);
// console.log(ans.length);

// 14. **Capitalize string values inside object**
//     - Input:
        
//         ```jsx
//         { name: "alice", city: "delhi" }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { name: "Alice", city: "Delhi" }
//         ```


// let obj= { name: "alice", city: "delhi" };

// let ans={};

// for(let i in obj){
//     let value=obj[i];
//     let newvalue=value.charAt(0).toUpperCase()+value.slice(1);
//     ans[i]=newvalue;
// }

// console.log(ans);

// 15. **Convert object to query string**
//     - Input:
        
//         ```jsx
//         { name: "Alice", age: 25 }
        
//         ```
        
//     - Output:
        
//         ```
//         "name=Alice&age=25"
        
//         ```

// let ans="";

// let obj= { name: "Alice", age: 25 };
// for(let i in obj){
   
//     let key=i;
//     let value=obj[i];
//     let temp=key+'='+value;
//     ans+=temp;
//     ans+='&';
// }
// let newans=ans.slice(0,-1);
// console.log(newans);

// 17. **Find common keys between two objects**
//     - Input:
        
//         ```jsx
//         { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         ["b","c"]
//         ```

// let obj1={ a: 1, b: 2, c: 3 };
// let obj2={ b: 4, c: 5, d: 6 };

// let ans=[];

// let keys1=Object.keys(obj1);
// let keys2=Object.keys(obj2);

// for(let i=0;i<keys1.length;i++){
//     if(keys2.includes(keys1[i])){
//         ans.push(keys1[i]);
//     }
// }
// console.log(ans);

// 18. **Convert array of objects to lookup by id**
//     - Input:
        
//         ```jsx
//         [{ id: 1, name: "A" }, { id: 2, name: "B" }]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }
        
//         ```

// let ans={};
// let arr=[{ id: 1, name: "A" }, { id: 2, name: "B" }];

// for(let i=0;i<arr.length;i++){
//     let no=arr[i]["id"];
//     ans[no]=arr[i];
// }

// console.log(ans);

// 19. **Check if all values in object are numbers**
//     - Input:
        
//         ```jsx
//         { a: 1, b: "hello", c: 3 }
        
//         ```
        
//     - Output:
        
//         ```
//         false
        
//         ```

// let obj={ a: 1, b: "hello", c: 3 }
// let flag=true;
// for(let i in obj){
//     let val=obj[i];
//     if(Number.isInteger(val)){
//         //
//     }
//     else{
//         flag=false;
//     }
// }

// if(flag){
//     console.log("True");
// }

// else{

//     console.log("false");
// }

//🔹 20 intermediate (Objects + Arrays)

// 1. **Sum all transactions per user**
//     - Input:
        
//         ```jsx
//         [
//           { user: "A", amount: 100 },
//           { user: "B", amount: 200 },
//           { user: "A", amount: 50 }
//         ]
//         ```
        
//     - Output:
        
//         ```jsx
//         { A: 150, B: 200 }
//         ```

// let ans={};

// let arr=[
//           { user: "A", amount: 100 },
//           { user: "B", amount: 200 },
//           { user: "A", amount: 50 }
//         ];

// for(let i=0;i<arr.length;i++){
//     let key=arr[i].user;
//     let value=arr[i].amount;
//     if(Object.hasOwn(ans,key)){
//        ans[key]+=value;
//     }
//     else{
//         ans[key]=value;
//     }
// }

// console.log(ans);


// 2. **Transform API response to object (id → name)**
//     - Input:
        
//         ```jsx
//         [
//           { id: 1, name: "Alice" },
//           { id: 2, name: "Bob" }
//         ]
//         ```
        
//     - Output:
        
//         ```jsx
//         { 1: "Alice", 2: "Bob" }
//         ```

// let arr=[
//           { id: 1, name: "Alice" },
//           { id: 2, name: "Bob" }
//         ]
// let ans={};

// for(let i=0;i<arr.length;i++){
//     let key=arr[i].id;
//     let value=arr[i].name;
//     ans[key]=value;
// }

// console.log(ans);


// 3. **Remove falsy values from object**
//     - Input:
        
//         ```jsx
//         { a: 0, b: null, c: "hello", d: undefined, e: 5 }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { c: "hello", e: 5 }
        
//         ```

// let obj={a: 0, b: null, c: "hello", d: undefined, e: 5 };

// let ans={};

// for(let key in obj){
//     let value=obj[key];
//     if(value){
//         ans[key]=value;
//     }
// }

// console.log(ans);

// 4. Check for permissions from roles
//     - Input:
        
//         ```jsx
//         roles={ admin:["read","write"], user:["read"], staff: ["write"]}
//         checkRole="user",
//         action="write"
//         ```
        
//     - Output:
        
//         ```jsx
//         false
//         ```

// let roles={ admin:["read","write"], user:["read"], staff: ["write"]};
// let checkRole="user";
// let action="write";

// let flag=false;
// for(let i=0;i<roles[checkRole].length;i++){
//     if(roles[checkRole][i]==action){
//         flag=true;
//     }
// }

// console.log(flag);


// 5. **Transform array of orders into revenue per category**
//     - Input:
        
//         ```jsx
//         [
//           { id: 1, category: "electronics", price: 100 },
//           { id: 2, category: "clothes", price: 50 },
//           { id: 3, category: "electronics", price: 200 }
//         ]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { electronics: 300, clothes: 50 }
//         ```

// let arr=[
//           { id: 1, category: "electronics", price: 100 },
//           { id: 2, category: "clothes", price: 50 },
//           { id: 3, category: "electronics", price: 200 }
//         ];
// let ans={};

// for(let i=0;i<arr.length;i++){
//     if(Object.hasOwn(ans,arr[i].category)){
//         ans[arr[i].category]+=arr[i].price;
//     }
//     else{
//         ans[arr[i].category]=arr[i].price;
//     }
// }

// console.log(ans);


// 6. **Remove duplicate objects by id**
//     - Input:
        
//         ```jsx
//         [
//           { id: 1, name: "A" },
//           { id: 2, name: "B" },
//           { id: 1, name: "A" }
//         ]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         [
//           { id: 1, name: "A" },
//           { id: 2, name: "B" }
//         ]
//         ```

// let arr=[
//           { id: 1, name: "A" },
//           { id: 2, name: "B" },
//           { id: 1, name: "A" }
//         ];


// let ans=[];
// let keys=[];
// for(let i=0;i<arr.length;i++){
//     let key = arr[i].id;
//     let value=arr[i].name;
//     if(keys.includes(key)){
//         //
//     }
//     else{
//         keys.push(key);
//         ans.push(arr[i]);
//     }
// }

// console.log(ans);


// 7. **Chunk object entries into groups of size**
//     - Input:
        
//         ```jsx
//         { a: 1, b: 2, c: 3, d: 4 }, size=2
//         ```
        
//     - Output:
        
//         ```jsx
//         [ [["a",1],["b",2]], [["c",3],["d",4]] ]
//         ```

// let obj={ a: 1, b: 2, c: 3, d: 4 };

// let size=2;

// let arr=Object.entries(obj);

// let ans=[];

// let i=0;

// while(i<arr.length){
//     let temp=[];
//     let tempsize=size;
//     while(tempsize>0){
//         temp.push(arr[i]);
//         i++;
//         tempsize--;
//     }
//     ans.push(temp);
// }

// console.log(ans);

// 8. Convert the object where **languages** are the top-level keys, and inside each are **translation strings by key into** an object where **translation keys** are the top-level keys, and inside each you store values per language [HARD**]
//     - Input:
        
//         ```jsx
//         {
//           en: { hello: "Hello", bye: "Goodbye" },
//           fr: { hello: "Bonjour", bye: "Au revoir" },
//           es: { hello: "Hola" }
//         }
//         ```
        
//     - Output:
        
//         ```jsx
//         {
//           hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//           bye: { en: "Goodbye", fr: "Au revoir" }
//         }
//         ```

// let obj={
//           en: { hello: "Hello", bye: "Goodbye" },
//           fr: { hello: "Bonjour", bye: "Au revoir" },
//           es: { hello: "Hola" }
//         };

// let ans={};


// for(let key in obj){
//     for(let key2 in obj[key]){
//         let tempobj={}
//         if(Object.hasOwn(ans,key2)){
//             tempobj=ans[key2];
//         }
//         else{
            
//         }
//         tempobj[key]=obj[key][key2];
//         ans[key2]=tempobj;
//     }
// }

// console.log(ans);


// 10. **Remove deeply nested key from object**
//     - Input:
        
//         ```jsx
//         { a: { b: { c: 1, d: 2 } } }, remove "c"
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { a: { b: { d: 2 } } }
//         ```

// function removeKeyDeep(obj, keyToRemove) {
//   if (typeof obj !== 'object' || obj === null) return;

//   for (const key in obj) {
//     if (key === keyToRemove) {
//       delete obj[key];
//     } else {
//       removeKeyDeep(obj[key], keyToRemove);
//     }
//   }
// }

// const obj = { a: { b: { c: 1, d: 2 } } };

// removeKeyDeep(obj, 'c');

// console.log(obj);
// // { a: { b: { d: 2 } } }


// function deepEqual(obj1, obj2) {
//   // Same reference or same primitive
//   if (obj1 === obj2) return true;

//   // If either is not an object or is null
//   if (
//     typeof obj1 !== 'object' || obj1 === null ||
//     typeof obj2 !== 'object' || obj2 === null
//   ) {
//     return false;
//   }

//   // Arrays vs Objects check
//   if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;

//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   // Different number of keys
//   if (keys1.length !== keys2.length) return false;

//   // Recursively compare keys
//   for (const key of keys1) {
//     if (!keys2.includes(key)) return false;
//     if (!deepEqual(obj1[key], obj2[key])) return false;
//   }

//   return true;
// }

// // Example
// const a = { a: { x: 1, y: 2 } };
// const b = { a: { x: 1, y: 2 } };

// console.log(deepEqual(a, b)); // true


// 12. **Deep flatten nested arrays inside object**
//     - Input:
        
//         ```jsx
//         { a: [1, [2, [3]]], b: [4, [5]] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { a: [1,2,3], b: [4,5] }
//         ```


// let obj=  { a: [1, [2, [3]]], b: [4, [5]] };

// let ans={};

// for(let keys in obj){
//     let value = obj[keys];
//     let newvalue=value.flat(Infinity);
//     ans[keys]=newvalue;
// }

// console.log(ans);



// 14. **Find intersection of all arrays in object**
//     - Input:
        
//         ```jsx
//         { a: [1,2,3], b: [2,3,4], c: [3,4,5] }
        
//         ```
        
//     - Output:
        
//         ```
//         [3]
        
//         ```

// let obj={ a: [1,2,3,4], b: [2,3,4], c: [3,4,5] };

// let mapper={};

// for(let key in obj){
//     for(let i=0;i<obj[key].length;i++){
//         if(Object.hasOwn(mapper,obj[key][i])){
//             mapper[obj[key][i]]++;
//         }
//         else{
//             mapper[obj[key][i]]=1;
//         }
//     }
// }

// for(let key in mapper){
//     let value=mapper[key];
//     if(value==Object.keys(obj).length){
//         console.log(key);
//     }
// }


// // 15. **Deep merge two nested objects**
// //     - Input:
        
// //         ```jsx
// //         { a: { x: 1, y: 2 } }
// //         { a: { y: 3, z: 4 } }
        
// //         ```
        
// //     - Output:
        
// //         ```jsx
// //         { a: { x: 1, y: 3, z: 4 } }
        
// //         ```


// let obj1 = { a: { x: 1, y: 2 } };
// let obj2 = { a: { y: 3, z: 4 } };


// 16. **Nested object destructuring**
//     - Input:
        
//         ```jsx
//         { user: { profile: { name: "Alice", age: 25 } } }
        
//         ```
        
//     - Output:
        
//         ```
//         Alice 25
//         ```


// let obj={ user: { profile: { name: "Alice", age: 25 } } };

// for(let users in obj){
//     let str=obj[users].profile.name+' '+obj[users].profile.age;
//     console.log(str);
// }


// 17. **Find top N keys by value**
//     - Input:
        
//         ```jsx
//         { a: 10, b: 50, c: 30, d: 40 }, N=2
        
//         ```
        
//     - Output:
        
//         ```jsx
//         ["b","d"]
        
//         ```

// function comparefn(a,b){
    
//     return a[1]-b[1];
// }

// let obj= { a: 10, b: 50, c: 30, d: 40 };
// let n=2;
// let arr=Object.entries(obj);


// arr.sort(comparefn);

// for(let i=arr.length-1;i>=Math.max(0,arr.length-n);i--){
//     console.log(arr[i][0]);
// }

// 18. **Sort array of objects by name then age**
//     - Input:
        
//         ```jsx
//         [
//           { name: "Alice", age: 30 },
//           { name: "Bob", age: 25 },
//           { name: "Alice", age: 22 }
//         ]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         [
//           { name: "Alice", age: 22 },
//           { name: "Alice", age: 30 },
//           { name: "Bob", age: 25 }
//         ]
        
//         ```

// function comparefn(a,b){
//     if(b.name>a.name){
//         return -1;
//     }
//     else if(b.name<a.name){
//         return 1;
//     }
//     else{
//         if(b.age>a.age){
//             return -1;
//         }
//         return 1;
//     }
//     return 0;
// }
// let arr=[
//           { name: "Alice", age: 30 },
//           { name: "Bob", age: 25 },
//           { name: "Alice", age: 22 }
//         ];

// arr.sort(comparefn)

// console.log(arr);


