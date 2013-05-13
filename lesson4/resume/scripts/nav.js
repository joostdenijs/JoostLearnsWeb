function switchTo(element) {
    if ($(element).hasClass('active')){
        return true;
    }
    var currentSelections = $('.active');
    for (i = 0; i < currentSelections.length; i++) {
        $(currentSelections[i]).removeClass('active');
    }

    var newActive = $('.'+element.className);
    for (i = 0; i < newActive.length; i++) {
        $(newActive[i]).addClass('active');
    }
}