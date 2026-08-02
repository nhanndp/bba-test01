let playerName = "Mario";
let currentLives = 3;
const coinLevel1 = 25;
const coinLevel2 = 30;
const coinLevel3 = 45;

const totalCoins = coinLevel1 + coinLevel2 + coinLevel3;
console.log("Tổng số coins của 3 levels là: " + totalCoins);
const averageCoin = totalCoins / 3;
console.log("Giá trị trung bình của số coin: " + averageCoin);
console.log("Số coin dư: " + totalCoins % 3);