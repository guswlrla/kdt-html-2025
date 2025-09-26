// 데이터 가져오기
const getData = (txt1) => {
    let apiKey = "";
    let keyWord = encodeURIComponent(txt1);
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${apiKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyWord}&_type=json`;

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let imgs = data.response.body.items.item;
            let tags = imgs.map(item => `<div class="imgs">
                                            <img src='${item.galWebImageUrl}'>
                                            <div class="location">
                                            <p id="searchWord">${item.galTitle}<br>
                                            ${item.galPhotographyLocation}</p></div>
                                            </div>`).join('');
            content.innerHTML = tags;
        })
        .catch(err => console.log(err));
    
    console.log(url);
}

document.addEventListener('DOMContentLoaded', () => {
    // 요소 선택
    const txt1 = document.querySelector('#txt1');
    const btOk = document.querySelector('#btOk');
    const btCancel = document.querySelector('#btCancel');
    const content = document.querySelector('#content');

    // 확인 버튼이 눌려지면 데이터 가져오기
    btOk.addEventListener('click', () => {
        getData(txt1.value);
    });

    // 버튼이 눌려지면 텍스트 내용과 content내용 지우기
    btCancel.addEventListener('click', () => {
        content.innerHTML = '';
    })
});