// DOM의 요소 가져오기
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button');
    const cols = document.querySelectorAll('.col'); // 노드리스트 형태로 갖고옴

    let arrNum = [0,0,0,0,0,0,0,0,1]; // 폭탄이 있는 곳을 1로 둠
    let flag = false; // arrNum을 섞기 위한 변수
    let idx; // 현재 선택된 위치 변수
    let cnt = 0; // 몇 번 눌려졌는지 카운트 변수

    // 초기화
    const init = () => {
        cnt = 0;
        flag = false;
        btn.disabled = false;
    }

    // 폭탄섞기 버튼
    btn.addEventListener('click', (e) => {
        if(btn.innerHTML == '다시하기' || btn.innerHTML == '성공!') {
            for(let col of cols) {
                col.innerHTML = '';
            }
            // cnt = 0;
            // flag = false;
            // btn.disabled = false;
            init();
        }

        // shuffle
        arrNum.sort(() => Math.random() - 0.5);
        flag = true;
        btn.innerHTML = '게임중...';
        console.log(arrNum);

        if(flag) btn.disabled = true; // 게임중 버튼 조작(폭탄 섞기) 금지

        // 보드선택
        for(let col of cols) {
            col.addEventListener('click', () => {
                if (!flag) return;  // 시작 전, 끝난 후 더이상 눌려지지 않도록

                idx = parseInt(col.getAttribute('id').replace('col', '')); // id가 col3이라면 'col'을 제거하고 3만 정수로 변환해 idx에 넣음
                if (col.innerHTML !== '') return;
                
                if (arrNum[idx] == 0) { // 폭탄 없는 곳
                    cnt++; // 몇 번 눌렀는지 확인
                    col.innerHTML = '💖';
                    if(cnt == 8) { // 지뢰빼고 다 찾음
                        btn.innerHTML = '성공!';
                        // btn.disabled = false;
                        // flag = false;
                        init();
                    }
                }
                else {
                    col.innerHTML = '💥';
                    btn.innerHTML = '다시하기';
                    // cnt = 0;
                    // flag = false;
                    // btn.disabled = false;
                    init();
                }
                console.log(cnt);
            });
        }
    });
});
