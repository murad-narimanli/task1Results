//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR

// full name numunesi
//let fullName = 'Murad Nərimanlı Tərlan'


//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin
/*let fullName = 'Xaliqe Ibrahimli Sirac'
let names = fullName.split('');
console.log(names)*/
//Done


//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin

/*let fullName = 'Xaliqe Ibrahimli Sirac';
let firstName = fullName.split('').slice(0, 6);
let middleName = fullName.split('').slice(7, 16);
let lastName = fullName.split('').slice(17);
let newArray =[middleName + " " + firstName + " " + lastName];

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(newArray);*/
//Done

//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin
/*let fullName = 'Xaliqe Ibrahimli Sirac';
let firstName = fullName.split('').slice(0, 6);
let middleName = fullName.split('').slice(7, 16);
let lastName = fullName.split('').slice(17);
let newArray =[middleName + " " + firstName + " " + lastName];
let newString = newArray.toString();

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(newArray);
console.log(newString);*/
//Done

//let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]


// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....


//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
/*let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
let count = arr.filter(element => {
  return element === 5;
}).length;

console.log(count);*/
//Done

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
/*let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]

let sum = 0;

arr.forEach(item => {
    sum += item;
});

console.log(sum);*/
//Done

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
/*let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
let sorted_arr =arr.slice().sort(); 
let results = [];
for (let i = 0; i < sorted_arr.length - 1; i++) {
  if (sorted_arr[i + 1] == sorted_arr[i]) {
    results.push(sorted_arr[i]);
  }
}
console.log(sorted_arr);*/
//Done 
//Note Dragon style codding :D

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin
/*let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
var enboyuk=arr[0]
for(var i=0; i<arr.length; i++){
  if(enboyuk<arr[i]){
          enboyuk=arr[i]
  }
}
console.log(enboyuk);
//Done

var count=0;
for(var item of arr){
  if(item==enboyuk)
  {
      count++;
  }
}
console.log(count);*/
//Done

//8)  Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
/*let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
let generate = Math.floor(Math.random() * 10) + 1;
let numberinclude = arr.includes(generate);
console.log(generate);
console.log(numberinclude);*/
//Done

//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var
/*let name = "Xaliqe"
console.log(name.length);
let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
console.log(arr.includes(name.length));*/
//Done

//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
/*let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
let dividednum = arr.find(num => num%3==2);
console.log(dividednum);
let numindex =arr.indexOf(dividednum);
console.log(numindex);*/
//Done

//11) arraydaki en boyuk reqemin ilk indexini tapin
/*let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
console.log(arr);
let maxval = Math.max(...arr);

let maxindex = arr.indexOf(maxval);

console.log(maxindex);*/
//Done

//12)  4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
/*let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]

for (i = 0; i <= arr.length; i++){
    if (arr[i] === 4){
        console.log(i);
       
    }
}*/
//Done

//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
/*let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
let reqem = 5
let enboyuk = arr.indexOf(reqem);
let enkicik = arr.lastIndexOf(reqem);
console.log( enboyuk); 
console.log( enkicik);*/
//Done

//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
/*let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
let newArray = arr.filter(element => element > 2);

console.log(newArray); 
console.log(arr.length-newArray.length);*/
// Done

//15) 7 reqeminin indexleri cemini tapin.
/*let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
let number = 7
let cem = 0;

while (arr.indexOf(number) !== -1) {
  cem += arr.indexOf(number);
  arr[arr.indexOf(number)] = null;
}

console.log(cem);*/
// Done

/*let arr2 = [
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
]*/


//QEYD Bu tasklarda arr2 istifade edilecekdir


// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
/*let arr2 = [
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
var newArr2 = [];
for(var item of arr2){
  if(item.name[0]=="t")
  newArr2.push(item);
  console.log(newArr2);
 
}*/
// Done


// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
/*let arr2 = [
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
let count = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i].name.startsWith("t") && arr2[i].name.endsWith("t")) {
    count++;
  }
}
console.log(count);*/
// Done

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
/*let arr2 = [
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
let keyfilterArr = arr2.filter(obj => obj.name.startsWith("t") && obj.name.endsWith("t"));
let totalkey = keyfilterArr.reduce((acc, obj) => acc + obj.key, 0);
console.log(totalkey);*/
// Done


// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
/*let arr2 = [
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
for(var item of arr2){
  if(item.name[item.name.length-1]=="e")
  {
    item.name="SuperDev"
  }
}
console.log(arr2);*/
// Done


// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
/*let arr2 = [
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
function maxlenght(arr) {
  let maxName = '';
  let maxNameIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.length > maxName.length) {
      maxName = arr[i].name;
      maxNameIndex = i;
    }
  }

  return arr[maxNameIndex].key;
}

let val = maxlenght(arr2);
console.log(val); */
// Done


// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
/*let arr2 = [
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
function maxlenght(arr) {
  let maxName = '';
  let maxNameIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.length > maxName.length) {
      maxName = arr[i].name;
      maxNameIndex = i;
    }
  }

 return maxNameIndex * maxNameIndex;
}

let val = maxlenght(arr2);
console.log(val); */
// Done


// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
/*let arr2 = [
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
let lengthfourArr = arr2.filter((obj) => obj.name.length === 4);
console.log(lengthfourArr);*/
// Done


// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
/*let arr2 = [
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
let largestKey = 0;
let largestName = "";
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i].key > largestKey) {
    largestKey = arr2[i].key;
    largestName = arr2[i].name;
  }
}
console.log(largestName);*/
// Done


// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
/*let arr2 = [
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
let lIndexes = [];
arr2.forEach((obj) => {
  let count = 0;
  for (let i = 0; i < obj.name.length; i++) {
    if (obj.name[i].toLowerCase() === "l") {
      count++;
    }
    if (count === 2) {
      lIndexes.push(obj.key);
      break;
    }
  }
});
console.log(lIndexes);*/
// Done


// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
/*let arr2 = [
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
let tIndexes = [];
arr2.forEach((obj) => {
  let count = 0;
  for (let i = 0; i < obj.name.length; i++) {
    if (obj.name[i].toLowerCase() === "t") {
      count++;
    }
    if (count === 2) {
      tIndexes.push(obj.key);
      break;
    }
  }
});
console.log(tIndexes);*/
// Done


// 26 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.
/*let arr2 = [
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
let groupedArr = arr2.reduce((acc, obj) => {
  (acc[obj.name] = acc[obj.name] || []).push(obj);
  return acc;
}, {});
console.log(groupedArr);*/
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

/*let point = 55;
let exampoint= 33;
let exampassing = 15;

switch (true) {
 
case (point >= 91 && point <= 100):
    console.log('Your price: A');
    if (exampoint >=17 && exampassing>=34) {
      console.log("Imtahani kecdiniz");
      } else {
      console.log("Imtahani kecmediniz");
      }
    break;
    case (point >= 81 && point <= 90):
      console.log('Your price: B');
      if (exampoint >=17 && exampassing>=34) {
        console.log("Imtahani kecdiniz");
        } else {
        console.log("Imtahani kecmediniz");
        }
      break;
      case (point >= 71 && point <= 80):
        console.log('Your price: C');
        if (exampoint >=17 && exampassing>=34) {
          console.log("Imtahani kecdiniz");
          } else {
          console.log("Imtahani kecmediniz");
          }
        break;
        case (point >= 61 && point <= 70):
          console.log('Your price: D');
          if (exampoint >=17 && exampassing>=34) {
            console.log("Imtahani kecdiniz");
            } else {
            console.log("Imtahani kecmediniz");
            }
          break;
    case (point >= 51 && point <= 60):
    console.log('Your price: E');
    if (exampoint >=17 && exampassing>=34) {
      console.log("Imtahani kecdiniz");
      } else {
      console.log("Imtahani kecmediniz");
      }
    break;
      
   
  }*/
// Done
