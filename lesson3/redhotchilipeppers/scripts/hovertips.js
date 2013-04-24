window.onload = init;
function init() {
    if (window.Event) {
        document.captureEvents(Event.MOUSEMOVE);
    }
    document.onmousemove = getCursorXY;
}

function getCursorXY(e) {
    sessionStorage.x = event.clientX;
    sessionStorage.y = event.clientY;
    activetips = document.getElementsByClassName('visiblehover');
    for (i = 0; i < activetips.length; i++) {
        positionAtCursor(activetips[i]);
    }
}

function positionAtCursor(element) {

    element.setAttribute('style', 'left: ' + sessionStorage.x + 'px; top: ' + sessionStorage.y + 'px;');
}

function on(element) {
    removeClass(element, 'invisiblehover');
    appendClass(element, 'visiblehover');
    positionAtCursor(element);
}

function off(element) {
    //TODO: add jQuery functionality so that we don't disable if the mouse is over the hovertip"
    removeClass(element, 'visiblehover');
    appendClass(element, 'invisiblehover');
}