// Placeholder for future JavaScript functionality
console.log("Welcome to My Blog!");

let slideIndex = 0;
var timer = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');

    clearTimeout(timer)
    timer = setTimeout(showSlides, 5000); // 5초마다 슬라이드 전환
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
}

// 라이트/다크 모드 전환 기능 추가
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    //document.querySelector('.footer').classList.toggle('dark-mode');

    const navLinks = document.querySelectorAll('.desktop-nav ul li a, .mobile-nav ul li a');
    navLinks.forEach(link => link.classList.toggle('dark-mode'));

    const bannerOverlays = document.querySelectorAll('.banner-overlay');
    bannerOverlays.forEach(overlay => overlay.classList.toggle('dark-mode'));

    // 다크 모드 상태를 localStorage에 저장
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('themeMode', 'dark-mode');
    } else {
        localStorage.removeItem('themeMode');
    }
}

// 초기 로드 시 저장된 모드를 적용하는 함수 추가
(function applySavedMode() {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode === 'dark-mode') {
        document.body.classList.add('dark-mode');
        document.querySelector('.navbar').classList.add('dark-mode');
        //document.querySelector('.footer').classList.add('dark-mode');

        const navLinks = document.querySelectorAll('.desktop-nav ul li a, .mobile-nav ul li a');
        navLinks.forEach(link => link.classList.add('dark-mode'));

        const bannerOverlays = document.querySelectorAll('.banner-overlay');
        bannerOverlays.forEach(overlay => overlay.classList.add('dark-mode'));
    }
})();


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
        languageButton.setAttribute('src', '../images/usa-flag.png');
        localStorage.setItem('language', 'EN');
    } else {
        languageButton.setAttribute('src', '../images/korea-flag.png');
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
            languageButton.setAttribute('src', '../images/usa-flag.png');
        } else {
            element.textContent = element.getAttribute('data-lang-kr'); // 한국어로 설정
            languageButton.setAttribute('src', '../images/korea-flag.png');
        }
    });
})();


