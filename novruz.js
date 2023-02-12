//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR

// full name numunesi
// let fullName = 'Murad Nərimanlı Tərlan'

//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin

// let fullName = 'Novruz Şəfiyev Elçin'

// let arr = fullName.split('')

// console.log(arr)
// Done

//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin

// let fullName = "Novruz Şəfiyev Elçin";

// let second = fullName.split("").slice(7, 15);

// let first = fullName.split("").slice(0, 7);

// let third = fullName.split("").slice(15);

// let changedArr = [second + " " + first + " " + third];

// console.log(str);
// Done

//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin

// let fullName = "Novruz Şəfiyev Elçin";

// let second = fullName.split("").slice(7, 15);

// let first = fullName.split("").slice(0, 7);

// let third = fullName.split("").slice(15);

// let changedArr = [second + " " + first + " " + third];

// let str = changedArr.toString();

// console.log(str);

// Done

let arr = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....
//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

// let target = 1;

// let counter = 0;

// for (number of arr) {

//   if (number == target) {

//     counter++;

//   }
// }

// console.log(counter);

// NotDone - target 5 olmali idi

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

// let sum = 0;

// arr.map((x) => (sum += x));

// console.log(sum);
// Done


//6) arrayda tekrar olunan reqemleri artan sira ile duzun

let repeatingNumbers = [];
for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i], i + 1) !== -1) {
    repeatingNumbers.push(arr[i]);
  }
}
repeatingNumbers = Array.from(new Set(repeatingNumbers));
repeatingNumbers.sort((a, b) => a - b);
console.log(repeatingNumbers);
// Done 
// Note - DELI KIMIIIII en qeweyin sen yazibsan ama bilremki copy pastedi :D

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin

// let bigNum = Math.max(...arr);

// let count = 0;

// for (let num of arr) {
//   if (num === bigNum) {
//     count++;
//   }
// }

// console.log(count);
// Done

//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin

// let randomNum = Math.floor(Math.random() * 10) + 1;

// let check = arr.includes(randomNum);

// console.log(randomNum);
// console.log(check);
// Done

//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var

// let name = "Novruz";

// let check = arr.includes(name.length);

// console.log(check);
// Done

//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

// const findDivided = arr.find(num => num % 3 === 2);
// console.log(findDivided);

// console.log(arr.indexOf(findDivided))
// Done

//11) arraydaki en boyuk reqemin ilk indexini tapin

//  let bigNum = Math.max(...arr)

//  console.log(arr.indexOf(bigNum))

// Done

//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

// let findİndex = [];
// arr.forEach((element, index) => {
//   if (element === 4) {
//     findİndex.push(index);
//   }
// });
// console.log(findİndex);

// Done


//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

// let minIndex = -1;
// let maxIndex = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 5) {
//     if (minIndex === -1) {
//       minIndex = i;
//     }
//     maxIndex = i;
//   }
// }

// console.log(minIndex);
// console.log(maxIndex);
// Done
// Note - maragli yoldu... ama javascript Lastindexof ve indexof deye birsheyler cixarib :D pis deil onlari da yoxla 



//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

// let arr2 = arr.filter((element) => element > 2);

// console.log(arr.length - arr2.length);
// Done

//15) 7 reqeminin indexleri cemini tapin.

// let sum = 0;
// arr.forEach((element, index) => {
//   if (element === 8) {
//     sum += index;
//   }
// });
// console.log(sum);
// Done

/////////////////////////////////////////////////////

// let arr2 = [
//   {
//     name: "test",
//     key: 1,
//   },
//   {
//     name: "task",
//     key: 2,
//   },
//   {
//     name: "tanqo",
//     key: 3,
//   },
//   {
//     name: "like",
//     key: 4,
//   },
//   {
//     name: "task",
//     key: 5,
//   },
//   {
//     name: "trust",
//     key: 6,
//   },
//   {
//     name: "test",
//     key: 7,
//   },
//   {
//     name: "last",
//     key: 8,
//   },
//   {
//     name: "tanqo",
//     key: 9,
//   },
//   {
//     name: "elephant",
//     key: 10,
//   },
//   {
//     name: "love",
//     key: 11,
//   },
//   {
//     name: "small",
//     key: 12,
//   },
//   {
//     name: "little",
//     key: 13,
//   },
// ];

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

// let filteredArray = arr2.filter((obj) => obj.name.startsWith("t"));
// console.log(filteredArray);
// Done

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

// let filteredArray = arr2.filter(
//   (obj) => obj.name.startsWith("t") && obj.name.endsWith("t")
// );
// let numberOfObjects = filteredArray.length;
// console.log(numberOfObjects);
// Done

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// let sum = arr2
//   .filter((obj) => obj.name.startsWith("t") && obj.name.endsWith("t"))
//   .reduce((acc, obj) => acc + obj.key, 0);
// console.log(sum);
// Done 
// Note - Sevdim bunu :D

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// let updatedArray = arr2.map((obj) => {
//   if (obj.name.endsWith("e")) {
//     return { ...obj, name: "SuperDev" };
//   } else {
//     return obj;
//   }
// });
// console.log(updatedArray);
// Done


// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

// function maxlenght(arr) {
//   let longestName = '';
//   let longestNameKey = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name.length > longestName.length) {
//       longestName = arr[i].name;
//       longestNameKey = i;
//     }
//   }
//   return arr[longestNameKey].key;
// }
// let val = maxlenght(arr2);
// console.log(longestNameKey);
// Done

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// let longestName = "";
// let longestNameIndex;

// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i].name.length > longestName.length) {
//     longestName = arr2[i].name;
//     longestNameIndex = i;
//   }
// }

// console.log(longestNameIndex * longestNameIndex);
// Done

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

// let lengthFour = arr2.filter((obj) => obj.name.length === 4);
// console.log(lengthFour);

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

// let maxKey = 0;
// let maxKeyName = "";

// arr2.forEach(function (obj) {
//   if (obj.key > maxKey) {
//     maxKey = obj.key;
//     maxKeyName = obj.name;
//   }
// });

// console.log(maxKeyName);
// Done

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.

// let findİndex = [];
// arr2.forEach((item, index) => {
//   if (item.name.toUpperCase().split("L").length - 1 === 2) {
//     findİndex.push(index);
//   }
// });

// console.log(findİndex);
// Done

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.

// let filteredArr = arr2.filter(
//   (obj) =>
//     obj.name.includes("t") &&
//     obj.name.indexOf("t") !== obj.name.lastIndexOf("t")
// );
// let keys = filteredArr.map((obj) => obj.key);
// console.log(keys);
// Done

// 26 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.

// let sum = arr2.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.key,
//   0
// );

// console.log(sum);
// Done

// 27 Xaliqenin taski :D
////////////////////////////////
// Dersde edilen switch case taskina esasen artiq girish qiymetleri
// tekce pointden ibaret deil
// exampoint - imtahan bali
// startPoint - imtahana girish bali
// olaraq yerleshdireceksiz
// onceki shertler yerinde qalir sadece eger girish bali 17 den ashagi olarsa
// kesilmek case -ine daxil olsun

// let deyer = 64;

// let examPoint = 34;

// let startPoint = 30;

// switch (true) {
//   case deyer >= 91 && deyer <= 100:
//     console.log("A");
//     if (examPoint >= 34 && startPoint >= 17) {
//       console.log("Imtahani kecdiniz");
//     } else {
//       console.log("Kesildin");
//     }
//     break;
//   case deyer >= 80 && deyer <= 90:
//     console.log("B");
//     if (examPoint >= 34 && startPoint >= 17) {
//       console.log("Imtahani kecdiniz");
//     } else {
//       console.log("Kesildin");
//     }
//     break;
//   case deyer >= 70 && deyer <= 79:
//     console.log("C");
//     if (examPoint >= 34 && startPoint >= 17) {
//       console.log("Imtahani kecdiniz");
//     } else {
//       console.log("Kesildin");
//     }
//     break;
//   case deyer >= 60 && deyer <= 69:
//     console.log("D");
//     if (examPoint >= 34 && startPoint >= 17) {
//       console.log("Imtahani kecdiniz");
//     } else {
//       console.log("Kesildin");
//     }
//     break;
//   case deyer >= 50 && deyer <= 59:
//     console.log("E");
//     if (examPoint >= 34 && startPoint >= 17) {
//       console.log("Imtahani kecdiniz");
//     } else {
//       console.log("Kesildin");
//     }
//     break;
//   case deyer <= 50:
//     console.log("Kesilmisem");
//     break;
// }
// Done