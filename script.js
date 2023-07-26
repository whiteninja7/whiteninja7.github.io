const languageToggle = document.getElementById('language-toggle');
let currentLanguage = 'en';

languageToggle.addEventListener('click', () => {
    if (currentLanguage === 'en') {
        switchToArabic();
        currentLanguage = 'ar';
        languageToggle.innerText = 'Switch to English';
    } else {
        switchToEnglish();
        currentLanguage = 'en';
        languageToggle.innerText = 'Switch to Arabic';
    }
});

function switchToArabic() {
    // Update content to Arabic
    document.querySelector('h1').innerText = 'يري';
    document.querySelectorAll('a').forEach(a => {
        switch (a.innerText) {
            case 'Home':
                a.innerText = 'الصفحة الرئيسية';
                break;
            case 'About':
                a.innerText = 'حول';
                break;
            case 'Contact':
                a.innerText = 'اتصل';
                break;
            case 'Videos':
                a.innerText = 'مقاطع';
                break;
        }
    });
    document.querySelector('h2').innerText = 'قناة يري';
    document.querySelector('p').innerText = 'Ury هو Minecraft YouTuber رائع مع أكثر من 500000 مشترك. انضم إلى المغامرة واستكشف عالم Minecraft المذهل مع Ury!'
    // Load Arabic font dynamically
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap';
    document.head.appendChild(linkElement);

    // Apply the font to specific elements
    document.querySelector('body').style.fontFamily = 'Cairo, sans-serif';
    document.querySelector('nav').style.fontFamily = 'Cairo, sans-serif';
    document.querySelector('.social-media').style.fontFamily = 'Cairo, sans-serif';
}

function switchToEnglish() {
    // Update content to English
    document.querySelector('h1').innerText = 'Ury';
    document.querySelectorAll('a').forEach(a => {
        switch (a.innerText) {
            case 'الصفحة الرئيسية':
                a.innerText = 'Home';
                break;
            case 'حول':
                a.innerText = 'About';
                break;
            case 'اتصل':
                a.innerText = 'Contact';
                break;
            case 'مقاطع':
                a.innerText = 'Videos';
                break;
        }
    });
    document.querySelector('h2').innerText = "Welcome to Ury's channel";
    document.querySelector('p').innerText = 'Ury is a cool Minecraft YouTuber with over 500,000 subscribers. Join the adventure and explore the amazing world of Minecraft with Ury!';

    // Remove the Arabic font link and reset font family
    const arabicFontLink = document.querySelector('link[href*="family=Cairo"]');
    if (arabicFontLink) {
        arabicFontLink.remove();
    }
    document.querySelector('body').style.fontFamily = 'Poppins, sans-serif';
    document.querySelector('nav').style.fontFamily = 'Poppins, sans-serif';
    document.querySelector('.social-media').style.fontFamily = 'Poppins, sans-serif';
}
