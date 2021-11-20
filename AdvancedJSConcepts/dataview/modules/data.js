function init() {
    return {};
}

function addItem(dict, key, value) {
    dict[key] = value;
}

function removeItem(dict, key) {
    delete dict[key];
}

export {init, addItem, removeItem}