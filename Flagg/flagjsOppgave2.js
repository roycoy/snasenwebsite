function rowAllColors() {
    return createRow('red', '');
}

function rowWhiteBlue() {
    return createRow('white', '');
}

function rowBlue() {
    return createRow('blue', 'blue');
}


function createRow(cssClass1, cssClass2) {
    return /*html*/`
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass2}"></div>
        <div class="blue"></div>
        <div class="blue"></div>
        <div class="${cssClass2}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
        <div class="${cssClass1}"></div>
    `;
}
