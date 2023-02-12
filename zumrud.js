//task1
//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin
let fullName = 'Zümrüd Baxsaliyeva'
let arrs=[]
arrs=fullName.split('')
console.log(arrs)
// Done

//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin
let surname=arrs.splice(7,11)
console.log(surname)
console.log(arrs)
// let newarr=[]
// arr.unshift(surname)
// Done

// //tapsiriq11/////11) arraydaki en boyuk reqemin ilk indexini tapin

let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]
let maxnumber=Math.max(...arr)
let maxnumberindex=arr.indexOf(maxnumber)
console.log("task11",maxnumberindex)
// Done

//task12/////12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

let arr4=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]===4){
arr4.push(i)
console.log(arr4)
    }
}
// tapsiriq5///5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
let sumofNumbers=arr.reduce((x,y)=>x+y);
console.log("task5",sumofNumbers)
//task6///6) arrayda tekrar olunan reqemleri artan sira ile duzun
let numbercount=[]
arr.forEach(number =>numbercount[number]=(numbercount[number] || 0) +1);

console.log(numbercount.sort())
//task 14/////14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

let newarr=[]

for(let i=0;i<arr.length;i++){
if(arr[i]>2){
    newarr.push(arr[i]) 
   console.log("newarr",newarr)
   console.log("arrlength",arr.length)
   console.log("newarr",newarr.length)
   let difference=arr.length-newarr.length
   console.log("difference",difference)
}
}
//task13////13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
let maxindexof5=[]
for(let i=0;i<arr.length;i++){
    if (arr[i]===5) {
        maxindexof5.push(i)
        console.log(maxindexof5)
        let maxValue = Math.max(...maxindexof5);
        let minValue =Math.min(...maxindexof5)
        console.log(maxValue,minValue)
        // *******************************
//task4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
        let repeat5=maxindexof5.length
        console.log("repeat5",repeat5)
    }
    
}
   // *******************************
//task15/////15) 7 reqeminin indexleri cemini tapin.+

let arr7=[]
for(let i=0;i<arr.length;i++){
 if(arr[i]===7){
  arr7.push(i)
  console.log(arr7)
  let sumindexof7=arr7.reduce((x,y)=>x+y)
  console.log(sumindexof7)
 }
}
//task7////7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin
let maxnumarr=[]
let maxnum=Math.max(...arr)
console.log("arraydeki en boyuk eded",maxnum)
for(let i=0;i<arr.length;i++){
if(arr[i]===maxnum){
maxnumarr.push(i)
let repeatmaxnum=maxnumarr.length
console.log("max numbers",repeatmaxnum)
}
}
//task10/////10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
newarrr2=[]
for(let i=0;i<arr.length;i++){
        if(arr[i]%3==2){
      newarrr2.push(i)
      console.log("result",newarrr2[0])
        }
}
//task9/////9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var

let name="Zumrud"
let namelength=name.length
let havenamelength=arr.includes(namelength)
console.log("var",havenamelength)
//task8/////8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
let randomnumber=Math.floor(Math.random()*9+1)
console.log("randomnumber",randomnumber)
let haverandomnumber=arr.includes(randomnumber)
console.log("random eded var",haverandomnumber)

//************* objects tasks


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
//task 16///// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

const startT = (list, start) => {
    return list.filter(obj => {
      const name = obj.name;
      return name[0] === start ;
    });
  };
  
  const filtered = startT(arr2, "t");
  console.log("startT",filtered);

//task18///// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

const filterList = (list, start, end) => {
    return list.filter(obj => {
      const name = obj.name;
      return name[0] === start && name[name.length - 1] === end;
    });
  };
  
  const filtered2 = filterList(arr2, "t", "t");
  console.log("t ile baslayib t ile biten obyektler",filtered2);

//task17////// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
//18ci taskin ardi
console.log("t herfi ile baslayib biten ibyektlerin sayi",filtered2.length)

//task19//// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

const filterList3 = (list, end) => {
    return list.filter(obj => {
      const name = obj.name;
      return name[name.length - 1] === end;
    });
  };
  
  const filtered3 = filterList3(arr2, "e", );
  console.log(" e ile biten obyektler",filtered3);

//   function changename(parametr){
// parametr=parametr.name.replace(filtered3,"SuperDev")
//    filtered3.name=parametr;
//    return filtered3
//   }
//   changename (filtered3)
//   console.log("e ile bitib SuperDiv ile biten objectler",filtered3)


// let newarray=[];
// for(let name of arr2){
//    if(Object.name(arr2).length === 4){
// newarray.push(name)
// console.log(newarray)
//    }
// }

   
//task 22///// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
let newarray=[]
for(let i=0;i<arr2.length;i++){
   let objectsize= arr2[i].name.length
    if(objectsize===4){
newarray.push(arr2[i])
    }
}
console.log("'name'-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.",newarray)

//task23
//  let newarray3=[]
//  for(let i;i<arr2.length;i++){
//     // let keysize=arr2[i].key.length
//    let maxkeylength=Math.max(arr2[i].key.length)
//    newarray.push(maxkeylength)
//    console.log("34567",maxkeylength)
    
//  }
//  keylength=arr2[i].key.length
//  console.log(keylength)












