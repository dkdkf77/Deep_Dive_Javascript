console.log(score); // undefined가 뜬다 그 이유는 순차적으로 읽기 때문이다.

var score; //1. 변수 선언
score = 80; //2. 값의 할당

console.log(score); //80
