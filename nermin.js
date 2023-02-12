
//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR

// full name numunesi
let fullname = 'Nərmin Abdulova Azər'

//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin
let print = fullname.split("")
// Done

//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin
Array.prototype.move = function(from,to){
  this.splice(to,0,this.splice(from,1)[0]);
  return this;
};
print.move(7,0);
print.move(8,1);
print.move(9,2);
print.move(10,3);
print.move(11,4);
print.move(12,5);
print.move(13,6);
print.move(14,7);
print.move(15,8);

console.log(print)
// Done 
// Note - Maraqli usuldur
//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin
// let newPrint = [...print];
// console.log(newPrint.join(''))
// Done

let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....
//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// var a=0;
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] == 5){
//     a++;
//   }
// }
// console.log(a);
// Done

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
// var total = 0;
// for(let i = 0; i < arr.length; i++){
//   total = total + arr[i];
// }
// console.log(total)
// Done

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
// let number = arr.sort((a,b)=>a-b)
// console.log(number)
// Done

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin
// var big = Math.max(...arr);
// console.log(big);

// var big = arr.reduce(
//     (acc, mövcud) => {
//         return (acc < mövcud ?mövcud  :acc );
//     });
//     console.log(big);

// var max = arr[0];
// for(var i=0; i < arr.length; i++){
//     if(arr[i] > max)
//     {
//         max = arr[i];
//     }
// }
// console.log(max);
// Done

//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
// let random = (Math.floor(Math.random() * 10) + 1);

// console.log(`random reqem :${random}`)

// for(let i = 0; i<arr.length; i++){
//   if(random == arr[i]){
//     console.log("Hemin reqem arrayde var")
//   }
// }
// Done
// Note Arr.includes() bax



//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var
// var str = 'Nərmin'
// let strName = str.length
// console.log(strName)

// for(let i =0; i<arr.length; i++){
//   if(strName == arr[i]){
//     console.log("arrayde var")
//   }
// }
// Done
// Note Arr.includes() bax


//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
// for(let i =0; i<arr.length; i++){
//   if(arr[i] % 3 == 2){
//     console.log(arr[i])
//     console.log(arr.indexOf(arr[i]))
//     break
//   }
// }

// Done

//11) arraydaki en boyuk reqemin ilk indexini tapin
// var largest= 0;

// arr.forEach((item,i)=>{
//   if(item>largest){
//     largest=item
//   }
// })
// console.log(arr.indexOf(largest))
// Done


//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// let array = []
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] == 4){
//     array.push(i);
//   }
// }
// console.log(array);
// Done

//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
// let index1 = arr.indexOf(5);
// let index2 = arr.lastIndexOf(5);

// console.log(`${index1}, ${index2}`);
// Done

//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
// const newArr = [];
// for(let i = 0; i<arr.length;i++){
//   if(arr[i] > 2){
//     newArr.push(arr[i])
//   }
// }
// console.log(`Arraylerin uzunluqlari ferqi: ${arr.length-newArr.length}`)
// Done


//15) 7 reqeminin indexleri cemini tapin.
// let array = []
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] == 7){
//     array.push(i);
//   }
// }
// let total1 = 0;
// array.forEach((item,i)=>{
//   total1 = total1+item;
// })
// console.log(total1)
// Done

/////////////////////////////////////////////////////
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


//QEYD Bu tasklarda arr2 istifade edilecekdir

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// let newarr2 = [];
// arr2.forEach((item,i)=>{
//   if(item.name[0]=="t"){
//     newarr2.push(item)
//   }
// })
// console.log(newarr2)
// Done

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// let count = 0;
// arr2.forEach((item,i)=>{
//   if(item.name[0]=="t" && item.name[item.name.length-1]=="t"){
//     count++;
//   }
// })
// console.log(count)
// Done

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// var total=0;
// arr2.forEach((item,i)=>{
//   if(item.name[0]=="t" && item.name[item.name.length-1]=="t"){
//     total = total+ item.key;
//   }
// })
// console.log(total)
// Done

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// arr2.forEach((item,i) => {
//   if(item.name[item.name.length-1]=="e"){
//     item.name = "superDev";
//     console.log(item.name)
//   }
// })
// Done




// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// let lngt = 0;
// arr2.forEach((item,i)=>{
//   if(item.name.length >lngt){
//     lngt=item.name.length
//   }
// })
// arr2.forEach((item,i)=>{
//   if(item.name.length == lngt){
//     console.log(item.key)
//   }
// })
// Done

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// let lngt = 0;
// arr2.forEach((item,i)=>{
//   if(item.name.length > lngt){
//     lngt = item.name.length;
//   }
// })
// arr2.forEach((item,i)=>{
//   if(item.name.length == lngt){
//     console.log(i*i)
//   }
// })
// Done

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// let newarray2=[];
// arr2.forEach((item,i)=>{
//   if(item.name.length==4){
//     newarray2.push(item)
//   }
// })
// console.log(newarray2)
// Done


// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// let lngt = 0;
// arr2.forEach((item,i)=>{
//   if(item.key > lngt){
//     lngt = item.key;
//   }
// })
// arr2.forEach((item,i)=>{
//   if(item.key==lngt){
//     console.log(item.name)
//   }
// })
// Done

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// let newArr2 = [];
// arr2.forEach((item)=>{
//   let count = 0;
//   for(let i = 0; i<item.name.length;i++){
//     if(item.name[i] == "l"){
//       count++;
//     }
//     if(count == 2){
//       newArr2.push(item.key-1)
//       break;
//     }
//   }
// })
// console.log(newArr2)
// Done

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
// let newArr2 = [];
// arr2.forEach((item)=>{
//   let count = 0;
//   for(let i = 0; i<item.name.length;i++){
//     if(item.name[i] == "t"){
//       count++;
//     }
//     if(count == 2){
//       newArr2.push(item.key)
//       break;
//     }
//   }
// })
// console.log(newArr2)
// Done

// 26 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.
// arr2.map((value) => {
// 	for(let property in value) {
//   	console.log(`${property}: ${value[property]}`);
//   }
// });
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


// let exampoint = 34
// let startPoint = 16
// let point = exampoint + startPoint
// switch(true){
//   case point >= 91 && point <= 100:
//       console.log('A')
//     break;
//     case point >= 81 && point <= 90:
//       console.log('B')
//     break;
//     case point >= 71 && point <= 80:
//       console.log('C')
//     break;
//     case point >= 61 && point <= 70:
//       console.log('D')
//     break;
//     case point >= 51 && point <= 60:
//       console.log('E')
//     break;
//     case startPoint < 17:
//       console.log('KESILDIN!')
//     break;
// }


// NotDone
// Note - Tekce 17 ni yox hem de 51 i kecib kecmediyini de yoxlamali idin