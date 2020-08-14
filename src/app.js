var chocolates = [
  "green",
  "green",
  "green",
  "silver",
  "blue",
  "crimson",
  "purple",
  "red",
  "crimson",
  "purple",
  "purple",
  "green",
  "pink",
  "blue",
  "red",
  "silver",
  "crimson",
  "purple",
  "silver",
  "silver",
  "red",
  "green",
  "red",
  "silver",
  "pink",
  "crimson",
  "purple",
  "green",
  "red",
  "silver",
  "crimson",
  "pink",
  "silver",
  "blue",
  "pink",
  "crimson",
  "crimson",
  "crimson",
  "red",
  "purple",
  "purple",
  "green",
  "pink",
  "blue",
  "red",
  "crimson",
  "silver",
  "purple",
  "purple",
  "purple",
  "red",
  "purple",
  "red",
  "blue",
  "silver",
  "green",
  "crimson",
  "silver",
  "blue",
  "crimson",
  "purple",
  "green",
  "pink",
  "green",
  "red",
  "silver",
  "crimson",
  "blue",
  "green",
  "red",
  "red",
  "pink",
  "blue",
  "silver",
  "pink",
  "crimson",
  "purple",
  "green",
  "red",
  "blue",
  "red",
  "purple",
  "silver",
  "blue",
  "pink",
  "silver",
  "crimson",
  "silver",
  "blue",
  "purple",
  "purple",
  "green",
  "blue",
  "blue",
  "red",
  "red",
  "silver",
  "purple",
  "silver",
  "crimson",
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
  if (count <= 0) {
    return "Number cannot be zero/negative";
  }

  for (var i = 0; i < count; i++) {
    chocolates.unshift(color);
  }
  return chocolates;
}

//Progression 2: Remove ___ chocolates from the top the dispenser-------------
function removeChocolates(chocolates, count) {
  let arr = [];
  let fav = 0;
  let arr1 = [];

  if (count > chocolates.length) {
    return "Insufficient chocolates in the dispenser";
  }
  if (count <= 0) {
    return "Number cannot be zero/negative";
  }

  for (var j = 0; j < chocolates.length; j++) {
    arr.push(chocolates.shift());
    fav++;
    if (fav == count) {
      return arr;
    }
  }

  if (fav != count) {
    return "Insufficient chocolates in the dispenser";
  }

  if (chocolates.length > 0) {
    for (var i = 0; i < chocolates.length; i++) {
      arr1.push(chocolates.shift());
    }
    return arr1;
  }
}

//Progression 3: Dispense ___ chocolates---------------------------------------------
function dispenseChocolates(chocolates, count) {
  var arr = [];
  var fav = 0;
  if (count > chocolates.length) {
    return "Insufficient chocolates in the dispenser";
  }
  if (count <= 0) return "Number cannot be zero/negative";
  for (var i = chocolates.length - 1; i >= 0; i--) {
    arr.push(chocolates.pop());
    fav++;
    if (fav == count) {
      return arr;
    }
  }
  if (fav != count) return "Insufficient chocolates in the dispenser";
}

//Progression 4: Dispense ___ chocolates of ____ color----------------------------------
function dispenseChocolatesOfColor(chocolates, count, color) {
  let arr = [];
  var fav = 0;
  if (count > chocolates.length)
    return "Insufficient chocolates in the dispenser";
  if (count <= 0) return "Number cannot be zero/negative";
  for (var i = chocolates.length - 1; i >= 0; i--) {
    if (chocolates[i] == color) {
      arr.push(chocolates.pop());
      fav++;
      if (fav == count) return arr;
    }
  }
  if (fav != count) return "Insufficient chocolates in the dispenser";
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
  var arrCount = [];
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
  if (chocolates.length == 1) {
    return chocolates[0];
  }
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, count, color, newcolor) {
  var fav = 0;
  if (count <= 0) return "Number cannot be zero/negative";
  for (var i = chocolates.length - 1; i >= 0; i--) {
    if (chocolates[i] == color) {
      chocolates[i] = newcolor;
      fav++;
      if (fav == count) return chocolates;
    }
  }
  if (chocolates == "") {
    return chocolates;
  } else {
    return "Can't replace the same chocolates";
  }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, newcolor) {
  var countOfChangedColor = 0;

  if (chocolates == "") {
    return chocolates;
  }

  if (chocolates.length == 1) {
    return chocolates;
  }

  for (var i = chocolates.length - 1; i >= 0; i--) {
    if (chocolates[i] == color) {
      chocolates[i] = newcolor;
      countOfChangedColor++;
    }
  }

  return [countOfChangedColor, chocolates];
}

//Challenge 1: Remove one chocolate of ____ color from the top
function rmoneChoc(chocolates, color) {
  var count = 0;
  for (var i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates.shift();
      count++;
      if (count == 1) return chocolates;
    }
  }
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
