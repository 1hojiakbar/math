"use script";

// (-12, -15, -25, 15, 36, 7, 48);

// Max: 48;

console.log(Math.max(-12, -15, -25, 15, 36, 7, 48));

// ----------------------------------------------------

const array = [-12, -15, -25, 15, 36, 7, 48];

console.log(Math.max(...array));

// ----------------------------------------------------

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if(number > result) result = number;
    };
    return result;
};

console.log(max(12, 15, 25, 15, 36, 7, 48, 68, 69, 75));

let a = 5;
let b = 10;

// ----------------------------------------------------

// Qoshish + operatori chap tarfdagi a qiymat o'ng tarafdagi b ga qo'shiladi
console.log(a+b);

// Ayirish + operatori o'ng tarfdagi a qiymatdan chap tarafdagi b qiymat ayriladi
console.log(a-b);

// Ikki operandni ko'paytirsh a qiymat b qiymatga ko'payib natija 50 ga teng bo'ladi
console.log(a*b);

// Chap operandni o'ng operanga bo'lish
console.log(a/b);

// Moduls operatori ikki operaddan qoldiq qaytarish 
console.log(a%b);

// Kattalashtirsh operatori operand qiymatini bittaga oshirish
console.log(a++);
console.log(a);

// Kichiklashtrish operatori operand qiymatini bittaga kamaytrish
console.log(++a);

if (a > b){
    console.log("true");
}else{
    console.log("false");
};