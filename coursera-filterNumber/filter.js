let numberArray = ["1","2","3","4","5","6","7","8","9","10"]

console.log("numberArray: " + numberArray); // [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]

function ebove5Filter (value){
    return value > 5
}

let filteredNumber = numberArray.filter(ebove5Filter)

console.log("filtered Number",filteredNumber);

var shoppingList = [
    "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
  ];
  console.log("Shopping List: ", shoppingList);

  let searchValue = "Bismol" ;

  function containBismol (value){
    return value.indexOf(searchValue) !== -1;
  }

 let filteredString = shoppingList.filter(containBismol);
 console.log("filteredString" , filteredString);

