// 어제 날짜 가져오기
const getYesterday = () => {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1); // 어제 날짜
    console.log(yesterday);

    let year = yesterday.getFullYear(); // 연도 4자리
    let mon = yesterday.getMonth() + 1; // 월 1~12
    let day = yesterday.getDate(); // 일 1~31

    return (year + '-' + String(mon).padStart(2,'0') + '-' + String(day).padStart(2,'0'));
}

const getrankInten = (rankInten) => {
    let sprankInten;
    if(rankInten > 0) sprankInten = `<span class="spr">▲${rankInten}</span>`
    else if (rankInten < 0) sprankInten = `<span class="spb">▼${Math.abs(rankInten)}</span>`
    else sprankInten = '<sapn class="sp">-</span>'
    return sprankInten;
}

// 박스 오피스 가져오기
const getData = (gdt, box) => {
    let apiKey = '';
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${gdt}`;

    // fetch
    fetch(url) // 주소를 검색해서 불러옴
        .then(resp => resp.json())
        .then(data => {
            let boxs = data.boxOfficeResult.dailyBoxOfficeList; // 배열
            let tags = boxs.map(item => `<li class="boxli">
                                        <span class="boxrank">${item.rank}</span>
                                        ${getrankInten(item.rankInten)}
                                        <span>${item.movieNm}</span>
                                        </li>`).join(''); // 10개의 배열, join() - 배열을 묶어줌
            box.innerHTML = tags;
        }) // .then이 끝나야 .then이 실행 됨
        .catch(err => console.log(err));

    console.log(url);
}

document.addEventListener('DOMContentLoaded', () => {
    // 요소 가져오기
    const dt = document.querySelector("#dt");
    const box = document.querySelector("#box");

    // 날짜가 변경될 때
    dt.addEventListener('change', () => {getData(dt.value.replaceAll('-', ''), box)});
    
    // 어제 날짜
    dt.value = getYesterday();
    dt.setAttribute('max', getYesterday());
    
    // 초기 박스오피스 가져오기
    getData(dt.value.replaceAll('-', ''), box);
});