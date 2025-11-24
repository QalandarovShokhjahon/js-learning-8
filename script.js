'use strict';

// Method → obyektning belgilangan vazifalarini bajarish uchun mo’ljallangan funksiyadir.

// Property → obyektlarning qiymatlarini saqlash uchun ishlatiladi. property bilan method farqi propertyda () quyilmaydi.


// String methodlar

// length > harflar sonini chaqiradi
// let ism = 'Shokhjahon';
// console.log(ism.length);

// length  arraydagi elementlar sonini qaytaruvchi xususiyatdir. U arrayning oxirgi indeksiga 1ni qo’shib hosil qilinadi.

let mevalar = ['olma', 'banan', 'uzum', 'nok', 'shaftoli'];
console.log(mevalar.length);


// for yordamida arrayning qiymatlarini ko’rish.
// let fruits = ["Olma", "Banan", "Shaftoli", "Anor",]

// for (let i = 1; i <= fruits.length; i++) {
//   console.log(`${i}. ${fruits[i - 1]}`)
// }

// let user = prompt("So'z kiriting:");
// alert(`Kiritilgan so'z uzunligi: ${user.length} ga teng.`);

// let user = prompt("So'z kiriting:");
// if (user.length > 10) {
//     alert('Uzun so\'z');
// } else {
//     alert('Qisqa so\'z');
// }


// toUpperCase() → stringdagi barcha harflarni katta harflarga o'zgartiradi.
// let ism = 'Developer';
// console.log(ism.toUpperCase());

// let ism2 = 'SHokhjahon';
// console.log(ism2.toLowerCase());


// charAt(index) → stringda berilgan indeksdagi harfni qaytaradi.
let country = 'Uzbekistan';
console.log(country.charAt(4));


// let ism = "TechWebby";
// let teskari = ""

// for (let i = ism.length; i >= 0; i--) {
//   teskari += ism.charAt(i)
// }
// console.log(teskari);


// slice(index, element) → stringning berilgan indeks oralig‘idagi qismini ajratib, yangi string qaytaradi yani belgilangan matni qirqib beradi.
// 0 dan 4-gacha kesadi, 4 kiritilmaydi
let company = 'TechWebby';
console.log(company.slice(0, 4));

// Agar slice ga 1ta qiymat bersak oxirigacha qirqib beradi. Yozilgan qiymat boshlang’ich qirqish joyidir.
let text = "JavaScript";  
console.log(text.slice(1));


//  Kiritilgan matn 4ta harfdan oshsa 3ta nuqta qo’yiladi
// let ism = prompt("Ismingizni kiriting: ");

// if (ism.length > 4) {
//   alert(ism.slice(0, 5) + "...");
// } else {
//   alert(ism)
// }

// So’z bo’sh qoldirilsa yoki songa nolga teng yoki kichik bo’lsa qaytadan so’raydi.

let soz = prompt("Ixtiyoriy so'z kiriting")
while (soz.length == 0) {
  soz = prompt("So'z bosh qoldirmang!")
}

let son = +prompt("Nechinchi harfni tanlaysiz")
while (son <= 0) {
  son = +prompt("Kiritilgan son 0dan katta bo'lishi kerak.")
}

let boshi = soz.slice(0, son - 1)
let ortasi = soz.charAt(son - 1).toUpperCase()
let qolgani = soz.slice(son)

alert(boshi + ortasi + qolgani)


let userName = "  Shokhjahon  "; 
console.log(userName.trim()); // trim stringning boshidagi va oxiridagi bo'sh joylarni olib tashlaydi.


// indexOf(searchValue) → string ichida qidirilayotgan qiymatning birinchi uchragan indeksini qaytaradigan metod.
let ism = "Shoxjaxon";
console.log(ism.indexOf('x'));


let companyName = prompt("Kompaniya nomini kiriting:");
alert(companyName.trim());

let user = prompt('Email kiriting:');
if (user.indexOf('@') == -1 || user.indexOf('.') == -1) {
  alert('Email xato kiritildi!');
} else {
  alert('Email qabul qilindi.');
}