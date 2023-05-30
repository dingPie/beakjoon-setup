// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const damage = input[1].split(" ").map((v) => Number(v));
const heal = input[2].split(" ").map((v) => Number(v));

const arr = damage
  .map((v, i) => [v, heal[i]])
  .sort((a, b) => {
    if (b[1] / b[0] !== a[1] / a[0]) return b[1] / b[0] - a[1] / a[0];
    else return a[0] - b[0];
  });

let answer = 0;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  let hp = 100;
  for (let j = i; j < arr.length; j++) {
    const [deal, heal] = arr[j];

    if (hp - deal > 0) {
      sum += heal;
      hp -= deal;
    }
  }
  if (answer < sum) answer = sum;
}

console.log(answer);
// 20명 이하이므로 dp만 잘 활용한다면 몇번 반복해도 됨
