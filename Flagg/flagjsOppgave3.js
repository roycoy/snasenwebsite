function rowAllColors() {
    return createRow('red', '');
}

function rowWhiteBlue() {
    return createRow('White', '');
}

function rowBlue() {
    return createRow('blue', 'blue');
}


function createSquare(cssClass) {
    return  /*html*/`<div class="${cssClass}"></div>`;
}

function createRow(cssClass1, cssClass2) {
    return createSquare(cssClass1).repeat(6)
        + createSquare(cssClass2)
        + createSquare('blue').repeat(2)
        + createSquare(cssClass2)
        + createSquare(cssClass1).repeat(6)
        + createSquare(cssClass1).repeat(6);
}
