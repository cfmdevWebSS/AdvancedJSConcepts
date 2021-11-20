export default function create(data, target, title) {
    const table = document.createElement('table');
    const caption = document.createElement('caption');
    caption.innerHTML(caption);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for (let key in data) {
        const row = document.createElement('tr');
        const th = document.createElement('th');
        const td = document.createElement('td');
        const value = data[key];

        th.innerHTML = key;
        td.innerHTML = value;
        row.appendChild(th);
        row.appendChild(td);
        tbody.appendChild(row);
    }
    
    document.getElementById(target).appendChild(table);
}