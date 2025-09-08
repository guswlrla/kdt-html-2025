// 리터럴 표기법
let arr1 = [1, 2, 3];

// Array 생성자를 이용
let arr2 = new Array(1, 2, 3);

// 배열의 크기
 console.log(arr1);
 console.log(`arr1 : ${arr1}`); // 요소만 나옴
 console.log(`arr1의 요소개수 : ${arr1.length}`);

// 배열요소 제거
console.log(arr2)
// arr2 = []; // 밑에 거랑 똑같음
arr2.length = 0; // 배열 초기화
console.log(arr2);

// 배열요소 추가
console.log(arr1);
arr1.push('가');
console.log(arr1);
let arr1Pop = arr1.pop();
console.log(arr1, typeof(arr1));
console.log(arr1Pop, typeof(arr1Pop));

// 배열의 순회
// 1. 
for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[1]);
}

// 2. key(index)값 가져오기
for(let i in arr1) {
    console.log(arr1[i]);
}

// 3. value값 가져오기
for(let item of arr1) {
    console.log(item);
}

// 4. forEach 메소드
arr1.forEach((item, i) => {
    console.log(item, i);
});

// 배열 map 메소드
const arr3 = arr1.map((item) => {
    return item * 2;
})
console.log(arr3);
// 콜백 함수는 파라미터가 1개이면 () 생략 가능, 리턴문만 있을 때는 {}와 return 생략 가능
// 배열만 map을 쓸 수 있음
// 반환된 결과는 배열이 되어야 하고, 배열 요소의 개수는 똑같이 나옴
const arr4 = arr1.map(item => item * 2);
console.log(arr4);

// 콜백함수는 파라미터가 2개가 되면 인덱스를 가져옴
const arr5 = arr1.map((item, i) => item * i);
console.log(arr5);

// fillter
const arr6 = arr1.filter((item) => {
    return item % 2 == 0;
});
console.log(arr6);
// filter는 원래 있던 배열 요소의 개수와 다름
// 마찬가지로 리턴문만 있을 때, {}와 return 생략 가능

// map함수 안쓰고
let arr7 = [];
for (let c of arr1) {
    arr7.push(c * 2);
}
console.log(arr7);

// filter함수 안쓰고
let arr8 = [];
for (let c of arr1) {
    if (c % 2 == 0) arr8.push(c);
}
console.log(arr8);

// concat 함수
const arr9 = arr7.concat(arr8);
console.log('concat 함수');
console.log(arr9);

// join 함수
let s = arr9.join('-');
console.log('join 함수');
console.log(s);
s = arr9.join('');
console.log(s);

// slice 함수
console.log('slice 함수');
console.log(arr9.slice(1,3));

// splice 함수
console.log('splice 함수');
arr9.splice(2, 0, 'A');
console.log(arr9);

// sort
console.log("sort 함수");
arr9.sort();
console.log(arr9);

// tailing 쉼표
console.log('tailing 쉼표');
let arr10 = [1,2,];
console.log(arr10);

// 전개연산자
const arr11 = [...arr7, ...arr8];
console.log("전개연산자");


// 구조분해
let [x, y] = arr10;
console.log(x);
console.log(`x = ${x}, y = ${y}`);