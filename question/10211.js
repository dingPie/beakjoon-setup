// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const questions = input.slice(1);

const answer = [];

for (let i = 0; i < questions.length; i += 2) {
  const numbers = questions[i + 1].split(" ").map((v) => Number(v));
  const arr = [numbers[0]];
  for (let i = 1; i < numbers.length; i++) {
    if (arr.at(-1) + numbers[i] > 0 && arr.at(-1) + numbers[i] > numbers[i]) {
      const value = arr.at(-1) + numbers[i];
      arr.push(value);
    } else arr.push(numbers[i]);
  }
  answer.push(Math.max(...arr));
}

console.log(answer.join("\n"));

// console.log(Math.max(...arr).toFixed(3));

// 일단..그리디랑 비슷한거같은데
// 슬라이딩 도어는 별론거같고.
// 시작 지점에 따라?
//reduce 해 가면서 배열ㄹ관리?
// 솟수점 모르겠네 ㅈㅈ
// 식은 맞음, 결과내는데에서 이상함
