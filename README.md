# 🧠 JavaScript Day 8 — String Methods

Bu darsda men **JavaScript’da string (matn) bilan ishlash usullari** bilan tanishdim.  
Amaliy misollar orqali matn uzunligini aniqlash, matnni o‘zgartirish, kesib olish, qidirish va bo‘sh joylarni tozalash kabi asosiy metodlarni mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I learned

JavaScript’da string bilan ishlash uchun **ko‘plab qulay metodlar** mavjud. Ulardan eng ko‘p ishlatiladigani quyidagilar:

### 1️⃣ length  
String uzunligini qaytaradi.
```javascript
const text = "Hello";
console.log(text.length); // 5

2️⃣ toUpperCase()
Barcha harflarni katta harfga o‘zgartiradi.
"hello".toUpperCase(); // "HELLO"

3️⃣ toLowerCase()
Barcha harflarni kichik harfga o‘tkazadi.
"HELLO".toLowerCase(); // "hello"

4️⃣ slice(start, end)
Matndan ma’lum bo‘lagini kesib oladi.
"JavaScript".slice(0, 4); // "Java"

**Va boshqalar

---

💻 Example Code
String metodlarining birgalikda ishlatilishi:
const text = "   javascript lesson   ";

const result = text
  .trim()
  .toUpperCase()
  .replace("JAVASCRIPT", "JS");

console.log(result); 
// "JS LESSON"


---

## 🧩 Qisqacha nazariya / Short Theory

-String — matn ko‘rinishidagi ma’lumot
-.length — matn uzunligini qaytaradi
-.toUpperCase() / .toLowerCase() — registrni o‘zgartiradi
-.slice() va .substring() — bo‘lak olish
-.replace() — matnni almashtirish
-.includes() — mavjudligini tekshirish
-.trim() — bo‘sh joylarni olib tashlash

---

## 🎯 Maqsad / Goal

- Asosiy string metodlarini o‘rganish
- Ularni real misollarda qo‘llash
- Amaliy ishlar orqali mustahkamlash

---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov  
📅 Dars: 8-kun — String Methods
