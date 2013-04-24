function appendClass(element, newclass) {
    try {
        element.setAttribute('class', element.getAttribute('class') + ' ' + newclass);
    }
    catch (e) {
        element.setAttribute('class', newclass);
    }
}

function removeClass(element, removedclass) {
    try {
        element.setAttribute('class', element.getAttribute('class').replace(removedclass, '').trim());
    }
    catch (e) {
    }
}