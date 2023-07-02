const translation = [
    'Countdown to Elephant Day',
    'Today',
    'Elephant Day',
    'Left',
    'Full screen',
    'Don\'t turn off screen',
    'Settings',
    'General',
    'Advanced',
    'Appearance',
    'About',
    'Changelog',
    'Visit counter',
    'Update frequency (milliseconds)',
    'Reset all settings',
    'Do you want to reset all settings?',
    'No',
    'Yes',
    'Date language',
    'Website language',
    'Browser language',
    'Custom',
    'Language should be specified in BCP 47 format.',
    'list of available languages',
    'Custom CSS code',
    'Custom Javascript code',
    'To make sure the code is applied correctly add <code>!important</code> at the end of each line.',
    'The code will start working after refreshing the website.',
    'Dark theme',
    'Automatic (browser theme)',
    'Light',
    'Dark',
    'Scale',
    'Center the website vertically',
    'Website background',
    'Default color (#9acd32)',
    'Custom color',
    'Image',
    'Video',
    'YouTube video',
    'Website',
    'Color',
    'Theme',
    'Default',
    'White & black',
    'Black & white',
    'Custom',
    'Website title color',
    'Countdown font color',
    'Countdown background color',
    'Countdown border color',
    '"Left" header color',
    'Time units color',
    'Dates labels color',
    'Dates color',
    'Countdown border width',
    'Countdown border style',
    'None',
    'Solid',
    'Double',
    'Dashed',
    'Dotted',
    'Inset',
    'Outset',
    'Groove',
    'Ridge',
    'Display today date',
    'Display Elephant Day date',
    'Countdown shadow',
    'Icon outline',
    'Elephant cursor',
    'Menu buttons style',
    'Custom',
    'Value / State',
    'Normal',
    'Hover',
    'Active',
    'Text',
    'Background',
    'Border',
    'Countdown to Elephant Day website',
    'GitHub repository',
    'Version',
    'during creation',
    'Author',
    'current version',
    'Open source software used in developing the website',
    'Font',
    'You are offline',
    'Old menu'
];

function getLanguage() {
    var url = new URL(window.location.href);
    var searchParams = url.searchParams;
    if (searchParams.get('lang') != null) {
        return searchParams.get('lang');
    } else {
        if (localStorage.getItem('language') != undefined) {
            return localStorage.getItem('language');
        }

        return 'pl';
    }
}


function translate() {
    document.querySelector('html').lang = 'en';
    document.querySelector('title').innerHTML = 'Countdown to Elephant Day';
    document.querySelectorAll('[text-id]').forEach((e) => {
        e.innerHTML = translation[e.getAttribute('text-id')];
    });
}

function translateIfRequired() {
    if (getLanguage() == 'en') {
        translate();
    }
}

function showLanguageInfo() {
    if (localStorage.getItem('language') == undefined && navigator.language.split('-')[0] != 'pl' && localStorage.getItem('language-popover-closed') == undefined) {
        var element;
        if (localStorage.getItem('old-menu') == 'true') {
            if (window.getComputedStyle(document.querySelector('#top-menu'), null).display == 'block') {
                element = document.querySelector('#options-button');
            } else {
                element = document.querySelector('#top-menu-open');
            }
        } else {
            element = document.querySelector('#options-button2');
        }
        var popover = new bootstrap.Popover(element, {
            content: '<p class="language-popover">You can change language in the settings.</p><button class="btn btn-secondary language-popover">OK</button>',
            placement: 'bottom',
            html: true,
            sanitize: false,
            customClass: 'language-popover'
        });
        popover.show();
        document.querySelector('button.language-popover').addEventListener('click', () => {
            popover.dispose();
            localStorage.setItem('language-popover-closed', 'true');
        });
    }
}

addEventListener('load', translateIfRequired);
addEventListener('load', showLanguageInfo);
