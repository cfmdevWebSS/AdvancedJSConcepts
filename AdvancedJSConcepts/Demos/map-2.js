const createOption = (value) => {
    return `<option value='${value}'>${value}</option>`;
}

const createSelect = (values) => {
    let select = '<select>\n';
    let options = values.map(createOption);
    for (option of options) {
        select += '\t' + option + '\n';
    }

    select += '</select>';
    return select;
}

const fruits = ['peach', 'cherry', 'apple', 'pear', 'banana'];

let select = createSelect(fruits);

console.log(select);