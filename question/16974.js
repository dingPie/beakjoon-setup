// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");

const [n, x] = input.map((v) => Number(v));

console.log(n, x);

const dp = {
  0: 0,
};

// 아래만 x장 쳐먹은게 히트네;
// 갯수 계산은 쉬운데,
