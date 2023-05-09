// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");

const [col, row] = input;

const pascal = [];
for (let c = 0; c < col; c++) {
  const rowArr = [];
  for (let r = 0; r <= c; r++) {
    if (r === 0 || r === c) rowArr.push(1);
    else {
      rowArr.push(pascal[c - 1][r - 1] + pascal[c - 1][r]);
    }
  }
  pascal.push(rowArr);
}

console.log(pascal[col - 1][row - 1]);
