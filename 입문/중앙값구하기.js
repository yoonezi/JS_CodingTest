function solution(array) {
  array.sort((a, b) => a - b);
  var size = Math.floor(array.length / 2);
  var answer = array[size];
  return answer;
}
