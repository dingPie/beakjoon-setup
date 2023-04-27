// 1. 하나의 값을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim();

let answer = 0;

const sticks = []; // 배열로 바꿀수도 있음.
const razers = [];

const stack = [];
for (let i = 0; i < input.length; i++) {
  // 레이저 쏘는곳
  if (input[i] === "(" && input[i + 1] === ")") {
    razers.push((2 * i + 1) / 2);
    i++;
  }
  // 막대
  else {
    if (input[i] === "(") {
      stack.push(i);
    }
    if (input[i] === ")") {
      const start = stack.pop();
      sticks.push([start, i]);
    }
  }
}

sticks.forEach((stick) => {
  let cut = 1;
  razers.forEach((razer) => {
    if (stick[0] < razer && stick[1] > razer) {
      cut++;
    }
  });
  answer += cut;
});
console.log(answer);

// 이걸...어케 해야되지...
// 열고 닫히는걸로 뭘 만들순있는데, 이게 상하관계가 있으니까 흠...
// 레이저의 위치를 뽑을순있다.
// 각 괄호 하나당 길이 1로 생각하고.
// 레이저의 위치와 각 쇠막대의 위치를 따로 객체에 저장해보자.
