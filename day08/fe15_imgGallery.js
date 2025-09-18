document.addEventListener('DOMContentLoaded', () => {
    // 메인이미지 가져오기
    const main_img = document.querySelector('#sec1 > img');
    // 썸네일이미지 가져오기
    const thum_img = document.querySelectorAll('#sec2 > img'); // 여러개를 잡아야 하니까 querySelectorAll, 노드리스트
    
    // 이벤트처리
    for(let img of thum_img) {
        img.addEventListener('click', (e) => { 
            main_img.setAttribute('src', img.getAttribute('src')) // setAttribute - 속성을 바꿈(src 속성)
            main_img.setAttribute('alt', img.getAttribute('alt')) // getAttribute - 속성 값을 갖고 옴
        });
    }


});