function solution(n) {
  var answer = 0;
  if (n / 7 <= 1) answer = 1;
  else answer = Math.floor(n / 7) + 1;
  return answer;
}
