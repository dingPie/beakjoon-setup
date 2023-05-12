// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");

const [r, c, w] = input.map((v) => Number(v));

const pascal = [[1]];

for (let i = 1; i < r + w; i++) {
  const row = [];
  for (let j = 0; j < i + 1; j++) {
    if (j === 0 || j === i) row.push(1);
    else {
      row.push(pascal[i - 1][j] + pascal[i - 1][j - 1]);
    }
  }
  pascal.push(row);
}

let answer = 0;

for (let i = 0; i < w; i++) {
  for (let j = 0; j <= i; j++) {
    const value = pascal[r + i - 1][j];
    console.log(r + i - 1, j, value);
    answer += value;
  }
}

console.log(answer);

// 일단 파스칼 삼각형은 r+w만 구하면되고.
// 안에 칸들을 다 구한다음 저장하면될텐데.
