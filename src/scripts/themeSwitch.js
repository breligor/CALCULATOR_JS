const themeSwitchBtn = document.querySelector('.themeSwitch-btn');
const link = document.querySelector('[title="theme"]');

function applyTheme(theme) {
    const lightTheme = '/src/style/css/light.css';
    const darkTheme = '/src/style/css/dark.css';
    let currentTheme = link.getAttribute('href');
    theme = '';

    if (currentTheme === lightTheme) {
        currentTheme = darkTheme;
        theme = 'dark';
    } else {
        currentTheme = lightTheme;
        theme = 'light';
    }
    link.setAttribute('href', currentTheme);
}

themeSwitchBtn.addEventListener('click', () => {
    applyTheme();
});
