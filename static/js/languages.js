const translation = [
    {
        "find": "Odliczanie do Dnia Słonia",
        "replace": "Countdown to Elephant Day",
        "query": ["h1.site-title", "title"]
    },
    {
        "find": "Strona Odliczanie do Dnia Słonia",
        "replace": "Countdown to Elephant Day Website",
        "query": "b"
    },
    {
        "find": "Ustawienia",
        "replace": "Settings",
        "query": ".options-button"
    },
    {
        "find": "Widżet",
        "replace": "Widget",
        "query": ".options-button"
    },
    {
        "find": "Zgłoszenie",
        "replace": "Report",
        "query": ".options-button"
    },
    {
        "find": "Inne wersje",
        "replace": "Other versions",
        "query": ".options-button"
    },
    {
        "find": "O stronie",
        "replace": "About",
        "query": ".options-button"
    },
    {
        "find": "Opcje",
        "replace": "Options",
        "query": [".btn.menu-button", "h5.modal-title"]
    },
    {
        "find": "Dzisiejsza data",
        "replace": "Today date",
        "query": ".date-label"
    },
    {
        "find": "Data Dnia Słonia",
        "replace": "Date of Elephant Day",
        "query": ".date-label"
    },
    {
        "find": "Pozostało",
        "replace": "Left",
        "query": ".left-header"
    },
    {
        "find": "dni",
        "replace": "days",
        "query": ".left-unit"
    },
    {
        "find": "godzin",
        "replace": "hours",
        "query": ".left-unit"
    },
    {
        "find": "minut",
        "replace": "minutes",
        "query": ".left-unit"
    },
    {
        "find": "sekund",
        "replace": "seconds",
        "query": ".left-unit"
    },
    {
        "find": "milisekund",
        "replace": "milliseconds",
        "query": ".left-unit"
    },
    {
        "find": "Resetuj",
        "replace": "Reset",
        "query": "button"
    },
    {
        "find": "Kopiuj",
        "replace": "Copy",
        "query": "button"
    },
    {
        "find": "Pełny ekran",
        "replace": "Full screen",
        "query": ".btn.menu-button"
    },
    {
        "find": "Nie wygaszaj ekranu",
        "replace": "Don't turn off screen",
        "query": ".btn.menu-button"
    },
    {
        "find": "Częstotliwość odświeżania (milisekundy)",
        "replace": "Refresh rate (milliseconds)",
        "query": "label.form-label"
    },
    {
        "find": "Ciemny motyw",
        "replace": "Dark theme",
        "query": "label.form-label"
    },
    {
        "find": "Automatycznie (motyw przeglądarki)",
        "replace": "Automatic (browser theme)",
        "query": "option[value=auto]"
    },
    {
        "find": "Jasny",
        "replace": "Light",
        "query": "option[value=light]"
    },
    {
        "find": "Ciemny",
        "replace": "Dark",
        "query": "option[value=dark]"
    },
    {
        "find": "Kod HTML",
        "replace": "HTML code",
        "query": "label.form-label"
    },
    {
        "find": "Wersja",
        "replace": "Version",
        "query": ["button.nav-link", "p"]
    },
    {
        "find": "Rejestr zmian",
        "replace": "Changelog",
        "query": ["button.nav-link", "p"]
    },
    {
        "find": "bieżąca wersja",
        "replace": "current version",
        "query": ".h3"
    },
    {
        "find": "Biblioteki",
        "replace": "Libraries",
        "query": "button.nav-link"
    },
    {
        "find": "Słonie",
        "replace": "Elephants",
        "query": "button.nav-link"
    },
    {
        "find": "tutaj",
        "replace": "here",
        "query": "a"
    },
    {
        "find": "Formularz jest też dostępny",
        "replace": "Form is also available",
        "query": "p"
    },
    {
        "find": "Autor",
        "replace": "Author",
        "query": "b"
    },
    {
        "find": "Kanał",
        "replace": "Channel",
        "query": "p"
    },
    {
        "find": "stabilny",
        "replace": "stable",
        "query": "p"
    },
    {
        "find": "podczas tworzenia",
        "replace": "during creating",
        "query": "p"
    },
    {
        "find": "Biblioteki i oprogramowanie użyte przy tworzeniu strony",
        "replace": "Libraries and software used to create the website",
        "query": "p"
    },
    {
        "find": "Własny kod CSS",
        "replace": "Own CSS code",
        "query": ".form-label"
    },
    {
        "find": "Własny kod Javascript",
        "replace": "Own Javascript code",
        "query": ".form-label"
    },
    {
        "find": "Aby mieć pewność, że kod zostanie poprawnie zastosowany dodaj <code>!important</code> na końcu każdej linijki.",
        "replace": "To ensure that the code is applied correctly, add <code>!important</code> to the end of each line.",
        "query": "p"
    },
    {
        "find": "Kod zacznie działać dopiero po odświeżeniu strony.",
        "replace": "Code will work only after refreshing the website.",
        "query": "p"
    },
    {
        "find": "Czcionka Segoe UI",
        "replace": "Segoe UI font",
        "query": "li"
    },
    {
        "find": "Czcionka JetBrains Mono",
        "replace": "JetBrains Mono font",
        "query": "li"
    },
    {
        "find": "Tłumaczenie na angielski może zawierać błędy.",
        "replace": "The English translation may contain errors.",
        "query": "p"
    },
    {
        "find": "Skala",
        "replace": "Scale",
        "query": ".form-label"
    },
    {
        "find": "Wyśrodkuj stronę w pionie",
        "replace": "Center website vertically",
        "query": ".form-check-label"
    },
    {
        "find": "Wysokość",
        "replace": "Height",
        "query": "label.form-label"
    },
    {
        "find": "Szerokość",
        "replace": "Width",
        "query": "label.form-label:not([for=countdown-border-width])"
    },
    {
        "find": "Tryb widżetu",
        "replace": "Widget mode",
        "query": "label.form-label"
    },
    {
        "find": "Język",
        "replace": "Language",
        "query": "label.form-label"
    },
    {
        "find": "Włączony (bez linku)",
        "replace": "Enabled (without link)",
        "query": "option[value=without_link]"
    },
    {
        "find": "Włączony",
        "replace": "Enabled",
        "query": "option[value=true]"
    },
    {
        "find": "Wyłączony",
        "replace": "Disabled",
        "query": "option[value=false]"
    },
    {
        "find": "Użytkownika",
        "replace": "User's",
        "query": "option[value=default]"
    },
    {
        "find": "Polski",
        "replace": "Polish",
        "query": "option[value=pl]:not(.language-option)"
    },
    {
        "find": "Angielski",
        "replace": "English",
        "query": "option[value=en]:not(.language-option)"
    },
    {
        "find": "Usuń wszystkie dane",
        "replace": "Delete all data",
        "query": [".btn.btn-danger", ".modal-title"]
    },
    {
        "find": "Czy na pewno chcesz usunąć wszystkie dane?",
        "replace": "Do you really want to delete all data?",
        "query": "#clearAllDataModalBody"
    },
    {
        "find": "Spowoduje to usunięcie ustawień w tym wyglądu.",
        "replace": "This will delete all settings also with appearance.",
        "query": "#clearAllDataModalBody"
    },
    {
        "find": "Aby to zastosować wymagane jest odświeżenie strony.",
        "replace": "To apply this website reload is needed.",
        "query": "#clearAllDataModalBody"
    },
    {
        "find": "Tak",
        "replace": "Yes",
        "query": ".btn"
    },
    {
        "find": "Nie",
        "replace": "No",
        "query": ".btn"
    },
    {
        "find": "Wygląd",
        "replace": "Appearance",
        "query": "button.nav-link"
    },
    {
        "find": "Tło strony",
        "replace": "Website background",
        "query": ".form-label"
    },
    {
        "find": "Domyślny kolor (#9acd32)",
        "replace": "Default color (#9acd32)",
        "query": "option[value=default]"
    },
    {
        "find": "Własny kolor",
        "replace": "Custom color",
        "query": "option[value=custom-color]"
    },
    {
        "find": "Zdjęcie",
        "replace": "Image",
        "query": "option[value=image]"
    },
    {
        "find": "Film",
        "replace": "Video",
        "query": "option[value=video]"
    },
    {
        "find": "Film z YouTube",
        "replace": "YouTube video",
        "query": "option[value=youtube-video]"
    },
    {
        "find": "Strona",
        "replace": "Website",
        "query": "option[value=website]"
    },
    {
        "find": "Motyw",
        "replace": "Theme",
        "query": ".form-label"
    },
    {
        "find": "Domyślny",
        "replace": "Default",
        "query": "option[value=default]"
    },
    {
        "find": "Biało-czarny",
        "replace": "White-black",
        "query": "option[value=white-black]"
    },
    {
        "find": "Czarno-biały",
        "replace": "Black-white",
        "query": "option[value=black-white]"
    },
    {
        "find": "Własny",
        "replace": "Custom",
        "query": "option[value=custom]"
    },
    {
        "find": "Motyw",
        "replace": "Theme",
        "query": ".form-label"
    },
    {
        "find": "Kolor tytułu strony",
        "replace": "Website title color",
        "query": ".form-label"
    },
    {
        "find": "Kolor czcionki odliczania",
        "replace": "Countdown font color",
        "query": ".form-label"
    },
    {
        "find": "Kolor tła odliczania",
        "replace": "Countdown background color",
        "query": ".form-label"
    },
    {
        "find": "Kolor ramki odliczania",
        "replace": "Countdown border color",
        "query": ".form-label"
    },
    {
        "find": "Kolor czcionki nagłówka \"Pozostało:\"",
        "replace": "Header \"Left:\" font color",
        "query": ".form-label"
    },
    {
        "find": "Kolor tekstu z jednostkami czasu",
        "replace": "Text with time units color",
        "query": ".form-label"
    },
    {
        "find": "Kolor czcionki etykiet dat",
        "replace": "Dates label font color",
        "query": ".form-label"
    },
    {
        "find": "Kolor czcionki dat",
        "replace": "Dates font color",
        "query": ".form-label"
    },
    {
        "find": "Szerokość ramki odliczania",
        "replace": "Countdown border width",
        "query": ".form-label"
    },
    {
        "find": "Styl ramki odliczania",
        "replace": "Countdown border style",
        "query": ".form-label"
    },
    {
        "find": "Brak",
        "replace": "None",
        "query": "option[value=none]"
    },
    {
        "find": "Ciągła",
        "replace": "Solid",
        "query": "option[value=solid]"
    },
    {
        "find": "Podwójna",
        "replace": "Double",
        "query": "option[value=double]"
    },
    {
        "find": "Kreski",
        "replace": "Dashed",
        "query": "option[value=dashed]"
    },
    {
        "find": "Kropki",
        "replace": "Dotted",
        "query": "option[value=dotted]"
    },
    {
        "find": "Wklęsła",
        "replace": "Inset",
        "query": "option[value=inset]"
    },
    {
        "find": "Wypukła",
        "replace": "Outset",
        "query": "option[value=outset]"
    },
    {
        "find": "Wklęsły pasek",
        "replace": "Groove",
        "query": "option[value=groove]"
    },
    {
        "find": "Wypukły pasek",
        "replace": "Ridge",
        "query": "option[value=ridge]"
    },
    {
        "find": "Wyświetlaj dzisiejszą datę",
        "replace": "Display today date",
        "query": ".form-check-label"
    },
    {
        "find": "Wyświetlaj datę Dnia Słonia",
        "replace": "Display Elephant Day date",
        "query": ".form-check-label"
    },
    {
        "find": "Cień odliczania",
        "replace": "Countdown shadow",
        "query": ".form-check-label"
    },
    {
        "find": "Kontur ikony",
        "replace": "Icon outline",
        "query": ".form-check-label"
    },
    {
        "find": "Kolor",
        "replace": "Color",
        "query": ".form-label"
    },
    {
        "find": "Styl przycisków menu",
        "replace": "Menu buttons style",
        "query": ".form-label"
    },
    {
        "find": "Kolory",
        "replace": "Colors",
        "query": "#menu-buttons-appearance"
    },
    {
        "find": "Kolory z samym konturem",
        "replace": "Colors with outline",
        "query": "#menu-buttons-appearance"
    },
    {
        "find": "Własny",
        "replace": "Custom",
        "query": "#menu-buttons-appearance"
    },
    {
        "find": "domyślny",
        "replace": "default",
        "query": "#menu-buttons-appearance"
    },
    {
        "find": "Wartość \\ Stan",
        "replace": "Value \\ State",
        "query": "th"
    },
    {
        "find": "Normalny",
        "replace": "Normal",
        "query": "th"
    },
    {
        "find": "Kursor",
        "replace": "Hover",
        "query": "th"
    },
    {
        "find": "Aktywny",
        "replace": "Active",
        "query": "th"
    },
    {
        "find": "Tekst",
        "replace": "Foreground",
        "query": "th"
    },
    {
        "find": "Tło",
        "replace": "Background",
        "query": "th"
    },
    {
        "find": "Kontur",
        "replace": "Border",
        "query": "th"
    },
    {
        "find": "Ustawienia widżetu",
        "replace": "Widget settings",
        "query": "p.h3"
    },
    {
        "find": "Licznik odwiedzin",
        "replace": "Visit counter",
        "query": [".options-button", ".h3"]
    },
    {
        "find": "Informacje o innych wersjach Odliczania do Dnia Słonia",
        "replace": "Information about other versions of Countdown to Elephant Day",
        "query": "a"
    },
    {
        "find": "Odliczanie do Dnia Słonia API",
        "replace": "Countdown to Elephant Day API",
        "query": "a"
    },
    {
        "find": "Informacje",
        "replace": "Information",
        "query": ".nav-link"
    },
    {
        "find": "Autor",
        "replace": "Author",
        "query": ".nav-link"
    },
    {
        "find": "Strona internetowa",
        "replace": "Website",
        "query": ".col"
    },
    {
        "find": "Kanał YouTube",
        "replace": "YouTube channel",
        "query": ".col"
    },
    {
        "find": "Widżet jest tymczasowo niedostępny!",
        "replace": "Widget is temporary unavailable!",
        "query": ".alert.alert-warning"
    },
    {
        "find": "Inne wersje Odliczania do Dnia Słonia",
        "replace": "Other versions of Countdown to Elephant Day",
        "query": ".h3"
    },
    {
        "find": "Widżet na pulpit",
        "replace": "Desktop widget",
        "query": ".h4"
    },
    {
        "find": "Widżet wymaga zainstalowanego programu",
        "replace": "Widget requires installed",
        "query": "p"
    },
    {
        "find": "Pobierz",
        "replace": "Download",
        "query": ".btn.btn-primary.btn-lg"
    },
    {
        "find": "Bot Discord",
        "replace": "Discord bot",
        "query": ".h4"
    },
    {
        "find": "Dodaj do serwera",
        "replace": "Add to server",
        "query": ".btn.btn-primary.btn-lg"
    },
    {
        "find": "Wkrótce zostaną dodane też inne wersje.",
        "replace": "Other versions will be added soon.",
        "query": ".alert.alert-info.mt-3"
    }
];

function getLanguage() {
    if (localStorage.getItem('language') != undefined) {
        return localStorage.getItem('language');
    }

    return 'pl';
}


function translate() {
    document.querySelector('html').lang = 'en';
    translation.forEach(e => {
        document.querySelectorAll(e.query).forEach(e2 => {
            e2.innerHTML = e2.innerHTML.replaceAll(e.find, e.replace);
        });
    });
}

function translateIfRequired() {
    if (localStorage.getItem('language') == 'en') {
        translate();
    }
}

function showLanguageInfo() {
    if (localStorage.getItem('language') == undefined && navigator.language.split('-')[0] != 'pl' && localStorage.getItem('language-popover-closed') == undefined) {
        var popover = new bootstrap.Popover(document.querySelector('#options-button'), {
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
