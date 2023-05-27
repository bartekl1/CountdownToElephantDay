var darkThemeSelect = document.querySelector('#dark-theme-select');
var centerSiteVerticallyCheckbox = document.querySelector('#centerSiteVertically');
var scaleInput = document.querySelector('#scale');

var themeSelect = document.querySelector('#theme-select');

const verticallyCenterSiteCSS = `
html, body {
    height: 100%;
}

html {
    display: table;
    margin: auto;
}

body {
    display: table-cell;
    vertical-align: middle;
}
`;

var verticallyCenterSiteCSSElement = document.querySelector('#vertically-center-site-css');
var scaleCSSElement = document.querySelector('#scale-css');

var urlString = window.location.href;
var url = new URL(urlString);
var widgetMode = url.searchParams.get("widget");
var centerURL = url.searchParams.get("center");
var scaleURL = url.searchParams.get("scale");

function setAppearanceForm() {
    if (localStorage.getItem('dark-theme') !== null) {
        darkThemeSelect.value = localStorage.getItem('dark-theme');
    } else {
        darkThemeSelect.value = 'auto';
    }

    if (localStorage.getItem('scale') !== null) {
        scaleInput.value = localStorage.getItem('scale');
    } else {
        scaleInput.value = 1;
    }

    document.querySelector('#site-background').value = (localStorage.getItem('site-background') || 'default');

    document.querySelector('#background-color').parentElement.classList.add('d-none');
    document.querySelector('#background-url').parentElement.classList.add('d-none');

    if (localStorage.getItem('site-background') == 'custom-color') {
        document.querySelector('#background-color').parentElement.classList.remove('d-none');
    } else if ((localStorage.getItem('site-background') || 'default') != 'default') {
        document.querySelector('#background-url').parentElement.classList.remove('d-none');
    }
    document.querySelector('#background-color').value = (localStorage.getItem('background-color') || '#9acd32');
    document.querySelector('#background-url').value = localStorage.getItem('background-url');

    centerSiteVerticallyCheckbox.checked = localStorage.getItem('center-site-vertically') == 'true';

    themeSelect.value = localStorage.getItem('theme') || 'default';

    switch (localStorage.getItem('theme') || 'default') {
        case 'default':
            document.querySelectorAll('.color-setting').forEach((e) => { e.value = e.getAttribute('default-value'); e.disabled = true; });
            break;

        case 'white-black':
            document.querySelectorAll('.color-setting').forEach((e) => { e.value = e.getAttribute('white-black-value'); e.disabled = true; });
            break;

        case 'black-white':
            document.querySelectorAll('.color-setting').forEach((e) => { e.value = e.getAttribute('black-white-value'); e.disabled = true; });
            break;
    
        default:
            document.querySelectorAll('.color-setting').forEach((e) => { e.value = localStorage.getItem(`css-variable${e.getAttribute('css-variable')}`); e.disabled = false; });
            break;
    }

    if (localStorage.getItem('countdown-border-width') !== null) {
        document.querySelector('#countdown-border-width').value = localStorage.getItem('countdown-border-width').split('px')[0];
    } else {
        document.querySelector('#countdown-border-width').value = 5;
    }

    if (localStorage.getItem('countdown-border-style') !== null) {
        document.querySelector('#countdown-border-style').value = localStorage.getItem('countdown-border-style');
    } else {
        document.querySelector('#countdown-border-style').value = 'solid';
    }

    if (localStorage.getItem('display-today-datetime') == 'false') {
        document.querySelector('#display-today-datetime').checked = false;
    } else {
        document.querySelector('#display-today-datetime').checked = true;
    }

    if (localStorage.getItem('display-elephant-day-datetime') == 'false') {
        document.querySelector('#display-elephant-day-datetime').checked = false;
    } else {
        document.querySelector('#display-elephant-day-datetime').checked = true;
    }

    document.querySelector('#countdown-shadow').checked = localStorage.getItem('countdown-shadow') == 'true';
    document.querySelector('#outline-icon').checked = localStorage.getItem('outline-icon') == 'true';

    if (localStorage.getItem('menu-buttons-appearance') !== null) {
        document.querySelector('#menu-buttons-appearance').value = localStorage.getItem('menu-buttons-appearance');
    } else {
        document.querySelector('#menu-buttons-appearance').value = 'primary';
    }

    document.querySelectorAll('.color-setting-button').forEach((e) => { e.value = localStorage.getItem(`css-variable${e.getAttribute('css-variable')}`); });

    if (localStorage.getItem('menu-buttons-appearance') == 'custom') {
        document.querySelector('#buttons-colors').classList.remove('d-none');
    } else {
        document.querySelector('#buttons-colors').classList.add('d-none');
    }
}

function saveAppearance() {
    if (darkThemeSelect.value != 'auto') {
        localStorage.setItem('dark-theme', darkThemeSelect.value);
    } else {
        localStorage.removeItem('dark-theme');
    }

    if (centerSiteVerticallyCheckbox.checked) {
        localStorage.setItem('center-site-vertically', 'true');
    } else {
        localStorage.removeItem('center-site-vertically');
    }

    if (scaleInput.value != 1 && scaleInput.value != '') {
        localStorage.setItem('scale', scaleInput.value);
    } else {
        localStorage.removeItem('scale');
    }

    if (document.querySelector('#site-background').value != 'default') {
        localStorage.setItem('site-background', document.querySelector('#site-background').value);
    } else {
        localStorage.removeItem('site-background');
    }
    if (document.querySelector('#site-background').value == 'custom-color') {
        localStorage.setItem('background-color', document.querySelector('#background-color').value);
    } else if (document.querySelector('#site-background').value != 'default') {
        localStorage.setItem('background-url', document.querySelector('#background-url').value);
    }

    localStorage.setItem('theme', themeSelect.value);

    document.querySelectorAll('.color-setting').forEach((e) => { localStorage.setItem(`css-variable${e.getAttribute('css-variable')}`, e.value); });

    if (document.querySelector('#countdown-border-width').value !== 5) {
        localStorage.setItem('countdown-border-width', document.querySelector('#countdown-border-width').value + 'px');
    } else {
        localStorage.removeItem('countdown-border-width');
    }

    if (document.querySelector('#countdown-border-style').value !== 'solid') {
        localStorage.setItem('countdown-border-style', document.querySelector('#countdown-border-style').value);
    } else {
        localStorage.removeItem('countdown-border-style');
    }

    if (!(document.querySelector('#display-today-datetime').checked)) {
        localStorage.setItem('display-today-datetime', 'false');
    } else {
        localStorage.removeItem('display-today-datetime');
    }

    if (!(document.querySelector('#display-elephant-day-datetime').checked)) {
        localStorage.setItem('display-elephant-day-datetime', 'false');
    } else {
        localStorage.removeItem('display-elephant-day-datetime');
    }

    if (document.querySelector('#countdown-shadow').checked) {
        localStorage.setItem('countdown-shadow', 'true');
    } else {
        localStorage.removeItem('countdown-shadow');
    }
    if (document.querySelector('#outline-icon').checked) {
        localStorage.setItem('outline-icon', 'true');
    } else {
        localStorage.removeItem('outline-icon');
    }

    if (document.querySelector('#menu-buttons-appearance').value !== 'primary') {
        localStorage.setItem('menu-buttons-appearance', document.querySelector('#menu-buttons-appearance').value);
    } else {
        localStorage.removeItem('menu-buttons-appearance');
    }

    document.querySelectorAll('.color-setting-button').forEach((e) => { localStorage.setItem(`css-variable${e.getAttribute('css-variable')}`, e.value); });

    loadAppearance();
}

function resetAppearance() {
    localStorage.removeItem('dark-theme');

    localStorage.removeItem('scale');

    localStorage.removeItem('center-site-vertically');

    localStorage.removeItem('site-background');
    localStorage.removeItem('background-color');
    localStorage.removeItem('background-url');

    localStorage.removeItem('theme');
    localStorage.removeItem('custom-theme');

    localStorage.removeItem('countdown-border-width');
    localStorage.removeItem('countdown-border-style');
    localStorage.removeItem('display-today-datetime');
    localStorage.removeItem('display-elephant-day-datetime');

    localStorage.removeItem('countdown-shadow')
    localStorage.removeItem('outline-icon')

    localStorage.removeItem('menu-buttons-appearance');

    for (var key in localStorage){
        if (key.startsWith('css-variable')) {
            localStorage.removeItem(key);
        }
    }

    setAppearanceForm();

    loadAppearance();
}

function loadAppearance() {
    var centerLocalStorage = localStorage.getItem('center-site-vertically');

    verticallyCenterSiteCSSElement.innerHTML = '';

    if (centerURL != null) {
        if (centerURL == 'true') {
            verticallyCenterSiteCSSElement.innerHTML = verticallyCenterSiteCSS;
        }
    } else if (widgetMode != 'true' && widgetMode != 'without_link') {
        if (centerLocalStorage == 'true') {
            verticallyCenterSiteCSSElement.innerHTML = verticallyCenterSiteCSS;
        }
    }

    var scaleLocalStorage = localStorage.getItem('scale');

    scaleCSSElement.innerHTML = '';

    if (scaleURL != null) {
        scaleCSSElement.innerHTML = `
        #main {
            scale: ${scaleURL};
        }
        `;
    } else if (widgetMode != 'true' && widgetMode != 'without_link') {
        if (scaleLocalStorage != null) {
            scaleCSSElement.innerHTML = `
            #main {
                scale: ${scaleLocalStorage};
            }
            `;
        }
    }

    if (localStorage.getItem('dark-theme')) {
        document.querySelector('html').setAttribute('data-bs-theme', localStorage.getItem('dark-theme'));
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector('html').setAttribute('data-bs-theme', 'dark');
        } else {
            document.querySelector('html').setAttribute('data-bs-theme', 'light');
        }
    }

    document.documentElement.style.removeProperty('--background-image');
    document.querySelector('#background-video-div').classList.add('d-none');
    document.querySelector('#background-youtube-video-div').classList.add('d-none');
    document.querySelector('#background-website-div').classList.add('d-none');
    
    switch (localStorage.getItem('site-background') || 'default') {
        case 'default':
            document.documentElement.style.setProperty('--body-bg-color', '#9acd32');
            break;

        case 'custom-color':
            document.documentElement.style.setProperty('--body-bg-color', localStorage.getItem('background-color'));
            break;

        case 'image':
            document.documentElement.style.setProperty('--background-image', `url(${localStorage.getItem('background-url')})`);
            break;

        case 'video':
            document.querySelector('#background-video-div').innerHTML = `
            <video class="background" autoplay muted loop>
                <source src="${localStorage.getItem('background-url')}">
            </video>
            `;
            document.querySelector('#background-video-div').classList.remove('d-none');
            break;

        case 'youtube-video':
            try {
                document.querySelector('#background-youtube-video-div').innerHTML = `
                <iframe class="background" width="560" height="315" src="https://www.youtube.com/embed/${localStorage.getItem('background-url').match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/)[6]}?autoplay=1&mute=1&playlist=${localStorage.getItem('background-url').match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/)[6]}&loop=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                `;
                document.querySelector('#background-youtube-video-div').classList.remove('d-none');
            } catch {
                document.querySelector('#background-youtube-video-div').classList.add('d-none');
            }
            break;

        case 'website':
            document.querySelector('#background-website-div').innerHTML = `
            <iframe class="background" src="${localStorage.getItem('background-url')}">
            `;
            document.querySelector('#background-website-div').classList.remove('d-none');
            break;
    }

    switch (localStorage.getItem('theme') || 'default') {
        case 'default':
            document.querySelectorAll('.color-setting').forEach((e) => { document.documentElement.style.setProperty(e.getAttribute('css-variable'), e.getAttribute('default-value')); });
            break;

        case 'white-black':
            document.querySelectorAll('.color-setting').forEach((e) => { document.documentElement.style.setProperty(e.getAttribute('css-variable'), e.getAttribute('white-black-value')); });
            break;

        case 'black-white':
            document.querySelectorAll('.color-setting').forEach((e) => { document.documentElement.style.setProperty(e.getAttribute('css-variable'), e.getAttribute('black-white-value')); });
            break;
    
        default:
            document.querySelectorAll('.color-setting').forEach((e) => { document.documentElement.style.setProperty(e.getAttribute('css-variable'), localStorage.getItem(`css-variable${e.getAttribute('css-variable')}`)); });
            break;
    }

    document.documentElement.style.setProperty('--countdown-border-width', localStorage.getItem('countdown-border-width') || '5px');
    document.documentElement.style.setProperty('--countdown-border-style', localStorage.getItem('countdown-border-style') || 'solid');

    if (localStorage.getItem('display-today-datetime') == 'false') {
        document.documentElement.style.setProperty('--display-today-datetime', 'none');
    } else {
        document.documentElement.style.setProperty('--display-today-datetime', 'block');
    }

    if (localStorage.getItem('display-elephant-day-datetime') == 'false') {
        document.documentElement.style.setProperty('--display-elephant-day-datetime', 'none');
    } else {
        document.documentElement.style.setProperty('--display-elephant-day-datetime', 'block');
    }

    if (localStorage.getItem('countdown-shadow') == 'true') {
        var style = document.querySelector('#shadow-css');
        style.innerHTML = `
        .countdown {
            filter: drop-shadow(2px 4px 6px var(--countdown-border-color));
        }
        `;
    } else {
        document.querySelector('#shadow-css').innerHTML = '';
    }
    if (localStorage.getItem('outline-icon') == 'true') {
        document.querySelector('#site-icon').classList.add('d-none');
        document.querySelector('#site-icon-outline').classList.remove('d-none');
    } else {
        document.querySelector('#site-icon').classList.remove('d-none');
        document.querySelector('#site-icon-outline').classList.add('d-none');
    }

    document.querySelectorAll('.menu-button').forEach((e) => { e.className = e.className.replace(/btn-.* /, `btn-${(localStorage.getItem('menu-buttons-appearance') || 'primary')} `); });
    
    document.querySelectorAll('.color-setting-button').forEach((e) => { document.documentElement.style.setProperty(e.getAttribute('css-variable'), localStorage.getItem(`css-variable${e.getAttribute('css-variable')}`)); });

    setAppearanceForm();
}

loadAppearance();

document.querySelectorAll(['.appearance-setting', '#theme-select', '.css-variable-setting', '.color-setting', '.color-setting-button']).forEach((e) => e.addEventListener('change', saveAppearance));