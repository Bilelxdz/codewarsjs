/// 1 star
const likes = (names) => {
  let par = "";
  if (names.length < 1) {
    par += "no one likes this";
  } else if (names.length === 1) {
    par += `${names[0]} likes this`;
  } else if (names.length < 3) {
    par += `${names[0]} and ${names[1]} like this`;
  } else if (names.length < 4) {
    par += `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    par += `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  return par;
};
/////////////////////
const capitals = (word) => {
  let arr = [];
  let secArr = [];
  arr = word.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      secArr.push(i);
    }
  }
  return secArr;
};
//console.log(capitals("CodEWaRs"));
///////
var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let sum = 0;
    if (count < 0) {
      return (sum = `${count}<0`);
    }
    if (count === 0) {
      return (sun = `${count}=0`);
    }
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
  };

  return SequenceSum;
})();
///////// Remove String Spaces
const noSpace = (x) => {
  let str = x.split(" ").join("");
  return str;
};
//console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

////////// sheeeeeeeeeeeeep         If you can't sleep, just count sheep!!

var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

//////////////////////////////////////////////Switch/Case - Bug Fixing #6
//// not done
function evalObject(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "/":
      return a / b;
      break;
    case "*":
      return a * b;
      break;
    case "%":
      return a % b;
      break;
    case "^":
      return Math.pow(a, b);
      break;
  }
}
///////// Are You Playing Banjo?

function areYouPlayingBanjo(name) {
  if (name.charAt(0) == "R" || name.charAt(0).toLowerCase() == "r") {
    name += " plays banjo";
  } else {
    name += " does not play banjo";
  }
  return name;
}

function countSheeps(arrayOfSheep) {
  let sum = 0;
  let tt = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (
      arrayOfSheep[i] === false ||
      typeof arrayOfSheep[i] === undefined ||
      typeof arrayOfSheep[i] === null
    ) {
      sum += 1;
    }
  }
  tt = arrayOfSheep.length - sum;
  return tt;
}
////  Make a function that does arithmetic!

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

/// do i get a bonus

function bonusTime(salary, bonus) {
  if (bonus) {
    return "£" + (salary * 10).toString();
  }
  return "£" + salary.toString();
}

//// boool yes and no
function boolToWord(bool) {
  if (bool) {
    bool = "Yes";
  } else {
    bool = "No";
  }
  return bool;
}

/////////////////// Credit Card Mask

const maskify = (cc) => {
  if (cc.length > 4) {
    let h = "";
    let reversed = reverse(cc);
    for (let index = 0; index < reversed.length; index++) {
      if (index < 4) {
        h += reversed[index];
      } else {
        h += "#";
      }
    }
    return reverse(h);
  } else {
    return cc;
  }
};
const reverse = (str) => {
  return str.split("").reverse().join("");
};
console.log(maskify("4455625555555"));
/////////////
const maskify1 = (cc) => {
  let str = "";
  for (let index = 0; index < cc.length; index++) {
    if (index < cc.length - 4) {
      str += "#";
    } else {
      str += cc[index];
    }
  }
  return str;
};

//////// string repeat
const strReverse = (repeat, str) => {
  let str1 = "";
  for (let index = 0; index < repeat; index++) {
    str1 += str;
  }
  return str1;
};

/////////////Stop gninnipS My sdroW!
const test = (str) => {
  let h = str.split(" ");
  let finalstr = "";
  for (let index = 0; index < h.length; index++) {
    if (getLength(h[index])) h[index] = reverse(h[index]);
  }
  finalstr += h.join(" ");
  return finalstr;
};
const getLength = (s) => {
  s = s.split("");
  if (s.length >= 5) return true;
  else return false;
};
const reverse = (str) => {
  return str.split("").reverse().join("");
};

////// hello oscarrr
function leo(oscar) {
  if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  } else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  } else if (oscar < 88) {
    return "When will you give Leo an Oscar?";
  } else if (oscar > 88) {
    return "Leo got one already!";
  } else {
    return "no";
  }
}
////////////////
function digital_root(n) {
  let num = n.toString().split("");

  if (num.length === 1) return n;
  while (num.length > 1) {
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
      let elem = parseInt(num[index]);
      sum += elem;
    }
    num = sum.toString().split("");
  }
  return parseInt(num[0]);
}
/////////////
function solution(str, ending) {
  let sum = str.length - ending.length;
  for (let index = sum; index < str.length; index++) {
    if (str[index] !== ending[index - sum]) return false;
  }
  return true;
}
/////

function litres(time) {
  let l = 0.5;
  let sum = 0;
  sum += parseInt(time * l);
  return sum;
}
////////////
function maps(x) {
  const arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i] * 2);
  }
  return arr;
}

////
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}
