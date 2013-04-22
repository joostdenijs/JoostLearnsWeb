function clearAll() {
    x = document.getElementById("leftnav").getElementsByTagName("a");
    for (i = 0; i < x.length; i++) {
        try{
            x.item(i).setAttribute('class', x.item(i).getAttribute('class').replace('currentcontent', '').trim());
        }
        catch (e) {
        }
    }
    x = document.getElementById("contentbody").children;
    for (i = 0; i < x.length; i++) {
        try{
            x.item(i).setAttribute('class', x.item(i).getAttribute('class').replace('currentcontent', '').trim());
        }
        catch (e) {
        }
    }
}

function switchTo(element, body) {
    clearAll();
    try{
        element.setAttribute('class', x.item(i).getAttribute('class') + ' currentcontent');
    }
    catch (e) {
        element.setAttribute('class', 'currentcontent');
    }
    bodyelement = document.getElementById(body);
    try {
        y = bodyelement.getAttribute('class');
        bodyelement.setAttribute('class', y + ' currentcontent');
    }
    catch (e) {
        bodyelement.setAttribute('class', 'currentcontent');
    }
}