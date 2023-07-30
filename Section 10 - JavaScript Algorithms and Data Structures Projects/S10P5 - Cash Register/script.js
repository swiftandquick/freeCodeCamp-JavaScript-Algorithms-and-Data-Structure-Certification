// Global value demon contains the money units and their represented values.  
const denom = [
  { name: 'ONE HUNDRED', val: 100 },
  { name: 'TWENTY', val: 20 },
  { name: 'TEN', val: 10 },
  { name: 'FIVE', val: 5 },
  { name: 'ONE', val: 1 },
  { name: 'QUARTER', val: 0.25 },
  { name: 'DIME', val: 0.1 },
  { name: 'NICKEL', val: 0.05 },
  { name: 'PENNY', val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  // Set the output element which we will return later.  
  let output = {status: null, change: []};
  // Change (refund) is cash minus price.  
  let change = cash - price;
  // Get the total amount of money in the register using reduce() method.  The register object has a total property that represents the total money value.   
  // Register holds all cid properties plus the total property.  
  let register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});
  // If register's total property equals to change, close the register.  
  if (register.total === change) {
    output.status = 'CLOSED';
    output.change = cid;
    return output;
  }
  // If register's total property is less than change, there is insufficient fund.  
  if (register.total < change) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }
  // Iterate denom array, acc is the current array, curr is the current object that's being iterated, at start, it's "ONE HUNDRED", the next iteration it's "TWENTY".  
  // change_arr is initalized with an empty array, the reduce() method will keep pushing new elements into that empty array (acc).  
  let change_arr = denom.reduce(function(acc, curr) {
    // Set initial value to 0.  
    let value = 0;
    // Run a while loop while the value of register's current money unit is greater than 0 and change is greater than curr's value.  
    // For example, if change is 0.5, run the while loop until register["QUARTER"] is 0 or less and 0.5 is greater than curr's value (which is 0.25).  
    while(register[curr.name] > 0 && change >= curr.val) {
      // Subtract change by curr's value, if it's 0.5, subtract curr.val (0.25) makes change equal to 0.25.  
      change -= curr.val;
      // Subtract register[curr.name], if change is 0.5, subtract the QUARTER property of register by curr.val, which is 0.25.  
      register[curr.name] -= curr.val;
      // Add curr.val to value, which starts from 0, if change is 0.5, add curr.val to value will make value equal to 0.25;
      value += curr.val;
      // Round change to 2 decimal places.  
      change = Math.round(change * 100) / 100;
    }
    // If value is greater than 0, push a new array into acc (an accumulator that started as empty array).  
    // The element that's being added to acc is curr.name such as QUARTER, and the value which is calculated inside the while loop.  
    if(value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);
  // If change_arr array doesn't have any objects in it of change is greater than 0, there is insufficient fund;
  if(change_arr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }
  // output's status to "OPEN" and output's change array is now change_arr;
  output.status = 'OPEN';
  output.change = change_arr;
  return output;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));