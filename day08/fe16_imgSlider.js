document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('#sec1 > img');
    const pBt = document.getElementById('preBt'); // getElementById()하면 # 쓰면 안됨
    const nBt = document.querySelector('#nxtBt'); // getElementById(), querySelector() 다 쓸 수 있음

    const arrImg = ['html.png', 'js.png', 'css.png', 'react.png'];
    let idx = 0;
    
    // 조금 수정
    const updateBtn = () => {
        if (idx == 0) pBt.disabled = "none";
        else pBt.style.display = "";

        if(idx == arrImg.length-1) nBt.style.display = "none";
        else nBt.style.display = "";
    };
    
    const updateImg = () => {
        img.setAttribute('src', `../img/${arrImg[idx]}`);
        img.setAttribute('alt', arrImg[idx].split('.')[0]); // 'html.png'일때 'html'과 'png'로 분리
        // split()을 하면 배열이 됨, 0번째 인덱스인 html을 가져옴

        updateBtn();
    }
    
    pBt.addEventListener('click', (e) => {
        idx--;
        if(idx < 0) {
            idx = arrImg.length-1;
        }
        updateImg();
    });
    
    nBt.addEventListener('click', (e) => {
        idx++;
        if(idx >= arrImg.length) {
            idx = 0;
        }
        updateImg();
    });
    

    
});
