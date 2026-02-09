/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    let ans=[];
    let obj={};
    for(let i=0;i<transactions.length;i++){
      let p=transactions[i].price;
      let cate=transactions[i].category;
      if(obj[cate]){
        obj[cate]+=p;
      }
      else{
        obj[cate]=p;
      }
    }
    for(let key in obj){
      let newobj={};
      newobj['category']=key;
      newobj['totalSpent']=obj[key];
      ans.push(newobj);
    }
    return ans;
}

module.exports = calculateTotalSpentByCategory;