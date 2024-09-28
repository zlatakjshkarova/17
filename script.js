

let res;
res = 10 + 20;
res = 20 - 10;
res = 10 * 20;
res = 10 / 20;

//Остаток от оделение %
console.log(10 % 4);//2
console.log(15 % 8);//7
//Возведение в степень **
console.log(2 ** 3);//4
console.log(2 ** 3);//8
//
console.log(4 ** (1 / 2));//2
//Бинарный +
let str = "моя" + " строка";
console.log(str);

let a = 1;
let b = "2";
console.log(a + b);

//Унарный +  приводит к числу . ТО 
console.log(a + +b);

let apples = "2";
let oranges = "3";


let sum = apples + oranges;
console.log(sum);
sum = +apples + +oranges;
console.log(sum);
//Сокращенная арифметика +=,-=,*=

let n = 2;
//n = n + 10;
n += 10;
n -= 10;
n /= 10;
console.log(n);



//Инкремент /декремент
console.log('Инкремент / декремент');

let count = 10;

count++;//равноценно соunt=count+1
//count = count + 1;
console.log(count++);
console.log(count);