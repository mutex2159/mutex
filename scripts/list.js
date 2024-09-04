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