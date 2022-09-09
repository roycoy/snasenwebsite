// object med mange ulike felter. 3 ting: tilstand, inputfelter, felles data
const model = {
    // 1: tilstanden selve applikasjonen er i
    app: {
        page:'search', //createNew, delete, edit
    },

    // 2: inputfelter til hver side
    inputs: {
        search: {
            txt: '',
        },
        createNew: {
            name: '',
            emailAddress: '',
        },
        delete: {
            isAreyouSureChecked: false,
        },
    },

    // 3: felles data
}