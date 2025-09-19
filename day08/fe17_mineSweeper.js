document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button');
    const cols = document.querySelectorAll('.col');

    let arrNum = [0,0,0,0,0,0,0,0,1]; // 폭탄이 있는 곳을 1로 둠
    let flag = false;
    let idx;
    let cnt = 0;

    // 초기화
    // const init = () => {
    //     flag = false;
    //     cnt = 0;
    //     btn.innerHTML = '폭탄 섞기';
    // }

    // 폭탄섞기 버튼
    btn.addEventListener('click', (e) => {
        // if(btn.innerHTML == '다시하기') init();
        // shuffle
        arrNum.sort(() => Math.random() - 0.5);
        flag = true;
        btn.innerHTML = '게임중...';
        console.log(arrNum);

        if(flag) btn.disabled = true;
    });

    // 보드선택
    for(let col of cols) {
        col.addEventListener('click', () => {
            idx = parseInt(col.getAttribute('id').replace('col', '')); // id가 col3이라면 'col'을 제거하고 3만 정수로 변환해 idx에 넣음
            if (arrNum[idx] == 0) {
                cnt++;
                col.innerHTML = '💖';
            }
        });
    }


    //         if(!flag) cnt == 0;
    //         cnt++;
    //             col.backgroundColor = 'gray';
    //             if (cnt == 8) {
    //                 btn.innerHTML = '다시하기';
    //                 flag = false;
    //             }
    //         else {
    //             col.backgroundColor = 'red';
    //             col.innerHTML = '💥'
    //             btn.innerHTML = '다시하기';
    //             flag = false
    //         }
    
});