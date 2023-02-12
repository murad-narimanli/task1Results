let fullName ='Gulu Suleymanova Oruc';
//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin
let split_name=fullName.split("");
console.log(split_name);
//Done

//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin
let new_name=split_name.slice(0,4);
console.log(new_name);
//Done


let new_lastname=split_name.slice(5,16);
console.log(new_lastname);

let new_fathername=split_name.slice(17);
console.log(new_fathername);

//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin
let new_fullname = new_lastname.concat(' ', new_name,' ', new_fathername).join('');
console.log(new_fullname);
console.log(fullName);
//Done


///////////////////////////////////////////////////////////////////////////////

let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
//******1ci usul 
let say_tekrar = arr.filter(number=> number===5).length;
  console.log(say_tekrar);


  //*****2ci usull
let say =0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i]===5) {
        say++;
    } 
}
console.log(say);
//Done
//********************************************************************* */

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
//****1ci usul
let sum =0;
arr.forEach(item=>sum+=item);
console.log(sum);


//****2ci usul
let initialValue = 0;
let sumWithInitial = arr.reduce(
  (acc, curr) =>
  acc + curr

);
console.log(sumWithInitial);

//Done

//****************************************************************** */


//6) arrayda tekrar olunan reqemleri artan sira ile duzun
let repeatnumber = arr.sort((a, b) => a-b);

console.log(repeatnumber);

//Done

//********************************************************************* */


//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin
let maximum = Math.max(...arr);
let count_repeat = arr.filter(item => item === maximum).length;
console.log(maximum);
console.log(count_repeat);

//Done

//************************************************************************* */


//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
let max=10;
let min=1;
let random_number=Math.floor(Math.random()*(max-min))+min;
console.log(random_number);

let random_includes=arr.includes(random_number);
console.log(random_includes);
//Done
//******************************************************************** */


//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var
let myname = 'Gulu';
let name_length = myname.length;
console.log(name_length);

let include_length = arr.includes(name_length);
console.log(include_length);
//Done
//********************************************************************* */


//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
let find_num = arr.find(num=>num%3==2);
console.log(find_num);
let index =arr.indexOf(find_num);
console.log(index);
//Done
//********************************************************************* */


//11) arraydaki en boyuk reqemin ilk indexini tapin
let max_index= arr.findIndex(maxx => maxx === Math.max(...arr));
console.log(max_index);
//Done
//********************************************************************* */


//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
//***** */ 1ci usul
let index_arr = arr.reduce((acc, curVal, index) => {
  if (curVal === 4) 
   acc.push(index); 
   return acc;
  
},[]);
console.log(index_arr);


//********2ci usul
let arr_in = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]===4){
       arr_in.push(i);
        
    }
}
console.log(arr_in);
//Done
//****************************************************************** */


//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
let five_min = arr.findIndex(element=> element==5);
console.log(five_min);
let five_max =arr.findLastIndex(elem=> elem==5);
console.log(five_max);
//Done
//******************************************************************** */


//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
let newarr= arr.filter(number=>number>2);
console.log(newarr);

let currentarr=arr.length;
console.log(currentarr);

let newarrlength =newarr.length;
console.log(newarrlength);

let diff=currentarr-newarrlength;
console.log(diff);
//Done
//******************************************************************* */


//15) 7 reqeminin indexleri cemini tapin.
let sum_index=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]===7){
    sum_index+=i;
       
    }  
}
console.log(sum_index);
//Done
//*************************************************************** */

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


// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
//******1ci usulll
let newArray=[];
for (const object of arr2) {
    if (object.name[0]==='t') {
        newArray.push(object);
    }
}
//Done
console.log(newArray);

//*****2ci usulll
let array2=arr2.filter(item=>item.name.startsWith('t'));
console.log(array2);
//Done
//*************************************************************************** */

  
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
let arr2_length=arr2.filter(letter=>
    letter.name.startsWith('t') && letter.name.endsWith('t')).length;
console.log(arr2_length);
//Done
//**************************************************************************** */


// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
let sum_key= arr2.filter(item=>
    item.name.startsWith('t') && item.name.endsWith('t')    
);
console.log(sum_key);

let summ=0;
let keyy = sum_key.forEach(elem=> summ+=elem.key)
console.log(summ);

//Done
//***************************************************************************** */


// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

//*****1ci usull
// let letter_e=arr2.filter(herf=>{
//    return herf.name.endsWith('e') 
 
// } );
//  letter_e.forEach(element=> element.name='SuperDev'); 
//  console.log(letter_e);


//******2ci usulll
//      arr=[];
//     for (const obj of arr2) {
//         if (obj.name.endsWith('e')) {
//            arr.push(obj);
//            obj.name='SuperDev';
//         }
//     }
//     console.log(arr);
//     console.log(arr2);
//Done
//*************************************************************************** */


// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

//*****1ci usull
// let long_name = arr2.sort((a, b) => a.name.length - b.name.length)
// .reduce((acc, obj) => obj.key, 0);
// console.log(long_name);

//******2ci usulll
// let max_length= Math.max(...arr2.map(obj=>obj.name.length));
// console.log(max_length);
// for (const obj of arr2) {
//     if (obj.name.length===max_length) {
//        console.log(obj.key); 
//     };
// }
//*************************************************************************** */

//Done

// // 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

//*******1ci usulll
 let max_indexof=Math.max(...arr2.map(obj=>obj.name.length));
 console.log(max_indexof);

for (const obj of arr2) {
     if (obj.name.length===max_indexof) {
       let find= arr2.indexOf(obj);

        console.log(Math.pow(find, 2));
    };
 };

 //********2ci usulll
let max_length = Math.max(...arr2.map(obj => obj.name.length));
console.log(max_length);

 let power= arr2.forEach((obj, index) => {
  if (obj.name.length === max_length) {
    console.log(index ** 2);
  }
});

//Done
//**************************************************************************** */


// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
let length_four=arr2.filter(object=>object.name.length==4);
console.log(length_four);
//Done
//****************************************************************************** */


// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
let max_key=Math.max(...arr2.map(obj=>obj.key));
console.log(max_key);

for (const object of arr2) {
    if (object.key===max_key) {
        console.log(object.name);
    }
}
//Done
//**************************************************************************** */


// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
//******1ci usulll
let index_two=[];
let array=arr2.forEach((item,index)=>{
    if ((item.name.match(/l/gi)||[]).length==2) {
        index_two.push(index);
    }
})
console.log(index_two);


//*******2ci usulll
let two_index = [];
arr2.forEach((obj, index) => {
  let name = obj.name.toLowerCase();
  if (name.includes('l') && name.includes('l', name.indexOf('l') + 1)) {
    two_index.push(index);
  }
});
console.log(two_index);
//Done
//*********************************************************************************** */


// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
let key_=[];
for (const obj of arr2) {
    if ((obj.name.match(/t/g)||[]).length===2) {
    key_.push(obj.key);
  }
};
console.log(key_);
 console.log(arr2);
 //Done
//************************************************************************************* */

// 26 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.
// arr2 de obyektin key -i 2ye bolende qaliqda 1 alinan ve name uzunlugu 3den boyuk olan yeni array yaradin
// hemin array de name leri tekrar olunanlari silin
// sonra name leri elifba sirasina gore duzun
// alinan arrayi 5 saniye sonra local storage yukluyun.

let array_push=[];
for (const obj of arr2) {
  if (obj.key%2===1 && obj.name.length>3) {
    array_push.push(obj);
  }
}
let tekrarsiz = [];
array_push.forEach(element=> {
    if (!tekrarsiz.some(item => item.name === element.name)) {
        tekrarsiz.push(element);
    }
});
tekrarsiz.sort((a, b) => a.name.localeCompare(b.name));
console.log(tekrarsiz);

setTimeout(() => {
  localStorage.setItem("selectedObjects", JSON.stringify(tekrarsiz));
}, 5000);

//Done
// Note = Wooow neynemisen :D
//**************************************************************************** */



// 27 Xaliqenin taski :D
////////////////////////////////
// Dersde edilen switch case taskina esasen artiq girish qiymetleri
// tekce pointden ibaret deil
// exampoint - imtahan bali
// startPoint - imtahana girish bali
// olaraq yerleshdireceksiz
// onceki shertler yerinde qalir sadece eger girish bali 17 den ashagi olarsa
// kesilmek case -ine daxil olsun

let giris_bal=50;
let imtahan_bal=37;
let number =giris_bal+imtahan_bal;
switch (true) {
    case (number>90 && number<=100):
                    console.log(point='A');

                break;
                case (number>80 && number<=90):
                    console.log(point='B');

                break;
                case (number>70 && number<=80):
                    console.log(point='C');
          
                   break;
                   case (number>60 && number<=70 && imtahan_bal>=17):
                    console.log(point='D');
          
                   break;
    
               case (number>50 && number<=60 && imtahan_bal>=17):
               console.log(point='E');
                break;
                
              case (number<=50):
              console.log(point='F');
              break;

              default :
              console.log(point='F-Kesildin');
                       
}

//Done






//5ci-gun ucun ev tapsirigi******************

// // Ad ve soyadinizi yazin
// let sur_name= 'Gulu Suleymanova'
// console.log(sur_name);

// //  ad ve soyadinizi arraya cevirin
// let split_array=sur_name.split(' ')
// console.log(split_array);

// // AD ve soyadinizin bash herflerini index le tapin
// let herf = split_array[0].charAt(0)
// console.log(herf);

// let herf2 = split_array[1].charAt(0)
// console.log(herf2);

// // tapilan melumati arraya cevirin ['M', 'N'] 
// let newArray =[]
// let push_herf = newArray.push(herf, herf2);
// console.log(newArray);

// // alinmish arrayi 4 saniye sonra localstorage e elave edin
// setTimeout(() => {
// localStorage.setItem('last_array', JSON.stringify(newArray)); 
// },4000);


// console.log(JSON.parse(localStorage.getItem('last_array'))); 






