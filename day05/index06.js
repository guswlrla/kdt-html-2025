// 회문
const check1 = (e) => {
    // 0. 버튼의 submit 기능을 없앰
    // e.preventDefault();

    // 1. 사용자가 입력한 내용을 가져오기
    const inputV = document.getElementById('txt1').value; // id가 'txt1'인 걸 갖고오기

    // 2. 사용자가 입력한 문자열을 뒤집기
    // console.log(typeof(inputV));
    //console.log(inputV.length);
    //console.log(inputV[0]); // = console.log(charAt(0));이랑 똑같음

    // 입력한 문자열에서 공백 제거
    let inputVt = inputV.replaceAll(' ','');
    let resultV = ''; // 여기에 입력 문자열을 넣음
    // for(let i = inputVt.length-1; i >= 0; i--) {
    //     console.log(inputVt[i]);
    //     resultV = resultV + inputVt[i];
    // }
    // 위의 코드를 밑의 코드로 쓸 수 있음
    resultV = inputVt.split('').reverse().join(''); // join() -> 배열 안에 있는 내용을 붙여서 문자열로 만들어줌
    console.log(resultV);

    // 3. 사용자가 입력한 문자열과 뒤집은 문자열이 같은지 비교
    // 3-1. 결과를 input 요소에 출력
    if(inputVt == resultV)
        document.getElementById('txt2').value = `"${inputV}"는 회문입니다.`; // input 요소는 .value로 갖고 옴
    else
        document.getElementById('txt2').value = `"${inputV}"는 회문이 아닙니다.`;

    //3-2. 결과를 div 요소에 출력
    document.getElementById('msg').innerHTML = `<span>"${inputV}"</span>는 ${inputVt == resultV ? "회문입니다." : "회문이 아닙니다."}`; // 일반 태그는 .innerHTML로 갖고옴
}

const check2 = () => {
    // 1. 사용자가 입력한 문자열 가져오기
    const inputV = document.getElementById('txt1').value;

    // 2. 문자열에서 숫자 인식해서 더하기
    let sum = 0;
    // for(let i = 0; i < inputV.length; i++) {
    //     if(!isNaN(inputV[i])) {// false
    //         sum = sum + parseInt(inputV[i]);
    //     }
    // }

    for (let c of inputV) {
        if(!isNaN(c)) {
            sum = sum +parseInt(c);
        }
    }

    // 3. 합계 출력
    document.getElementById('txt2').value = sum;
    document.getElementById('msg').innerHTML = `합계 =&nbsp;<span>${sum}</span>`;
}

// 취소처리
const check3 = () => {
    document.getElementById('txt1').value = '';
    document.getElementById('txt2').value = '';
    document.getElementById('msg').innerHTML = '';

    document.getElementById('txt1').focus();
}