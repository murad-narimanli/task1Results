let names = ["Azar","Aliyev", "Emin"];
let letters = [];
for (let name of names) {
  let nameLetters = name.split('');
  letters.push(nameLetters);
}
[letters[0],letters[1]] = [letters[1],letters[0]]
let lettersString = letters.join(", ")
console.log(lettersString);
/////////////////////////
let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    count++;
  }
}
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
///6
let frequency = {};
for (let i = 0; i < arr.length; i++) {
  if (frequency[arr[i]]) {
    frequency[arr[i]]++;
  } else {
    frequency[arr[i]] = 1;
  }
}

let sortedNumbers = Object.keys(frequency).sort((a, b) => frequency[a] - frequency[b]);
/// 7

let max = 0;
let maxCount = 0;

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
    }
  }
  if (count > maxCount) {
    maxCount = count;
    max = arr[i];
  }
}
/// 8
let randomNum = Math.floor(Math.random() * 10) + 1;

console.log("Təqribi rəqəm: " + randomNum);

if (arr.indexOf(randomNum) === -1) {
  console.log(randomNum + " arrydə yoxdu");
} else {
  console.log(randomNum + " arrydə var");
}
/// 9
let myName = "Azar";

let charCount = myName.length;

console.log("Adınızdaki herf sayısı: " + charCount);

if (arr.indexOf(charCount) === -1) {
  console.log(charCount + " arryde yoxdu");
} else {
  console.log(charCount + " arrayde var");
}
///10

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 2) {
    console.log("Bölümmədən qalığı 2 olan rəqəm: " + arr[i]);
    console.log("Indexi: " + i);
    break;
  }
}
///11
let maxArr = Math.max(...arr);

console.log("En böyük rəqəm: " + maxArr);
console.log("Indexi: " + arr.indexOf(maxArr));
/////12
let indexes = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    indexes.push(i);
  }
}
console.log("4 rəqəminin indexləri: " + indexes);
/////13
let fiveIndex = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    fiveIndex.push(i);
  }
}

console.log("5 rəqəminin ən böyük indexi: " + Math.max(...fiveIndex));
console.log("5 rəqəminin ən kiçin indexi: " + Math.min(...fiveIndex));
/////14

let newArr = arr.filter(num => num > 2);

let diff = arr.length - newArr.length;

console.log("Yeni Arrey: ", newArr);
console.log("Uzunluqları fərqi: ", diff);
/////15
let sevenIndexes = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 7) {
    sevenIndexes.push(i);
  }
}
/////////////////// PART 2 ////////////////////////
let arr2 = [
  {
    name:'test',
    key:1
  },
  {
    name:'task',
    key:2
  },
  {
    name:'tanqo',
    key:3
  },
  {
    name:'like',
    key:4
  },
  {
    name:'task',
    key:5
  },
  {
    name:'trust',
    key:6
  },
  {
    name:'test',
    key:7
  },
  {
    name:'last',
    key:8
  },
  {
    name:'tanqo',
    key:9
  },
  {
    name:'elephant',
    key:10
  },
  {
    name:'love',
    key:11
  },
  {
    name:'small',
    key:12
  },
  {
    name:'little',
    key:13
  },
]
let newArray2 = arr2.filter(obj => obj.name.startsWith('t'));
let result = arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t'));
console.log(`t hərifi ilə başlayıb t hərifi ilə bitən obyektlərin sayı  ${result.length}`)
let sum2 = result.reduce((total, obj) => total + obj.key, 0);
//////////20
let res = arr2.reduce((acc, obj) => {
  if (obj.name.length > acc.name.length) {
    acc = obj;
  }
  return acc;
}, arr2[0]);
////// 21 
let longestNameIndex = -1;
let longestNameLength = 0;

arr2.forEach((obj, index) => {
  if (obj.name.length > longestNameLength) {
    longestNameLength = obj.name.length;
    longestNameIndex = index;
  }
});
let res2 = longestNameIndex * longestNameIndex;
///////22
let newArr4 = arr2.filter(obj => obj.name.length === 4);
///////23
let largestKeyIndex = -1;
let largestKeyValue = -1;

arr2.forEach((obj, index) => {
  if (obj.key > largestKeyValue) {
    largestKeyValue = obj.key;
    largestKeyIndex = index;
  }
});
let longKey = arr2[largestKeyIndex].name;
///// 24
let arrL = [];
arr2.forEach((obj, index) => {
  if (obj.name.split('').filter(x => x === 'L').length === 2) {
    arrL.push(index);
  }
});
console.log(arrL);
console.log(`En böyük key-i olan obyektin adı ${longKey}`);
console.log(`namenin uzunlugu 4 olan obyektler` ,newArr4)
console.log(`Key kvadrat ${res2}`);
console.log(`name-i en uzun olan obyektin key-i ${res.key}`)
console.log(`t hərifi ilə başlayıb t hərifi ilə bitən obyektlərin keylərin cəmi ${sum2}`)
console.log(newArray2);
console.log("7 rəqəminin indexləri: ", sevenIndexes);
console.log("Ən böyük rəqəm " + max);
console.log(max + " rəqəmi " + maxCount + " dəfə təkrarlandı");
console.log(sortedNumbers.map(x => parseInt(x)));
console.log(sum);
console.log(count);
 ///// 26
 let enterPoint = +prompt("Giriş balınızı qeyd edin")
let examPoint = +prompt("Imtahanda Topladığınız bal")
let totalPoint = examPoint+enterPoint
switch(true){
    case examPoint<16 :
    alert("Giriş balınız azdır Kəsilmisiniz")
    break;
    case totalPoint>51 && examPoint>16 && totalPoint > 90 && totalPoint <= 100:
    alert(`Təbriklər imtahan balınız ${totalPoint} və A almısınız`)
    break;
    case totalPoint>51 && examPoint>16 && totalPoint > 80 && totalPoint <= 90:
    alert(`Təbriklər imtahan balınız ${totalPoint} və B almısınız`)
    break;
    case totalPoint>51 && examPoint>16 && totalPoint > 70 && totalPoint <= 80:
    alert(`Təbriklər imtahan balınız ${totalPoint} və C almısınız`)
    break;
    case totalPoint>51 && examPoint>16 && totalPoint > 60 && totalPoint <= 70:
    alert(`Təbriklər imtahan balınız ${totalPoint} və D almısınız`)
    break;
    case totalPoint>51 && examPoint>16 && totalPoint > 50 && totalPoint <= 60:
    alert(`Təbriklər imtahan balınız ${totalPoint} və E almısınız`)
    break;
    default:
        alert("Kəsilmisiniz")
}