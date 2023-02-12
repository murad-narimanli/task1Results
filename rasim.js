
//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR

// full name numunesi
let fullName = 'Rasim Ismayilov Sattar'

//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin

// splitName = fullName.split('')
// console.log(splitName);
// Done

//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin

// VERSION 1 <-----------------
// splitName = fullName.split('')
// changedName = [splitName[6], splitName[7], splitName[8], splitName[9], splitName[10], splitName[11], splitName[12], splitName[13], splitName[14], splitName[5], splitName[0], splitName[1], splitName[2], splitName[3], splitName[4], splitName[15], splitName[16], splitName[17], splitName[18], splitName[19], splitName[20], splitName[21]]
// console.log(changedName);
//
//// VERSION 2 <-----------------
// let splitted = fullName.split('')
// let name = []
// let last = []
// let father = []
// for(let i = 0; i<splitted.length; i++){
//   if(i<5){
//     name.push(splitted[i])
//   }
//   if(i>5 && i<15){
//     last.push(splitted[i])
//   }
//   if (i>15){
//     father.push(splitted[i])
//   }
// }
// let fullname2 = [last, name, father].join(' ').split(', ')
// console.log(fullname2)
// Done

//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin
// let splitted = fullName.split('')
// let name = []
// let last = []
// let father = []
// for(let i = 0; i<splitted.length; i++){
//   if(i<5){
//     name.push(splitted[i])
//   }
//   if(i>5 && i<15){
//     last.push(splitted[i])
//   }
//   if (i>15){
//     father.push(splitted[i])
//   }
// }
// let fullname2 = [last, name, father].join(' ').split(', ')
// newstring = fullname2.toString('')
// console.log(fullname2)
// Done


let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 17, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// let say = 0;
// arr.forEach(element =>{
//   if (element === 5){
//     say++
//   }
// })
// console.log(say);
// Done

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
// let say = 0;
// const sum = arr.reduce(
//   (a, b) => a + b,
// );
// console.log(sum);
// Done

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
// arr.sort(function(a, b) {
//   return a - b;
// });
// console.log(arr);
// Done

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin
// let max = Math.max(...arr);
// let say = 0;
// arr.map(element =>{
//   if (element === max){
//     say++
//   }
// })
// console.log('En boyuk eded: ',max + ' ' + 'Tekrarlanma sayi: ', say);
// Done

//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
// let randomNum = Math.floor(Math.random() * 10) +1;
// a = arr.includes(randomNum)
// console.log(a, randomNum);
// Done

//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var
// let myName = 'Rasim'
// nameLength = myName.length
// checking = arr.includes(nameLength)
// console.log(checking, nameLength);
// Done

//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
// let uceBolunen;
// let uceBoluneninIndexi;
// for(let i = 0; i<= arr.length; i++){
//   if(arr[i] % 3 === 2){
//    uceBolunen =  arr[i]
//    uceBoluneninIndexi = arr.indexOf(uceBolunen)
//   }
// }
// console.log(uceBoluneninIndexi)
// Done

//11) arraydaki en boyuk reqemin ilk indexini tapin
// const ind = arr.reduce((maxIndex, num, i) => num > arr[maxIndex] ? i : maxIndex, 0);
// console.log(ind);
// Done

//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// const ind = [];
// let newIndex = arr.indexOf(4);

// while (newIndex !== -1) {
//   ind.push(newIndex);
//   newIndex = arr.indexOf(4, newIndex + 1);
// }

// console.log(ind);
// Done


//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
// let firstIndex = arr.indexOf(5)
// let lastIndex = arr.lastIndexOf(5)
// console.log(`5-in birinci indeksi ${firstIndex}, Sonuncu indeksi ${lastIndex}`);
// Done


//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

// VERSION 1
// let ind = []
// for (i = 0; i<arr.length; i++){
//   if(arr[i] > 2){
//     ind.push(arr[i])
//   }
// }
// let compare = arr.length - ind.length
// console.log(compare);

// VERSION 2
// let newArr = arr.filter((num)=>{
//   return num > 2
// })
// let compare = arr.length - newArr.length
// console.log(compare);

// VERSION 3
// console.log(arr.length - arr.filter((num)=>{
  // return num > 2
// }).length);
// Done


//15) 7 reqeminin indexleri cemini tapin.
// const Ind = []
// let newIndex = arr.indexOf(7)
//  while (newIndex !== -1){
//   Ind.push(newIndex)
//   newIndex = arr.indexOf(7, newIndex + 1);
//  }
// const sum = Ind.reduce((a, b,)=>{
//   return a + b 
// })
// console.log(sum);
// Done



/////////////////////////////////////////////////////
let arr2 = [
  {
    name: 'test',
    key: 1
  },
  {
    name: 'task',
    key: 2
  },
  {
    name: 'tanqo',
    key: 3
  },
  {
    name: 'like',
    key: 4
  },
  {
    name: 'task',
    key: 5
  },
  {
    name: 'trust',
    key: 6
  },
  {
    name: 'test',
    key: 7
  },
  {
    name: 'last',
    key: 8
  },
  {
    name: 'tanqo',
    key: 9
  },
  {
    name: 'elephant',
    key: 10
  },
  {
    name: 'love',
    key: 11
  },
  {
    name: 'small',
    key: 12
  },
  {
    name: 'little',
    key: 13
  },
]


// QEYD Bu tasklarda arr2 istifade edilecekdir

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

// VERSION 1
// let newArr = []
// for (let key of arr2){
//   if (key.name.startsWith('t')){
//     newArr.push(key)
//   }
// }
// console.log(newArr);

// VERSION 2
// let newArr = arr2.filter((element)=>{
//   return element.name.startsWith('t')
// })
// console.log(newArr);
// Done


// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// let newArr = arr2.filter((element)=>{
//   return element.name.startsWith('t') && element.name.endsWith('t')
// }).length
// console.log(newArr);
// Done


// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// let newArr = arr2.filter((element)=>{
//   return element.name.startsWith('t') && element.name.endsWith('t')
// })

// let arrayForSum = []
// for(i = 0; i < newArr.length; i++){
//  arrayForSum.push(newArr[i].key) 
// }
// let sum = arrayForSum.reduce((a,b)=>{
//   return a+b
// })
// console.log(sum);
// Done



// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// let newArr = arr2.filter((element)=>{
//     return element.name.endsWith('e')
// })
// newArr.forEach((element)=>{
//   return element.name = 'superdev'
// })
// console.log(newArr);
// Done


// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// let maxNumber = Math.max(...arr2.map((element)=>{
//   return element.name.length
// }));
// let maxLenght = arr2.find((element)=>{
//   return element.name.length === maxNumber
// })
// console.log(maxLenght);
// Done



// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// let maxLengthIndex = arr2.reduce((maxIndex, obj, index) => {
//   if (obj.name.length > arr2[maxIndex].name.length) {
//     return index;
//   }
//   return maxIndex;
// }, 0);

// let netice = maxLengthIndex ** 2;
// console.log(netice);
// Done


// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// let newArr = arr2.filter(obj => obj.name.length === 4).map(obj => obj);
// console.log(newArr);
// Done
// Note .map() dan sonraki hisseye ehtiyac yoxdur mence


// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// let newName = arr2.reduce(function(acc, curr) {
//   if (curr.key > acc.key) {
//     acc = curr;
//   }
//   return acc;
// }, {key: 0});

// console.log(newName.name);
// Done


// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// let index = [];
// arr2.forEach((item, i) => {
//   let count = 0;
//   for (let j = 0; j < item.name.length; j++) {
//     if (item.name[j] === 'l') {
//       count++;
//     }
//   }
//   if (count >= 2) {
//     index.push(i);
//   }
// });
// console.log(index);
// Done


// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
// let foundedKeys = [];
// arr2.forEach((item, i) => {
//   let count = 0;
//   for (let j = 0; j < item.name.length; j++) {
//     if (item.name[j] === 't') {
//       count++;
//     }
//   }
//   if (count >= 2) {
//     foundedKeys.push(item.key);
//   }
// });
// console.log(foundedKeys);
// Done


// 26 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.
// NotDone 
// Kreativ ol biraz

// 27 Xaliqenin taski :D
////////////////////////////////
// Dersde edilen switch case taskina esasen artiq girish qiymetleri
// tekce pointden ibaret deil
// exampoint - imtahan bali
// startPoint - imtahana girish bali
// olaraq yerleshdireceksiz
// onceki shertler yerinde qalir sadece eger girish bali 17 den ashagi olarsa
// kesilmek case -ine daxil olsun

// let point = 95
// let exampoint = 34
// let startPoint = 17
// switch (true) {
//   case point >= 91 && point <= 100:
//     console.log('A');
//     break;
//   case point >= 81 && point <= 90:
//     console.log('B');
//     break;
//   case point >= 71 && point <= 80:
//     console.log('C');
//     break;
//   case point >= 61 && point <= 70:
//     console.log('D');
//     break;
//   case point >= 51 && point <= 60:
//     console.log('E');
//     break;
//   case startPoint >= 17 && exampoint >=34:
//     console.log('Imtahani kecdiniz');
//     break;
//   default:
//     console.log('Imtahandan kesildiniz');
//     break;
// }

// NotDone Biraz mentiq xetasi var