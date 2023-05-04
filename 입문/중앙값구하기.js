function solution(array) {
  array.sort();
  var size = Math.floor(array.length / 2);
  var answer = array[size];
  return answer;
}
