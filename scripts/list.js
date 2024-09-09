// 게시글 정보 (posts 디렉토리 내의 파일들에 대한 정보)
const posts = [
    { title: "대한민국을 빛내는 축구 스타, 손흥민 선수의 이야기", url: "posts/first.html" },
    { title: "포스트 제목 2", url: "posts/post2.html" },
    { title: "포스트 제목 3", url: "posts/post3.html" },
    // 필요에 따라 추가
];

// 동적으로 목록 생성
const postList = document.getElementById('post-list');
posts.forEach((post, index) => {
    const row = document.createElement('tr');

    const numberCell = document.createElement('td');
    numberCell.textContent = index + 1;

    const titleCell = document.createElement('td');
    const link = document.createElement('a');
    link.textContent = post.title;
    link.href = post.url;
    titleCell.appendChild(link);

    row.appendChild(numberCell);
    row.appendChild(titleCell);

    postList.appendChild(row);
});

function toggleLanguage() {
    const languageButton = document.getElementById('toggle-language');
    const langContents = document.querySelectorAll('.lang-content');
    
    let currentLanguage = languageButton.getAttribute('src').includes('korea-flag.png') ? 'KR' : 'EN';

    // 모든 lang-content 클래스를 가진 요소의 텍스트를 전환
    langContents.forEach(element => {
        if (currentLanguage === 'KR') {
            element.textContent = element.getAttribute('data-lang-en'); // 영어로 전환
        } else {
            element.textContent = element.getAttribute('data-lang-kr'); // 한국어로 전환
        }
    });

    // 버튼 이미지 전환
    if (currentLanguage === 'KR') {
        languageButton.setAttribute('src', 'images/usa-flag.png');
        localStorage.setItem('language', 'EN');
    } else {
        languageButton.setAttribute('src', 'images/korea-flag.png');
        localStorage.setItem('language', 'KR');
    }
}

// 페이지 로드 시 저장된 언어 적용
(function applySavedLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'KR';
    const langContents = document.querySelectorAll('.lang-content');
    const languageButton = document.getElementById('toggle-language');
    
    langContents.forEach(element => {
        if (savedLanguage === 'EN') {
            element.textContent = element.getAttribute('data-lang-en'); // 영어로 설정
            languageButton.setAttribute('src', 'images/usa-flag.png');
        } else {
            element.textContent = element.getAttribute('data-lang-kr'); // 한국어로 설정
            languageButton.setAttribute('src', 'images/korea-flag.png');
        }
    });
})();