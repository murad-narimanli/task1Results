// 1. Ad soyad ata adinizi butov sekilde goturun ve array sheklinde herflerine ayirin
// let fullName = 'Güllü Hüseynova Rövşən'
// let removeSpaces = fullName.replaceAll(' ','')
// let lettersArr = delSpaces.split('')
// console.log(lettersArr) 
// Done

// 2.Herflere ayrilmish arrayde soyadinizi adinizin onune keciren alqoritm yazin
// let fullName = 'Güllü Hüseynova Rövşən'
// let removeSpaces = fullName.replaceAll(" ", "");
// let lettersArr = removeSpaces.split("");
// let surname = lettersArr.splice(5,9)
// let firstSurnameArr = surname.concat(lettersArr)
// console.log(firstSurnameArr)

// Done
// Note -  Hell edilib ama yeniden stringe cevrilmeyib array formasinda qalib


// 3.Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin
// let fullName = "Güllü Hüseynova Rövşən";
// let removeSpaces = fullName.replaceAll(" ", "");
// let lettersArr = removeSpaces.split("");
// let surname = lettersArr.splice(5, 9);
// let firstSurnameArr = surname.concat(lettersArr);
// console.log(firstSurnameArr);
// let newFullName = firstSurnameArr.join("");
// console.log(newFullName);

// NotDone
// Note: Ilk array deyishir yeniden yoxla


// 4.Yuxaridaki arrayde 5 reqeminin nece defe tekrarlandigini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let count = arr.filter((num) => num === 5).length;
// console.log(count);
// Done - nice way

// 5. Yuxaridaki arraydeki butun reqemlerin cemini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let sum = 0;
// arr.forEach((num) => (sum += num));
// console.log({ sum });
// Done

// 6.Arrayde tekrar olunan reqemleri artan sira ile duzun
// // first way
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let withoutDuplicates = Array.from(new Set(arr));
// console.log(withoutDuplicates.sort());
// // second way
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let sortedArr = arr.sort();
// let result = [];
// for (let i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] != result[result.length - 1]) {
//         result.push(sortedArr[i]);
//     }
// }
// console.log(result);

// Done

// 7. Arraydeki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// var largest = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] >= largest) {
//         largest = arr[i];
//     }
// }
// console.log(largest);
// let count = 0;
// arr.forEach((num) => {
//     if (num === largest) {
//         count += 1;
//     }
// });
// console.log(count);
// Done


// 8. Random 1den 10a qeder reqem generate edin ve sonra arrayde hemin reqemin olub olmamasini yoxlayin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let number = Math.floor(Math.random() * 9) + 1;
// console.log(number);
// console.log(arr.includes(number));
// Done

// 9.Adinizdaki herflerin sayini tapin ve hemin sayin arrayde olub olmamasini yoxlayin.
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let myName = "Güllü";
// let letterCounts = myName.length;
// console.log(letterCounts);
// console.log(arr.includes(letterCounts));
// Done

// 10.Arraydeki ilk 3e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydeki indexini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let firstNum = arr.find((num) => num % 3 == 2);
// console.log(firstNum);
// let index = arr.indexOf(firstNum);
// console.log({ index });
// Done

// 11.Arraydeki en boyuk reqemin ilk indexini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let largest = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// console.log(largest);
// console.log(arr.indexOf(largest));
// Done



// 12. 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let numberFourBox = [];
// let index = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 4) {
//         index.push(i);
//     }
// }
// console.log(index);
// Done

// 13. 5 reqeminin arraydeki en boyuk ve en kicik indexlerini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let indexArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 5) {
//         indexArr.push(i);
//     }
// }
// console.log(indexArr[0], indexArr[indexArr.length - 1]);
// console.log(index);
// Done


// 14."arr" arrayinden reqemleri 2den boyuk olan yeni array yaradin ve alinmish arrayle "arr" arrayinin uzunluqlari ferqini hesablayin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 2) {
//         newArr.push(arr[i]);
//     }
// }
// let lengthDiffer = arr.length - newArr.length;
// console.log(newArr);
// console.log({ lengthDiffer });
// Done


// 15. 7 reqeminin indexleri cemini tapin
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
// let sevenNumsIndex = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 7) {
//         sevenNumsIndex.push(i);
//     }
// }
// console.log(sevenNumsIndex);
// // first way
// let totalNum = 0;
// sevenNumsIndex.forEach((num) => (totalNum += num));
// console.log(totalNum);
// // second way
// let totalNum = sevenNumsIndex.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(totalNum);
// Done

// 16.arr2'de "name"i "t" herfi ile baslayan obyektleri yeni array'e yigin
// let arr2 = [
//     { name: "test", key: 1 },
//     { name: "task", key: 2 },
//     { name: "tanqo", key: 3 },
//     { name: "like", key: 4 },
//     { name: "task", key: 5 },
//     { name: "trust", key: 6 },
//     { name: "test", key: 7 },
//     { name: "last", key: 8 },
//     { name: "tanqo", key: 9 },
//     { name: "elephant", key: 10 },
//     { name: "love", key: 11 },
//     { name: "small", key: 12 },
//     { name: "little", key: 13 },
// ];
// let newArr = [];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name[0] == "t") {
//         newArr.push(arr2[i]);
//     }
// }
// console.log(newArr);
// Done
// Note startsWith  kecmishik


// 17. arr2'de "name"i "t" herfi ile baslayib "t" herfi ile biten obyektlerin sayini tapin
// let arr2 = [
//     { name: "test", key: 1 },
//     { name: "task", key: 2 },
//     { name: "tanqo", key: 3 },
//     { name: "like", key: 4 },
//     { name: "task", key: 5 },
//     { name: "trust", key: 6 },
//     { name: "test", key: 7 },
//     { name: "last", key: 8 },
//     { name: "tanqo", key: 9 },
//     { name: "elephant", key: 10 },
//     { name: "love", key: 11 },
//     { name: "small", key: 12 },
//     { name: "little", key: 13 },
// ];
// let newArr = [];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name[0] == "t" && arr2[i].name.charAt(arr2[i].name.length - 1) == "t") {
//         newArr.push(arr2[i]);
//     }
// }
// console.log(newArr);
// let count = 0;
// count += newArr.length;
// console.log({ count });
// Done


// 18. arr2 de "name"i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"lerinin cemini tapin
// let arr2 = [
//     { name: "test", key: 1 },
//     { name: "task", key: 2 },
//     { name: "tanqo", key: 3 },
//     { name: "like", key: 4 },
//     { name: "task", key: 5 },
//     { name: "trust", key: 6 },
//     { name: "test", key: 7 },
//     { name: "last", key: 8 },
//     { name: "tanqo", key: 9 },
//     { name: "elephant", key: 10 },
//     { name: "love", key: 11 },
//     { name: "small", key: 12 },
//     { name: "little", key: 13 },
// ];
// let newArr = [];
// arr2.forEach((obj) => {
//     if (obj.name[0] == "t" && obj.name.charAt(obj.name.length - 1) == "t") {
//         newArr.push(obj);
//     }
// });
// console.log(newArr);
// let keysSum = 0;
// newArr.forEach((obj) => (keysSum += obj.key));
// console.log({ keysSum });
// Done


// 19. arr2de "name"i "e" herfi ile biten obyektlerdeki name-in deyerini "SuperDev" sozu ile evezleyin
// let arr2 = [
//     { name: "test", key: 1 },
//     { name: "task", key: 2 },
//     { name: "tanqo", key: 3 },
//     { name: "like", key: 4 },
//     { name: "task", key: 5 },
//     { name: "trust", key: 6 },
//     { name: "test", key: 7 },
//     { name: "last", key: 8 },
//     { name: "tanqo", key: 9 },
//     { name: "elephant", key: 10 },
//     { name: "love", key: 11 },
//     { name: "small", key: 12 },
//     { name: "little", key: 13 },
// ];
// let newArr = [];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.charAt(arr2[i].name.length - 1) == "e") {
//         newArr.push(arr2[i]);
//     }
// }
// for (let i = 0; i < newArr.length; i++) {
//     newArr[i].name = "SuperDev";
// }
// console.log(newArr);

// Done 
// note: console.log(arr2) yazanda Superdev yazildigi gornur yeni arraya ehtiyac yox idi


// 20. arr2de "name"i en uzun olan obyektin key-ini tapin
// let arr2 = [
//     { name: "test", key: 1 },
//     { name: "task", key: 2 },
//     { name: "tanqo", key: 3 },
//     { name: "like", key: 4 },
//     { name: "task", key: 5 },
//     { name: "trust", key: 6 },
//     { name: "test", key: 7 },
//     { name: "last", key: 8 },
//     { name: "tanqo", key: 9 },
//     { name: "elephant", key: 10 },
//     { name: "love", key: 11 },
//     { name: "small", key: 12 },
//     { name: "little", key: 13 },
// ];
// let maxObj = { name: "", key: 0 };
// arr2.forEach((obj) => {
//     if (obj.name.length > maxObj.name.length) {
//         maxObj = obj;
//     }
// });
// console.log(maxObj);

// Done
// Note: maxObj.key yazsaydin shert daha yaxsi odenirdi ama okdur

// 21. arr2de "name"i en uzun olan obyektin indexin kvadratini hesablayin
// let arr2 = [
//     { name: "test", key: 1 },
//     { name: "task", key: 2 },
//     { name: "tanqo", key: 3 },
//     { name: "like", key: 4 },
//     { name: "task", key: 5 },
//     { name: "trust", key: 6 },
//     { name: "test", key: 7 },
//     { name: "last", key: 8 },
//     { name: "tanqo", key: 9 },
//     { name: "elephant", key: 10 },
//     { name: "love", key: 11 },
//     { name: "small", key: 12 },
//     { name: "little", key: 13 },
// ];
// let longestNameObj = { name: "", key: 0 };
// arr2.forEach((obj) => {
//     if (obj.name.length > longestNameObj.name.length) {
//         longestNameObj = obj;
//     }
// });
// let index = longestNameObj.key - 1;
// console.log(longestNameObj);
// console.log(index ** 2);

//Done 
//Note: Kvadarata yukseltme usulun maraqlidir Math ile de ede bilerdin

// 22. arr2de "name"inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin
// let arr2 = [
//     { name: "test", key: 1 },
//     { name: "task", key: 2 },
//     { name: "tanqo", key: 3 },
//     { name: "like", key: 4 },
//     { name: "task", key: 5 },
//     { name: "trust", key: 6 },
//     { name: "test", key: 7 },
//     { name: "last", key: 8 },
//     { name: "tanqo", key: 9 },
//     { name: "elephant", key: 10 },
//     { name: "love", key: 11 },
//     { name: "small", key: 12 },
//     { name: "little", key: 13 },
// ];
// let newArr = [];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.length == 4) {
//         newArr.push(arr2[i]);
//     }
// }
// console.log(newArr);

//Done

// 23. arr2de en boyuk "key"i olan obyektin "name"ini tapin
// let arr2 = [
//     { name: "test", key: 1 },
//     { name: "task", key: 2 },
//     { name: "tanqo", key: 3 },
//     { name: "like", key: 4 },
//     { name: "task", key: 5 },
//     { name: "trust", key: 6 },
//     { name: "test", key: 7 },
//     { name: "last", key: 8 },
//     { name: "tanqo", key: 9 },
//     { name: "elephant", key: 10 },
//     { name: "love", key: 11 },
//     { name: "small", key: 12 },
//     { name: "little", key: 13 },
// ];
// let max = Math.max(...arr2.map((obj) => obj.key));
// let result = arr2.filter((num) => num.key === max);
// console.log(result[0].name);
//Done

// 24. arr2de terkibinde 2 "L" herfi olan obyektlerin indexlerini tapin
// let arr2 = [
//     { name: "test", key: 1 },
//     { name: "task", key: 2 },
//     { name: "tanqo", key: 3 },
//     { name: "like", key: 4 },
//     { name: "task", key: 5 },
//     { name: "trust", key: 6 },
//     { name: "test", key: 7 },
//     { name: "last", key: 8 },
//     { name: "tanqo", key: 9 },
//     { name: "elephant", key: 10 },
//     { name: "love", key: 11 },
//     { name: "small", key: 12 },
//     { name: "little", key: 13 },
// ];
// let index = [];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.includes("ll")) {
//         index.push(i);
//     }
// }
// console.log(index);
// Done 

// 25.arr2de terkibinde 2 "t" herfi olan obyektlerin keylerini tapin
// let arr2 = [
//     { name: "test", key: 1 },
//     { name: "task", key: 2 },
//     { name: "tanqo", key: 3 },
//     { name: "like", key: 4 },
//     { name: "task", key: 5 },
//     { name: "trust", key: 6 },
//     { name: "test", key: 7 },
//     { name: "last", key: 8 },
//     { name: "tanqo", key: 9 },
//     { name: "elephant", key: 10 },
//     { name: "love", key: 11 },
//     { name: "small", key: 12 },
//     { name: "little", key: 13 },
// ];
// let key = [];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.includes("tt")) {
//         key.push(arr2[i].key);
//     }
// }
// console.log(key);
// Done 


// 26. random----
// let arr2 = [
//     { name: "test", key: 1 },
//     { name: "task", key: 2 },
//     { name: "tanqo", key: 3 },
//     { name: "like", key: 4 },
//     { name: "task", key: 5 },
//     { name: "trust", key: 6 },
//     { name: "test", key: 7 },
//     { name: "last", key: 8 },
//     { name: "tanqo", key: 9 },
//     { name: "elephant", key: 10 },
//     { name: "love", key: 11 },
//     { name: "small", key: 12 },
//     { name: "little", key: 13 },
// ];
// setTimeout(() => {
//     let newName = [];
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr2[i].key % 2 == 0) {
//             arr2[i].name = "Peace";
//             newName.push(arr2[i]);
//             console.log(newName);
//         }
//     }
// }, 1000);
// Done 


// 27. Xaliqenin taski)
// let point = 81;
// let exampoint = 51;
// let startPoint = 15;
// switch (true) {
//     case startPoint < 17:
//         console.log("F");
//         break;
//     case point >= 91:
//         console.log("A");
//         break;
//     case point >= 81:
//         console.log("B");
//         break;
//     case point >= 71:
//         console.log("C");
//         break;
//     case point >= 61:
//         console.log("D");
//         break;
//     case point >= 51:
//         console.log("E");
//         break;
//     case point < 51:
//         console.log("F");
//         break;
//     default:
//         console.log("X");
//         break;
// }

// Done 
