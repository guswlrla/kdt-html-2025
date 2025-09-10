document.addEventListener('DOMContentLoaded', () => {
    // 이미지 가져오기
    const img = document.querySelector('img');
    // input 가져오기
    const txt1 = document.querySelector('#txt1');
    // button 가져오기
    const bt = document.querySelector('button');
    let flag = false;
    let n;

    // 공통함수
    const init = (flagv, txt1dis, btv, imgv) => {
        flag = flagv;
        txt1.style.display = txt1dis;
        bt.textContent = btv;
        img.setAttribute('src', `../img/${imgv}.png`);
    }

    // 버튼이 눌러졌을 때
    bt.addEventListener('click', (e) => {
        // 자기 자신이 안돌게 막음
        e.preventDefault();

        // 랜덤 수 생성(한번만 클릭됐는지 확인)
        if(flag == false) {
            n = Math.floor(Math.random() * 100) + 1; // 1~100
            init(true, 'block', '확인', 'what');
        }
    
    
        console.log(`n=${n}`)
        // 랜덤수와 값 비교해서 이미지 보여줌
        if(n > parseInt(txt1.value)) {
            img.setAttribute('src', '../img/up.png');
        }
        else if(n < parseInt(txt1.value)) {
            img.setAttribute('src', '../img/down.png');
        }
        else if(n == parseInt(txt1.value)) {
            // 맞추면 다시 하도록
            txt1.value = ''
            init(false, 'none', '다시 시작하기', 'good');
        }
        txt1.focus();
    });
});