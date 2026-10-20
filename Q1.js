const num=123;

const answer1=+(num%2==0||num%3==0||num%5==0);
const answer2=+((num%2==0&&num%3==0)||(num%3==0&&num%5==0)||(num%2==0&&num%5==0))+answer1;
const answer3=+(num%2==0&&num%3==0&&num%5==0)+answer2;

console.log(answer3);