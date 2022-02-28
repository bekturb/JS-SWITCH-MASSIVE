// switch, логические операции, массивы

//  let lang = 'ky';
//
// switch (lang){
//  case 'ky':
//   console.log("Assalamu aleikum")
//         break;
//  case 'ru':
//   console.log('Zdrastvuite')
//         break;
//  case 'eng':
//   console.log('Hello')
//         break;
//  case 'de':
//   console.log('Hallo')
//         break
//  default:
//   console.log("I don't know this language");
//   break;
// }


// Логические операторы
 // &&

// let highIncome = false;
// let goodCreditHistory = true;
//
// if (highIncome && goodCreditHistory){
//  console.log('Yes We can give!')
// }else{
//  console.log('No WE cant give')
// }


// || (ИЛИ);

// let highIncome = false;
// let goodCreditHistory = false;
//
// if (highIncome || goodCreditHistory) {
//  console.log("Мы готовы выдать кредит!");
// } else {
//  console.log("Извините, мы пока не выдаем кредиты.");
// }

/*console.log(true && true && true && false); // false
console.log(true || true || true || false); // true */

//  ! (НЕ);
//
// let eligibleForLoan = false;
//
// console.log(!eligibleForLoan); // true

//
// console.log(false || true);
// console.log(false || "Mirlan");
// console.log(false || 1);
//
// console.log(false || true);
// console.log("Mirlan" || "Hello");
// console.log("Hello" || 1);
// console.log(0 || 1 || "Hello");

// Falsy Values
// undefined
// null
// 0
// false
// ""
// NaN

// let userColor = "red";
// let defaultColor = "blue";
//
// let productColor = userColor || defaultColor;
//
// console.log(productColor);

// let a = 2;
// let b = "hello";
//
// console.log((a += 3)); // 5
//
// console.log((b += " world")); //hello world


// let a = 5;
// let b = "hello world";
//
// console.log((a -= 3)); // 2
//
// console.log((b -= "world")); // NaN


// let a = 5;
//
// console.log((a *= 3)); // 15

//
// let a = 5;
//
// console.log((a /= 3)); // 1.666666666666666667


// let a = 5;
//
// console.log((a %= 3)); // 2



// MASSIVE

// let myArray = [];
// let myArr = new Array();

// let users = ['John', 'Beka', 'Askat'];
// let mixedArray = ['Beka', true, 35463, false, ['Baktiyar', false]];

// console.log(users);
// console.log(mixedArray);


// Длина массива//

// let users = ['Beka', 'Baktiyar', 'Baha'];
//
// console.log(users.length); //3


//Доступ к элементам массива

// let users = ['Beka', 'Baktiyar', 'Baha'];
//
// console.log(users[0]); // Beka


//Замена элемента по индексу

// let users = ['Beka', 'Baktiyar', 'Baha'];
//
// users[1] = 'Askat';
// console.log(users); //[ 'Beka', 'Askat', 'Baha' ]


// Добавление нового элемента по индексу

// let users = ['Beka', 'Baktiyar', 'Baha'];
//
// users[3] = 'Askat'
//users[10] = 'Aigerim'
// console.log(users);//[ 'Beka', 'Baktiyar', 'Baha', 'Askat' ]




//Методы массивов

//Shift - добавляет элемент в начало массива

//  let users = ['Beka', 'Baktiyar', 'Baha'];
//
//  let anotherUsers = users.unshift('Askat');
//
// console.log(users); // [ 'Askat', 'Beka', 'Baktiyar', 'Baha' ]

// Push - добавляет элемент в конец.

// let users = ['Beka', 'Baktiyar', 'Baha'];
//
// users.push('Askat');
//
// console.log(users) // [ 'Beka', 'Baktiyar', 'Baha', 'Askat' ]


//pop - удаляет последний элемент и возвращает его.

// let users = ['Beka', 'Baktiyar', 'Baha', 'Askat'];
//
// users.pop()
//
// console.log(users); // [ 'Beka', 'Baktiyar', 'Baha' ]


//shift удаляет из массива первый элемент и возвращает его
//
// let users = ['Beka', 'Baktiyar', 'Baha', 'Askat'];
//
// users.shift()
//
// console.log(users); // [ 'Baktiyar', 'Baha', 'Askat' ]



//toString возвращает список элементов, разделённых запятыми.

//  let users = ['Beka', 'Baktiyar', 'Baha', 'Askat'];
//
//  let another = users.toString()
// console.log(another); //Beka,Baktiyar,Baha,Askat
//
// let users = ['Beka', 'Baktiyar', 'Baha', 'Askat'];
//
// console.log(users.toString()); //Beka,Baktiyar,Baha,Askat


//Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.

// let users = ["John", "Mary", "Bill"];
//
// console.log(users.join('')); //John,Mary,Bill

//Метод 'reverse' меняет порядок следования элементов в массиве на противоположный и возвращает
//массив с переставленными элементами. Этот метод не создает новый массив с переупорядоченными
//элементами, а переупорядочивает их в уже существующем массиве.


// let users = ["John", "Mary", "Bill"];
//
// console.log(users.reverse()); // [ 'Bill', 'Mary', 'John' ]


// Concat

// let users = ["John", "Mary", "Bill"];
//
// console.log(users.concat("Jimmy")); // [ 'John', 'Mary', 'Bill', 'Jimmy' ]
//
//
// let anotherUsers = ["Иван", "Петя"];
//
// console.log(users.concat(anotherUsers)); //[ 'John', 'Mary', 'Bill', 'Иван', 'Петя' ]

// Includes

// let users = ["John", "Mary", "Bill"];
//
// console.log(users.includes("Bill")); // true



//Sort

// let a = ["Киви", "Апельсины", "Груши"];
// a.sort();
// let s = a.join(", ");  //Апельсины, Груши, Киви
// console.log(s);
//
// //пример с числами1
// let myArr = [1,2,10];
// myArr.sort();
//
// console.log(myArr);  //1,10,2



      // exercise

// let vowels = ['a', 'i', 'o', 'e', 'u'];
// let users = prompt('type your english Letters!');
//
// if (vowels.includes(users)){
//  console.log('Vowel');
// }else if (users === 'y'){
//  console.log("Consonant or vowel");
// }else {
//  console.log('Consonant');
// }

//
// let vowel = prompt('type!');
//
// switch (vowel){
//  case 'a':
//   console.log('vowel')
//         break;
//  case 'e':
//   console.log('vowel')
//   break;
//  case 'i':
//   console.log('vowel')
//   break;
//  case 'o':
//   console.log('vowel')
//   break;
//  case 'u':
//   console.log('vowel')
//   break;
//  case 'y':
//   console.log('vowel or consonant')
//   break;
//  default:
//   console.log('consonant')
//   break;
// }

// let numbers = [1, 30, 8];
//
// let sorted = numbers.sort((a,b) =>{
//  return b - a
// })
// console.log(numbers)

//Homework

// let levelVolume = prompt('Type your Level Of Volume!');
// let level = Number(levelVolume)
//
// switch (level){
//  case 130:
//   document.write('Отбойный молоток')
//         break;
//  case  120:
//   document.write('Отбойный молоток или Газовая газонокосилка')
//   break;
//  case 106 :
//   document.write('Газовая газонокосилка')
//   break;
//  case  73 :
//   document.write('Будильник или Газовая газонокосилка')
//   break;
//   case 70 :
//   document.write('Будильник')
//   break;
//  case  45 :
//   document.write('Будильник или Тихая комната')
//   break;
//  case 40 :
//   document.write('Тихая комната')
//   break;
//  default:
//   document.write('Not such as Volume')
// }


// let levelVolume = prompt(`$ Type your amount of Money`);
// let level = Number(levelVolume)
//
// switch (level){
//  case 1:
//   document.write('Джордж Вашингтон')
//         break;
//  case  2:
//   document.write('Томас Джефферсон ')
//   break;
//  case 5 :
//   document.write('Авраам Линкольн')
//   break;
//  case  10 :
//   document.write('Александр Гамильтон')
//   break;
//   case 20 :
//   document.write('Эндрю Джексон')
//   break;
//  case  50 :
//   document.write('Грант')
//   break;
//  case 100 :
//   document.write('Бенджамин Франклин')
//   break;
//  default:
//   document.write('No')
// }


// let userDay = 31;
// let userMonth = 'december';
// let userYear = 2020;
//
// let outputDay;
// let outputMonth;
// let outputYear = userYear;
//
// switch (userMonth){
//  case 'february':
//   if (userYear % 4 === 0 && userDay === 29){
//    outputDay = 1;
//    outputMonth = 'March';
//   }else if (userYear % 4 !== 0 && userDay === 28){
//    outputDay = 1;
//    outputMonth = 'March';
//   }else {
//    outputDay = userDay + 1;
//    outputMonth = userMonth;
//   }
//   break;
//  case 'january':
//   if (userDay === 31) {
//    outputDay = 1
//    outputMonth = 'february';
//   }else {
//    outputDay = userDay + 1;
//    outputMonth = userMonth;
//   }
//   break;
//  case 'march':
//   if (userDay === 31) {
//    outputDay = 1
//    outputMonth = 'april';
//   }else {
//    outputDay = userDay + 1;
//    outputMonth = userMonth;
//   }
//   break;
//  case 'april':
//   if (userDay === 31) {
//    outputDay = 1
//    outputMonth = 'may';
//   }else {
//    outputDay = userDay + 1;
//    outputMonth = userMonth;
//   }
//   break;
//  case 'may':
//   if (userDay === 31) {
//    outputDay = 1
//    outputMonth = 'june';
//   }else {
//    outputDay = userDay + 1;
//    outputMonth = userMonth;
//   }
//   break;
//  case 'june':
//   if (userDay === 31) {
//    outputDay = 1
//    outputMonth = 'july';
//   }else {
//    outputDay = userDay + 1;
//    outputMonth = userMonth;
//   }
//   break;
//  case 'july':
//   if (userDay === 31) {
//    outputDay = 1
//    outputMonth = 'august';
//   }else {
//    outputDay = userDay + 1;
//    outputMonth = userMonth;
//   }
//   break;
//  case 'august':
//   if (userDay === 31) {
//    outputDay = 1
//    outputMonth = 'september';
//   }else {
//    outputDay = userDay + 1;
//    outputMonth = userMonth;
//   }
//   break;
//  case 'september':
//   if (userDay === 31) {
//    outputDay = 1
//    outputMonth = 'october';
//   }else {
//    outputDay = userDay + 1;
//    outputMonth = userMonth;
//   }
//   break;
//  case 'october':
//   if (userDay === 31) {
//    outputDay = 1
//    outputMonth = 'november';
//   }else {
//    outputDay = userDay + 1;
//    outputMonth = userMonth;
//   }
//   break;
//  case 'november':
//   if (userDay === 31) {
//    outputDay = 1
//    outputMonth = 'december';
//   }else {
//    outputDay = userDay + 1;
//    outputMonth = userMonth;
//   }
//   break;
//  case 'december':
//   if (userDay === 31) {
//    outputDay = 1
//    outputMonth = 'january';
//    outputYear = userYear + 1
//   }else {
//    outputDay = userDay + 1;
//    outputMonth = userMonth;
//   }
//   break;
//  default :
//   outputDay = userDay + 1;
//   outputMonth = userMonth;
// }
//
// let message = `Next date: ${outputDay}. ${outputMonth}. ${outputYear}`;
//
// document.write(message);


