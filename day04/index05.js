// 기존 방식
// function Hello(n) {
//     if (n == '1') alert("안녕하세요.")
//     else alert("반갑습니다.");

//     console.log('콘솔 출력입니다.');
// }

// 화살표 함수
const Hello = (n) => {
    // ==, ===을 비교(자동 형변환)
    if (n == '1') alert("안녕하세요.")
    else alert("반갑습니다.");

    console.log('콘솔 출력입니다.');
}

const CheckVar = () => {
    // x = 10;
    // var x;

    let x;
    x = 'test'

    const y = 20;
    // console.log('x =' + x);
    console.log(`x = ${typeof(x)}`, `y= ${typeof(y)}`)
    // 달러 뒤에 나오는건 변수값
    console.log(`문자열 ${x}은 문자인가요? ${isNaN('x')}`);
    console.log(`숫자 ${y}은 숫자인가요? ${isNaN('y')}`); // 이상한데

    // var는 변수가 어디에 있어도 노상관인데, let이랑 const는 밑에 있어야하미
}