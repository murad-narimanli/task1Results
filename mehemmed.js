
//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin///////////////

// let str = 'Mehemmed Haciyev Tahir'
// let arr = str.split``
// console.log(arr);
// Done

//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin///////////////////

// let newArr = arr.join``.split` `
// let result = newArr.splice(1, 1).concat(newArr)
// console.log(result);

// Done



//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin//////////////////////////////////

// let copyArr = [...result].join(' ')
// console.log(copyArr);

// Done








// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

// let newArr = []
// arr.map((item) => item === 5 ? newArr.push(item) : newArr)
// let lengthOfFive = newArr.length
// console.log(lengthOfFive); 
// Done

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

//best way 
// YOU ARE DRAGON :D
// let sum = arr.reduce((sum, prev) => sum + prev, 0)
// console.log(sum);

//OR 

// let sum = 0
// arr.map((item) => sum += item)
// console.log(sum);


//6) arrayda tekrar olunan reqemleri artan sira ile duzun

// const sortedArr = arr.sort((a, b) => a - b)
// console.log(sortedArr);

// Done - 
// Note: Tekrar olunanlar 1 defe gorunse daha yaxsi olardi 1,1 2, 2 deyil de 1, 2 kimi


//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin
// Dragon style :D
// let maxNum = Math.max.apply(Math, arr)  //OR let maxNum = Math.max(...arr)
// let lengthOfMaxNum = arr.filter(item => item === maxNum).length
// console.log(lengthOfMaxNum);
// Done

//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin

// let randomNum = Math.floor(Math.random() * 10) + 1
// let checkArr = arr.some((item) => item === randomNum)
// console.log(checkArr);
// Done

//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var

// let lengthOfName = "Mehemmed".length
// let checkArr = arr.some(item => item === lengthOfName)
// console.log(checkArr);
// Done


//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

// let findNum = arr.find((item, index) => item % 3 === 2)
// let index = arr.indexOf(findNum)
// console.log(index);

//OR

// let result = 0
// let findNum = arr.find((item, index) => item % 3 === 2 && (result += index))
// console.log(result);
// Done


//11) arraydaki en boyuk reqemin ilk indexini tapin

// let maxNum = Math.max.apply(null, arr)
// let index = arr.indexOf((maxNum))
// console.log(index);

//OR

// let maxNum = arr.reduce((a, b) => a > b ? a : b)
// let index = arr.indexOf(maxNum)
// console.log(index);
// Done


//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

// let arrIndex = []
// arr.map((item, index) => item === 4 && arrIndex.push(index))
// console.log(arrIndex);
// Done



//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

// let arrIndex = []
// arr.map((item, index) => item === 5 && arrIndex.push(index))
// let minVSmax = [arrIndex[0], ...arrIndex.slice(-1)]
// console.log(minVSmax);
// Done


//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

// let newArr = arr.filter((item) => item > 2)
// let result = arr.length - newArr.length
// console.log(result);


//15) 7 reqeminin indexleri cemini tapin.

// let result = arr.reduce((sum, prev, index) => prev === 7 ? sum + index : sum, 0)
// console.log(result);

//OR

// let sum = 0
// arr.map((item, index) => item === 7 && (sum += index))
// console.log(sum);
// Done





// let arr2 = [
//     { name: 'test', key: 1 },
//     { name: 'task', key: 2 },
//     { name: 'tanqo', key: 3 },
//     { name: 'like', key: 4 },
//     { name: 'task', key: 5 },
//     { name: 'trust', key: 6 },
//     { name: 'test', key: 7 },
//     { name: 'last', key: 8 },
//     { name: 'tanqo', key: 9 },
//     { name: 'elephant', key: 10 },
//     { name: 'love', key: 11 },
//     { name: 'small', key: 12 },
//     { name: 'little', key: 13 },
// ]


// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

// const newArr = arr2.filter((item) => item.name.startsWith('t'))
//OR
// const newArr = arr2.filter((item) => item.name[0] === 't')
// console.log(newArr);
// Done



// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

// const newArr = arr2.filter((item) => item.name.startsWith('t') && item.name.endsWith('t'))
// console.log(newArr.length);
// Done


// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// const newArr = arr2.filter((item) => item.name.startsWith('t') && item.name.endsWith('t'))
// const sumOfKeys = newArr.reduce((sum, prev) => sum + prev.key, 0)
// console.log(sumOfKeys);
// Done


// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// const newArr = arr2.filter((item) => item.name.endsWith('e') ? item.name = 'SuperDev' : item.name)
// console.log(newArr);
// Done

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

// const findLongestName = arr2.reduce((a, b) => b.name.length > a.name.length ? b : a).key
// console.log(findLongestName);


// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// const findLongestName = arr2.reduce((a, b) => b.name.length > a.name.length ? b : a).key
// let squareOfKey = Math.pow(findLongestName, 2)
// console.log(squareOfKey);

// NotDone
// ELephant en boyuk uzunluqlu name dir ve indexi 9 dur kvadrati 81 edir

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

// const newArr = arr2.filter((item) => item.name.length === 4)
// console.log(newArr);
// Done


// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

// const heightestKey = arr2.reduce((a, b) => a.key > b.key ? a : b).name
// console.log(heightestKey);
// Done

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.

// 24 NotDone
// 25 NotDone
// 26 NotDone


