import { compareNumber } from './sort.js'
const tableState = {
    sorting: 'asc',
    sortingField: null
};

function renderSortIcon(header) {
    if (header === tableState.sortingField) {
        return tableState.sorting === "asc" ? '&uarr;' : '&darr;';
    }

    return '';
}


export default function renderTable(data) {
    document.body.innerHTML = '';

    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    thead.innerHTML = `

    <tr>
        <th colspan="1" rowspan="2" id="class">Class ${renderSortIcon('class')}</th>
    </tr>
`

    const rows = data.map(pupil => {
        return `
        <tr>
        <td>${pupil.class}</td>
        </tr>
    `
    });

    tbody.innerHTML = rows.join('');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.body.appendChild(table);

    thead.addEventListener('click', (event) => {
        const header = event.target.id;
        console.log(event.target.id)

        if (!header) {
            return;
        }

        if (tableState.sortingField === header) {
            tableState.sorting = tableState.sorting === "asc" ? "desc" : "asc";
        } else {
            tableState.sorting = 'asc'
        }

        tableState.sortingField = header;

        const copy = [...data];


        switch (header) {
            case 'class':
                copy.sort(compareNumber(tableState.sorting, header));
                break;
        }
        renderTable(copy)
    });
}