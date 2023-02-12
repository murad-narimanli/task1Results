//1) Ad Soyad Ata adinizi butov shekilde goturun ve array sheklinde herflerine ayirin:

// let fullName = 'Namazaliyev Emil Rovshen';
// let arrBox = fullName.split('');
// console.log(arrBox);
// Done

//------- ASHAQDAKI KOD DINAMIKDIR-------HANSI SAA YAZSAZ ISHLEYECEK-------//

//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin:

// let fullName = 'Namazaliyev Emil Rovshen';
// let arrBox = fullName.split(''); 
// ['N', 'a', 'm', 'a', 'z', 'a', 'l', 'i', 'y', 'e', 'v', ' ', 'E', 'm', 'i', 'l', ' ', 'R', 'o', 'v', 's', 'h', 'e', 'n'] for see

// let arrFullname = fullName.split(' '); // ['Namazaliyev' 'Emil' 'Rovshen']

// let surname = arrFullname.splice(0, 1); // ['Namazaliyev']
// let name1 = arrFullname.splice(0, 1);   // ['Emil']
// let father = arrFullname.splice(0, 1);  // ['Rovshen']

// let arrSurname = arrBox.slice(0, surname[0].length + 1); // ['N', 'a', 'm', 'a', 'z', 'a', 'l', 'i', 'y', 'e', 'v', ' ']

// let arrDiff = arrBox.slice(surname[0].length + 1);       // ['E', 'm', 'i', 'l', ' ', 'R', 'o', 'v', 's', 'h', 'e', 'n']

// let arrName = arrDiff.slice(0, name1[0].length + 1);     // ['E', 'm', 'i', 'l', ' ']

// let arrFather = arrDiff.slice(name1[0].length + 1);      // ['R', 'o', 'v', 's', 'h', 'e', 'n']

// let arrFinish = arrName.concat(arrSurname, arrFather);
// console.log(arrFinish);
// Done - DRAGON STYLE

//-----------------------------------------------------------------------------------------------

//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin:

// let str = arrFinish.join('');
// console.log(str);        // String
// console.log(arrFinish);  // Last Arr

//-------[4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]-------//
// NotDone - ilk array deyishir 

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin:

// let i = 0;

// let arrNum = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];
// answerFive = arrNum.filter((item)=>{
//   return item == 5 && i++;;
// })

// console.log(i);
// Done
//-----------------------------------------------------------------------------------------------

/* 
  BU TASK CUME GUNUN TASKI IDI. OKAY OLMAGINA BAXMAYARAQ YENE ISHLEDIM VE
  DUZELISHLER ETDIM, ALQORITMI QISA ETDIM VE PUSH ELAVE ETDIM. DINAMIKDIR!
*/

// let fullName = 'Namazaliyev Emil';
// let arrFullname = fullName.split(' ');  // ['Namazaliyev', 'Emil']

// let surname = arrFullname.splice(0, 1); // ['Namazaliyev']
// let name1 = arrFullname.splice(0, 1);   // ['Emil']

// let one = surname[0].slice(0, 1) // 'N'
// let two = name1[0].slice(0, 1)   // 'E'

// let str = [];
// let arrTotal = str.push(one, two)   // arrTotal -> count++
// console.log(str);                   // ['N', 'E']

// setTimeout(() => {
//   localStorage.setItem('arry', JSON.stringify(str));
// }, 4000);

// Done - Okay ela
//-----------------------------------------------------------------------------------------------

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin:
// let arrNum = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];
// let sum = 0;
// arrNum.forEach(element => {
//    sum += element
// });

// console.log(sum);
// Done

//-----------------------------------------------------------------------------------------------

//6) arrayda tekrar olunan reqemleri artan sira ile duzun:

// let arrNum = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];
// let arrSort = arrNum.sort();
// console.log(arrSort)

// Done 
// Note - resultu [
//   1, 1, 2, 2, 2, 2, 2, 2, 2,
//   3, 3, 3, 3, 4, 4, 4, 5, 5,
//   5, 5, 5, 5, 5, 6, 6, 6, 6,
//   6, 6, 7, 7, 7
// ] - kimi alsan daha yaxsi olardi
//-----------------------------------------------------------------------------------------------
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin:

// let bigNum = 0;
// let i = 0;
// let arrNum = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];

// arrNum.forEach(item => {
//   if(item > bigNum) {      // 4 > 0 ...circle
//     bigNum = item;         // bigNum = 4 ...circle
//   }
// });

// let bigBox = arrNum.filter((item) => {
//   return item == bigNum && i++;
// })

// console.log(i);
// Done
//-----------------------------------------------------------------------------------------------

//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin:

// let arrNum = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];

// let ranNum = Math.floor(Math.random() * 10 + 1);
// console.log(ranNum);
// let num;

// arrNum.find((item) => {
//   return num = item == ranNum;
// });

// console.log(num);   // true / false
// Done

//-----------------------------------------------------------------------------------------------

//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin. Meselen Murad adinda 5 herf var ve 5 arrayda var:

// let arrNum = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];
// let name1 = 'Emil';

// let answerSearch = arrNum.find((item) => {
//   return item == name1.length;
// });

// if(answerSearch) { 
//   console.log(true);
// } else {
//   console.log(false);
// }
// Done

//-----------------------------------------------------------------------------------------------

//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin:

// let arrNum = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];

// let num = arrNum.find((item) => {
//   if ((item % 3) == 2) {
//     return item;
//   }
// })

// let finishIndex = arrNum.findIndex(i =>{
//   return i == num;
// });

// console.log(finishIndex);
// Done
//-----------------------------------------------------------------------------------------------

//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin:

// let arrNum = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];

// let index = [];
// let num = arrNum.filter((element, i) => {
//   if (element == 4) {
//     index.push(i);      // index
//   }
// })

// console.log(index);
// Done
//-----------------------------------------------------------------------------------------------

//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin:

// let arrNum = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];

// let index = [];
// let num = arrNum.filter((element, i) => {
//   if (element == 5) {
//     index.push(i);     // [1, 4, 6, 8, 16, 23, 26] - index
//   }
// })

// let indexMin = Math.min(...index);
// let indexMax = Math.max(...index);

// console.log(indexMin);     // [1, 4, 6, 8, 16, 23, 26]
// console.log(indexMax);     // [1, 4, 6, 8, 16, 23, 26]
// Done
//-----------------------------------------------------------------------------------------------

//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin:

// let arrNum = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];

// let newArr = arrNum.filter((item) => {
//   return item > 2;
// })

// let sum = arrNum.length - newArr.length;
// console.log(sum);
// Done
//-----------------------------------------------------------------------------------------------

//15) 7 reqeminin indexleri cemini tapin:

// let arrNum = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];
// let index = [];
// let num = arrNum.filter((element, i) => {
//   if (element == 7) {
//     index.push(i);    // [19, 29, 31] - index 
//   }
// })

// let indexSum = index.reduce((total, num) => {
// 	return total + num;
// });

// console.log(indexSum)
// Done
//-----------------------------------------------------------------------------------------------

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin:

// let arrObj = [
//   {
//     name:'test',
//     key:1
//   },
//   {
//     name:'task',
//     key:2
//   },
//   {
//     name:'tanqo',
//     key:3
//   },
//   {
//     name:'like',
//     key:4
//   },
//   {
//     name:'task',
//     key:5
//   },
//   {
//     name:'trust',
//     key:6
//   },
//   {
//     name:'test',
//     key:7
//   },
//   {
//     name:'last',
//     key:8
//   },
//   {
//     name:'tanqo',
//     key:9
//   },
//   {
//     name:'elephant',
//     key:10
//   },
//   {
//     name:'love',
//     key:11
//   },
//   {
//     name:'small',
//     key:12
//   },
//   {
//     name:'little',
//     key:13
//   }
// ]

// let objName = [];

// for (const key of arrObj) {
//   if (key['name'][0] === 't') {
//     objName.push(key)       // name: start T
//   }
// }

// for (const key of objName) {
//   console.log(key);
// }
// Done
//-----------------------------------------------------------------------------------------------

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin:

// let arrObj = [
//   {
//     name:'test',
//     key:1
//   },
//   {
//     name:'task',
//     key:2
//   },
//   {
//     name:'tanqo',
//     key:3
//   },
//   {
//     name:'like',
//     key:4
//   },
//   {
//     name:'task',
//     key:5
//   },
//   {
//     name:'trust',
//     key:6
//   },
//   {
//     name:'test',
//     key:7
//   },
//   {
//     name:'last',
//     key:8
//   },
//   {
//     name:'tanqo',
//     key:9
//   },
//   {
//     name:'elephant',
//     key:10
//   },
//   {
//     name:'love',
//     key:11
//   },
//   {
//     name:'small',
//     key:12
//   },
//   {
//     name:'little',
//     key:13
//   }
// ]

// let objName = [];

// for (const key of arrObj) {
//   if (key['name'][0] === 't' && key.name.slice(-1) === 't') {
//     objName.push(key)       // name: start T end T
//   }
// }

// console.log(objName);
// for (const key of objName) {
//   console.log(key);
// }
// Done
//-----------------------------------------------------------------------------------------------

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin:

// let arrObj = [
//   {
//     name:'test',
//     key:1
//   },
//   {
//     name:'task',
//     key:2
//   },
//   {
//     name:'tanqo',
//     key:3
//   },
//   {
//     name:'like',
//     key:4
//   },
//   {
//     name:'task',
//     key:5
//   },
//   {
//     name:'trust',
//     key:6
//   },
//   {
//     name:'test',
//     key:7
//   },
//   {
//     name:'last',
//     key:8
//   },
//   {
//     name:'tanqo',
//     key:9
//   },
//   {
//     name:'elephant',
//     key:10
//   },
//   {
//     name:'love',
//     key:11
//   },
//   {
//     name:'small',
//     key:12
//   },
//   {
//     name:'little',
//     key:13
//   }
// ]

// let objName = [];

// for (const key of arrObj) {
//   if (key['name'][0] === 't' && key.name.slice(-1) === 't') {
//     objName.push(key)       // name: start T end T
//   }
// }

// let keySum = 0;

// for (const key of objName) {
//   keySum += key.key;
// }

// console.log(keySum);
// Done
//-----------------------------------------------------------------------------------------------

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin:

// let arrObj = [
//   {
//     name:'test',
//     key:1
//   },
//   {
//     name:'task',
//     key:2
//   },
//   {
//     name:'tanqo',
//     key:3
//   },
//   {
//     name:'like',
//     key:4
//   },
//   {
//     name:'task',
//     key:5
//   },
//   {
//     name:'trust',
//     key:6
//   },
//   {
//     name:'test',
//     key:7
//   },
//   {
//     name:'last',
//     key:8
//   },
//   {
//     name:'tanqo',
//     key:9
//   },
//   {
//     name:'elephant',
//     key:10
//   },
//   {
//     name:'love',
//     key:11
//   },
//   {
//     name:'small',
//     key:12
//   },
//   {
//     name:'little',
//     key:13
//   }
// ]

// let objName = [];

// for (const key of arrObj) {
//   if (key.name.slice(-1) === 'e') {
//     key.name = 'SuperDev';
//   }

//   console.log(key);
// }
// Done
//-----------------------------------------------------------------------------------------------

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin:

// let arrObj = [
//   {
//     name:'test',
//     key:1
//   },
//   {
//     name:'task',
//     key:2
//   },
//   {
//     name:'tanqo',
//     key:3
//   },
//   {
//     name:'like',
//     key:4
//   },
//   {
//     name:'task',
//     key:5
//   },
//   {
//     name:'trust',
//     key:6
//   },
//   {
//     name:'test',
//     key:7
//   },
//   {
//     name:'last',
//     key:8
//   },
//   {
//     name:'tanqo',
//     key:9
//   },
//   {
//     name:'elephant',
//     key:10
//   },
//   {
//     name:'love',
//     key:11
//   },
//   {
//     name:'small',
//     key:12
//   },
//   {
//     name:'little',
//     key:13
//   }
// ];


// let longer = 0;


// arrObj.forEach(itemObj => {
//   if(itemObj.name.split('').length > longer) {    // longer name
//     longer = itemObj.name.split('').length;
//   }
// });

// let longerObj = arrObj.filter(itemObj => {
//   return itemObj.name.split('').length === longer;  // if longer -> longerObj
// });

// console.log(longerObj)
// Done
//-----------------------------------------------------------------------------------------------

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin:

// let arrObj = [
//   {
//     name:'test',
//     key:1
//   },
//   {
//     name:'task',
//     key:2
//   },
//   {
//     name:'tanqo',
//     key:3
//   },
//   {
//     name:'like',
//     key:4
//   },
//   {
//     name:'task',
//     key:5
//   },
//   {
//     name:'trust',
//     key:6
//   },
//   {
//     name:'test',
//     key:7
//   },
//   {
//     name:'last',
//     key:8
//   },
//   {
//     name:'tanqo',
//     key:9
//   },
//   {
//     name:'elephant',
//     key:10
//   },
//   {
//     name:'love',
//     key:11
//   },
//   {
//     name:'small',
//     key:12
//   },
//   {
//     name:'little',
//     key:13
//   }
// ];


// let longerNum = 0;
// let longerObj = [];

// arrObj.forEach( itemObj => {
//     if(itemObj.name.split('').length > longerNum) {
//       longerNum = itemObj.name.split('').length;
//     }
// });

// arrObj.forEach((itemObj, i) => {
//   if(itemObj.name.split('').length === longerNum) {
//     longerObj.push(
//     {
//       index: i,
//       name: itemObj.name,
//       key: itemObj.key
//     });
//   }    
// });

// console.log( Math.pow(longerObj[0].index, 2));
// Done 
// Note - arraya push etmemish birbasha obyekte beraber edib de yaza bilerdin ama netice okdur
//-----------------------------------------------------------------------------------------------

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin:

// let arrObj = [
//   {
//     name:'test',
//     key:1
//   },
//   {
//     name:'task',
//     key:2
//   },
//   {
//     name:'tanqo',
//     key:3
//   },
//   {
//     name:'like',
//     key:4
//   },
//   {
//     name:'task',
//     key:5
//   },
//   {
//     name:'trust',
//     key:6
//   },
//   {
//     name:'test',
//     key:7
//   },
//   {
//     name:'last',
//     key:8
//   },
//   {
//     name:'tanqo',
//     key:9
//   },
//   {
//     name:'elephant',
//     key:10
//   },
//   {
//     name:'love',
//     key:11
//   },
//   {
//     name:'small',
//     key:12
//   },
//   {
//     name:'little',
//     key:13
//   }
// ];

// let newArr = [];

// for (const key of arrObj) {
//   if (key['name'].split('').length == 4) {
//     newArr.push(key)
//   }
// }
// console.log(newArr);

// Done 
//-----------------------------------------------------------------------------------------------

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin:

// let arrObj = [
//   {
//     name:'test',
//     key:1
//   },
//   {
//     name:'task',
//     key:2
//   },
//   {
//     name:'tanqo',
//     key:3
//   },
//   {
//     name:'like',
//     key:4
//   },
//   {
//     name:'task',
//     key:5
//   },
//   {
//     name:'trust',
//     key:6
//   },
//   {
//     name:'test',
//     key:7
//   },
//   {
//     name:'last',
//     key:8
//   },
//   {
//     name:'tanqo',
//     key:9
//   },
//   {
//     name:'elephant',
//     key:10
//   },
//   {
//     name:'love',
//     key:11
//   },
//   {
//     name:'small',
//     key:12
//   },
//   {
//     name:'little',
//     key:13
//   }
// ];


// let longerNum = 0;

// arrObj.forEach(itemObj => {
//   if(itemObj.key > longerNum) {
//     longerNum = itemObj.key;
//   }
// });

// let keyBig = arrObj.find(itemObj => {
//   return itemObj.key === longerNum
// });


// console.log(keyBig.name);
// Done
// Note - Ejdahasan :D
//-----------------------------------------------------------------------------------------------

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin:
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin:

// MATCHD A l ve t evez edin. Birinin indeksleri birinin keylerin cavabi chixir 

// let arrObj = [
//   {
//     name:'test',
//     key:1
//   },
//   {
//     name:'task',
//     key:2
//   },
//   {
//     name:'tanqo',
//     key:3
//   },
//   {
//     name:'like',
//     key:4
//   },
//   {
//     name:'task',
//     key:5
//   },
//   {
//     name:'trust',
//     key:6
//   },
//   {
//     name:'test',
//     key:7
//   },
//   {
//     name:'last',
//     key:8
//   },
//   {
//     name:'tanqo',
//     key:9
//   },
//   {
//     name:'elephant',
//     key:10
//   },
//   {
//     name:'love',
//     key:11
//   },
//   {
//     name:'small',
//     key:12
//   },
//   {
//     name:'little',
//     key:13
//   }
// ];

// let boxObj = [];  
// let indexx = [];
// let keys = [];    
// let name1 = [];   

// let boxL = arrObj.forEach((itemObj, i) => {
//   if(itemObj.name.match(/t/gi) && itemObj.name.match(/t/gi).length == 2) {
//     boxObj.push({
//       indeks: i,
//       name: itemObj.name,
//       key: itemObj.key
//     }) 
//   } 
// });


// boxObj.forEach( element => {
//   indexx.push(element.ind);
//   keys.push(element.key);
// });


// console.log(indexx.join());
// console.log(keys.join());
// Done 
// Note - deli kimi
//-----------------------------------------------------------------------------------------------

// Universitet  - tam basha dushmedim

// let point = 95;
// let exampoint = 16;
// let totalpoint = 45;

// switch (true) {
//   case point >= 91 && point <= 100:
//     if (exampoint < 17 && totalpoint > 51) {
//       console.log('failed');
//     }else {
//       console.log('A');
//     }
//   break;
//   


// case point >= 81 && point <= 90:
//   console.log('B');
// break;
// case point >= 71 && point <= 80:
//   console.log('C');
// break;
// case point >= 61 && point <= 70:
//   console.log('D');
// break;
// case point >= 51 && point <= 60:
//   console.log('E');
// break;
// case point <= 50:
//   console.log('FAILED');
// break;
