function visitCounterUpdate() {
    if (window.navigator.onLine) {
        if (document.body.classList.contains('modal-open') && !(document.querySelector('#visit-counter-information').classList.contains('d-none'))) {
            fetch('/visit_counter')
                .then((response) => response.text())
                .then((data) => {
                    document.querySelector('#visit-counter').innerHTML = data;

                    if (document.querySelector('#visit-counter').classList.contains('d-none')) {
                        document.querySelector('#visit-counter-loading').classList.add('d-none');
                        document.querySelector('#visit-counter').classList.remove('d-none');
                        document.querySelector('#visit-counter-div').classList.remove('d-none');
                        document.querySelector('#visit-counter-offline').classList.add('d-none');
                    }
                });
        }
    } else {
        document.querySelector('#visit-counter-offline').classList.remove('d-none');
        document.querySelector('#visit-counter-div').classList.add('d-none');
    }
    setTimeout(visitCounterUpdate, 1000);
}

visitCounterUpdate();

if (window.navigator.onLine) {
    var params = (new URL(document.location)).searchParams;
    var widgetMode = params.get('widget');
    if (widgetMode != 'true' && widgetMode != 'without_link') {
        fetch('/visit_counter',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({})
            })
    }
}