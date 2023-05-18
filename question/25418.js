// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fileName = __filename.split("/question/")[1].split(".js")[0];
const dir = `../test/${fileName}.txt`;
// const dir = "/dev/stdin";

const fs = require("fs");
const input = fs.readFileSync(dir).toString().trim().split(" ");

const [a, k] = input.map((v) => Number(v));

const find = (a, k) => {
  const dp = {
    [a]: 0,
  };
  const need = [a];

  while (!!need.length) {
    const target = need.pop();
    const added = target + 1;
    const multiple = target * 2;

    if ((!dp[multiple] || dp[target] + 1 < dp[multiple]) && multiple < k) {
      dp[multiple] = dp[target] + 1;
      need.push(multiple);
    } else if (
      multiple === k &&
      (!dp[multiple] || dp[target] + 1 < dp[multiple])
    )
      dp[multiple] = dp[target] + 1;

    if ((!dp[added] || dp[target] + 1 < dp[added]) && added < k) {
      dp[added] = dp[target] + 1;
      need.push(added);
    } else if (added === k && (!dp[added] || dp[target] + 1 < dp[added]))
      dp[added] = dp[target] + 1;
  }

  return dp[k];
};

const answer = find(a, k);
console.log(answer);
