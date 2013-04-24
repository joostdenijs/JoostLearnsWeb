if (typeof (Storage) !== "undefined") {
    if (localStorage.currentAmount) {
        //No action, just loading
    }
    else {
        localStorage.currentAmount = 20000;
    }
    renderMeter();
}

function renderMeter() {
    meter = document.getElementById('fundraising').getElementsByTagName('meter')[0];
    meter.setAttribute('value', localStorage.currentAmount);
}

function donatemoney() {
    inputs = document.getElementById('donatenow').getElementsByTagName('input');
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].getAttribute('name') == 'amount') {
            localStorage.currentAmount = parseInt(localStorage.currentAmount) + parseInt(inputs[i].value);
            renderMeter();
            break;
        }
    }
}

function metermouseover(meter) {
    text = document.getElementById('fundraisermeterhovertext');
    on(text);
    text.innerHTML = "Amount Raised: $" + localStorage.currentAmount + "<br />Target: $" + meter.getAttribute("max");
}

function metermouseaway(meter) {
    text = document.getElementById('fundraisermeterhovertext');
    off(text);
}