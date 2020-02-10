function showHide(id) {
    var elem = document.getElementById(id);
    if (elem.classList.contains('show')) {
        elem.classList.remove('show');
        elem.classList.add('hide');
    }
    else {
        elem.classList.add('show');
        elem.classList.remove('hide');
    }
}
