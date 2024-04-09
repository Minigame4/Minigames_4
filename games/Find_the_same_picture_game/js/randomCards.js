const cards = [
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0001.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0002.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0003.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0004.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0005.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0006.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0007.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0008.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0009.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0010.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0011.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0012.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0013.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0014.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0016.jpg);"></div>',
  '<div class="front" style="background-image: url(./img/0000.jpg);"></div><div class="back" style="background-image: url(./img/0016.jpg);"></div>',
];

let temp = [];
//상, 중, 하 난이도에 따른 카드 개수
function cardNumber(choice) {
  if (choice === "high") {
    // 상
    return (temp = [...cards.slice(), ...cards.slice()]);
  } else if (choice === "middle") {
    // 중
    return (temp = [...cards.slice(0, 12), ...cards.slice(0, 12)]);
  } else if (choice === "low") {
    // 하
    return (temp = [...cards.slice(0, 8), ...cards.slice(0, 8)]);
  }
}
cardNumber("high"); //이거
console.log(temp);

// 32개의 숫자가 든 배열 생성
total = [];
for (let i = 0; i < 32; i++) {
  total[i] = i;
}
console.log(total); // 이거

// 32개의 숫자배열 랜덤정렬
let num = [];
let i = 0;
while (i < 32) {
  let random = Math.floor(Math.random() * total.length);
  if (!num.includes(total[random])) {
    // 중복카드 배열에 넣지않기
    num.push(total[random]);
    i++;
  }
}
console.log(num); //이거
console.log("==========");
// console.log(temp);
// // 태그 랜덤정렬
// let newNumber =[];
// while (i < 33) {
//     let random = Math.floor(Math.random() * total.length);
//     if (!num.includes(total[random])) { // 중복카드 배열에 넣지않기
//         num.push(total[random]);
//         i++;
//     } for (let j = 0; j < 33; j++) {
//       newNumber[j] = temp[num];
//     }newNumber.push(temp[num]);
//   }
//   console.log(newNumber);
console.log("===============================================");
let originalCards = temp.slice();
function shuffleCard() {
  for (i = 0; i < temp.length; i++) {
    originalCards[parseInt(num[i])] = temp[i];
  }
}
shuffleCard();

function random () {
const cardsBox = [...document.querySelectorAll(".box li")];
for (i = 0; i < originalCards.length; i++) {
  cardsBox[i].innerHTML = originalCards[i];
}
}
 random();