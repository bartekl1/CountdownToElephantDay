const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

var updateTime = 50;
var defaultUpdateTime = 50;

var nowDate = new Date();
var elephantDayDate = new Date();

elephantDay = [12, 7];

addEventListener('load', countdown);


function setElephantDayDate() {
    elephantDayDate.setHours(0);
    elephantDayDate.setMinutes(0);
    elephantDayDate.setSeconds(0);
    elephantDayDate.setMilliseconds(0);

    elephantDayDate.setDate(elephantDay[0]);
    elephantDayDate.setMonth(elephantDay[1]);
    elephantDayDate.setFullYear(nowDate.getFullYear());

    if (nowDate.getMonth() == elephantDay[1]) {
        if (nowDate.getDate() > elephantDay[0]) {
            elephantDayDate.setFullYear(nowDate.getFullYear() + 1);
        }
    } else if (nowDate.getMonth() > elephantDay[1]) {
        elephantDayDate.setFullYear(nowDate.getFullYear() + 1);
    }
}

function getLeftTime() {
    nowDate = new Date();

    setElephantDayDate();
    
    if ((elephantDayDate.getFullYear() == nowDate.getFullYear()) && (elephantDayDate.getMonth() == nowDate.getMonth()) && (elephantDayDate.getDate() == nowDate.getDate())) {
        return [0, 0, 0, 0, 0];
    } else {
        var leftTime = elephantDayDate - nowDate;


        var leftDays = Math.floor(((leftTime % 31557600000) / 86400000));
        var leftHours = Math.floor(((leftTime % 86400000) / 3600000));
        var leftMinutes = Math.floor(((leftTime % 3600000) / 60000));
        var leftSeconds = Math.floor(((leftTime % 60000) / 1000));
        var leftMilliseconds = leftTime % 1000;
        

        return {"leftDays": leftDays, "leftHours": leftHours, "leftMinutes": leftMinutes, "leftSeconds": leftSeconds, "leftMilliseconds": leftMilliseconds};
    }
}

function countdown() {
    var leftTime = getLeftTime();

    var language;

    if (localStorage.getItem('date-language') == undefined) {
        language = getLanguage();
    } else if (localStorage.getItem('date-language') == '@browser') {
        language = undefined;
    } else {
        try {
            nowDate.toLocaleDateString(language, dateOptions);
            language = localStorage.getItem('date-language');
        } catch {

        }
    }

    document.querySelector('#countdown-days').innerText = leftTime.leftDays;
    document.querySelector('#countdown-hours').innerText = leftTime.leftHours;
    document.querySelector('#countdown-minutes').innerText = leftTime.leftMinutes;
    document.querySelector('#countdown-seconds').innerText = leftTime.leftSeconds;
    document.querySelector('#countdown-milliseconds').innerText = leftTime.leftMilliseconds;

    document.querySelector('#today-datetime').innerText = nowDate.toLocaleDateString(language, dateOptions) + ' ' + nowDate.toLocaleTimeString();
    document.querySelector('#elephant-day-datetime').innerText = elephantDayDate.toLocaleDateString(language, dateOptions);

    if (document.querySelector('html').lang == 'pl') {
        if (leftTime.leftDays == 1) {
            document.querySelector('#left-days-unit').innerText = 'dzień';
        } else {
            document.querySelector('#left-days-unit').innerText = 'dni';
        }

        if (leftTime.leftHours == 1) {
            document.querySelector('#left-hours-unit').innerText = 'godzina';
        } else if ((['2', '3', '4'].includes(leftTime.leftHours.toString().substr(-1, 1))) && (leftTime.leftHours.toString().substr(-2, 1) != 1)) {
            document.querySelector('#left-hours-unit').innerText = 'godziny';
        } else {
            document.querySelector('#left-hours-unit').innerText = 'godzin';
        }

        if (leftTime.leftMinutes == 1) {
            document.querySelector('#left-minutes-unit').innerText = 'minuta';
        } else if ((['2', '3', '4'].includes(leftTime.leftMinutes.toString().substr(-1, 1))) && (leftTime.leftMinutes.toString().substr(-2, 1) != 1)) {
            document.querySelector('#left-minutes-unit').innerText = 'minuty';
        } else {
            document.querySelector('#left-minutes-unit').innerText = 'minut';
        }

        if (leftTime.leftSeconds == 1) {
            document.querySelector('#left-seconds-unit').innerText = 'sekunda';
        } else if ((['2', '3', '4'].includes(leftTime.leftSeconds.toString().substr(-1, 1))) && (leftTime.leftSeconds.toString().substr(-2, 1) != 1)) {
            document.querySelector('#left-seconds-unit').innerText = 'sekundy';
        } else {
            document.querySelector('#left-seconds-unit').innerText = 'sekund';
        }
    } else {
        if (leftTime.leftDays == 1) {
            document.querySelector('#left-days-unit').innerText = 'day';
        } else {
            document.querySelector('#left-days-unit').innerText = 'days';
        }
        if (leftTime.leftHours == 1) {
            document.querySelector('#left-hours-unit').innerText = 'hour';
        } else {
            document.querySelector('#left-hours-unit').innerText = 'hours';
        }
        if (leftTime.leftMinutes == 1) {
            document.querySelector('#left-minutes-unit').innerText = 'minute';
        } else {
            document.querySelector('#left-minutes-unit').innerText = 'minutes';
        }
        if (leftTime.leftSeconds == 1) {
            document.querySelector('#left-seconds-unit').innerText = 'second';
        } else {
            document.querySelector('#left-seconds-unit').innerText = 'seconds';
        }
        document.querySelector('#left-milliseconds-unit').innerText = 'milliseconds';
    }

    if (document.querySelector('.countdown-container').classList.contains('d-none')) {
        document.querySelector('#countdown-loading').classList.add('d-none');
        document.querySelector('.countdown-container').classList.remove('d-none');
    }
    
    setTimeout(countdown, updateTime);
}