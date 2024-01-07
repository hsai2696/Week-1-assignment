/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  // store category wise expense and each category as a key so we can add it easily while iterating over transactions
  let category_wise_expense = {}
  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i]
    let category = transaction.category
    if (category_wise_expense.hasOwnProperty(category)) { //check if a property is present in javascript object
      // to access a property by a variable wrap it in [] else it will not work
      category_wise_expense[category] += transaction.price
    } else {
      category_wise_expense[category] = transaction.price
    }
  }
  let categories = Object.keys(category_wise_expense) // to get keys in an object
  let res = []
  for (let i = 0; i < categories.length; i++) {
    let category_wise_exp = {}
    category_wise_exp[categories[i]] = category_wise_expense[categories[i]]
    res.push(category_wise_exp)
  }
  return res;
}

let txns = [{itemName: 'item1', category: '1', price: 123, timestamp: "2023"},
  {itemName: 'item2', category: '1', price: 123, timestamp: "2023"},
  {itemName: 'item3', category: '2', price: 111, timestamp: "2024"}]
console.log(calculateTotalSpentByCategory(txns))

module.exports = calculateTotalSpentByCategory;
