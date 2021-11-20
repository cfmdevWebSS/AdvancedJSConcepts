export default function create(data, target, title) {
    const list = document.createElement('ol');

    for (let key in data) {
        const item = document.createElement('li');
        const value = data[key];
        item.innerHTML = `<strong>${key}</strong> - ${value}.`;
        list.appendChild(item);
    }

    const header = document.createElement('h3');
    header.innerHTML = title;

    document.getElementById(target).appendChild(header);
    document.getElementById(target).appendChild(list);
}