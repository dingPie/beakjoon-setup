// // 3. 여러 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split("\n");

const costs = input[1].split(" ").map((v) => Number(v));
const points = input[2].split(" ").map((v) => Number(v));

const arr = costs.map((v, i) => ({ cost: v, point: points[i] }));

const dp = Array(100).fill(0); // dp를 기록할 100개?

arr.forEach((v) => {
  if (dp[v.cost] !== undefined) dp[v.cost] = v.point;
});

const gets = (arr, pick, energe = 100) => {
  const result = [];
  if (energe < 0) return [];
  if (pick === 1) return arr.map((v) => [v]);

  arr.forEach((fix, idx, origin) => {
    const rest = arr.slice(idx + 1);
    const combi = gets(rest, pick - 1, energe - fix.cost);
    const attached = combi.map((v) => [fix, ...v]);
    result.push(...attached);
  });
  return result;
};

for (let p = 2; p <= Number(input[0]); p++) {
  const test = gets(arr, p).map((v) => {
    let sumCost = 0;
    let sumPoint = 0;
    v.forEach((j) => {
      sumCost += j.cost;
      sumPoint += j.point;
    });
    return {
      cost: sumCost,
      point: sumPoint,
    };
  });

  test.forEach((v) => {
    if (v.cost < 100 && v.point > dp[v.cost]) dp[v.cost] = v.point;
  });
}

console.log(Math.max(...dp));

// 20명 이하이므로 dp만 잘 활용한다면 몇번 반복해도 됨

// 조합 문제로 풒 수 있긴 할텐데, 이게 어디가 dp지?

// n을 가지고 시작헸을 떄 얻을 수 있는 최대?
// 병사 문제 처럼 풀 수 있을까?

// 가질 수 없을 떄 가장 효율이 안 좋은? 비싼? 걸 뺼수도 있지만..그건 별론거같고
// 비용이 작은 것 부터 시작해서... 뺴는건 가장 fit 한걸뺄 수 없다.
// n 만 빼서도 가능은 한데. 그거 하나 뺀다고 뭐가달라지나.
// 전부 합쳤을때, n개를 빼서 합쳤을때...
// 0번부터 1999번까지 index해서 하는건?
// 그다음 100이하 잘라서 처리?

// 조합은 모든 조합을 처리하는건 비효율적일것 같은데.
// 어떻게 수를 만들건지 생각해보자.
// 조합을 구할때 100 미만으로?

// 메모리 초과나네...
// 답지보자...
