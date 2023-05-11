// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const numbers = input.slice(1).map((v) => Number(v));

const arr = [numbers[0]];
for (let i = 1; i < numbers.length; i++) {
  if (arr.at(-1) * numbers[i] > 1) {
    const value =
      Math.round(Number((arr.at(-1) * numbers[i]).toFixed(4)) * 1000) / 1000;
    arr.push(value);
  } else arr.push(numbers[i]);
}

console.log(Math.max(...arr).toFixed(3));

// 일단..그리디랑 비슷한거같은데
// 슬라이딩 도어는 별론거같고.
// 시작 지점에 따라?
//reduce 해 가면서 배열ㄹ관리?
// 솟수점 모르겠네 ㅈㅈ
// 식은 맞음, 결과내는데에서 이상함

// 이거 10211과 똑같은 조건도 넣어서 풀어보자.
