const MAX_VISIBLE_PAGES = 5;

const tableState = {
    page: 1,
    rowsPerPage: 10,
}

export default function renderTable(data) {
    document.body.innerHTML = '';

    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    thead.innerHTML = `
    <tr>
    <th>Название города</th>
    <th>Область</th>
    </tr>`;

    const normalizd = data[0].regions.reduce((result, current) => {
        const row = current.cities.map((city) => {
            return { name: city.name, region: current.name };
        });
        return [...result, ...row];
    }, []);

    const startIndex = tableState.rowsPerPage * (tableState.page - 1);
    const endIndex = startIndex + tableState.rowsPerPage;

    const rows = normalizd.slice(startIndex, endIndex).map((city) => {
        return `<tr>
            <td>${city.name}</td>
            <td>${city.region}</td>
            </tr>`
    });

    tbody.innerHTML = rows.join('');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.body.appendChild(table);

    const pagination = document.createElement('div');
    pagination.setAttribute('class', 'pagination');

    const pagesCount = Math.ceil(normalizd.length / tableState.rowsPerPage);

    let startPage;
    let endPage;

    const maxPages =
        (pagesCount < MAX_VISIBLE_PAGES ? pagesCount : MAX_VISIBLE_PAGES);

    const maxPagesBeforeCurrent = Math.floor(maxPages / 2);
    const maxPagesAfterCurrent = Math.ceil(maxPages / 2) - 1;

    if (tableState.page <= maxPagesBeforeCurrent) {
        startPage = 1;
        endPage = maxPages;
    } else if (tableState.page + maxPagesAfterCurrent >= pagesCount) {
        startPage = pagesCount - maxPages + 1;
        endPage = pagesCount;
    } else {
        startPage = tableState.page - maxPagesBeforeCurrent;
        endPage = tableState.page + maxPagesAfterCurrent;
    }

    pagination.innerHTML = Array.apply(null, Array(maxPages))
        .map((page, index) => {
            return `<a href="#">${startPage + index}</a>`;
        }).join('');

    document.body.appendChild(pagination);

    const pages = pagination.querySelectorAll('a');

    pages.forEach(page => {
        page.addEventListener('click', (event) => {
            event.preventDefault();

            tableState.page = parseInt(event.target.textContent, 10);

            renderTable(data);
        });

        if (parseInt(page.textContent, 10) === tableState.page) {
            page.setAttribute('class', 'active');
        }
    });

    const rowPerPageSelector = document.createElement('select');
    rowPerPageSelector.setAttribute('selected', tableState.rowsPerPage)

    rowPerPageSelector.innerHTML = `
    <option ${tableState.rowsPerPage === 10 && 'selected'}>10</option>
    <option ${tableState.rowsPerPage === 25 && 'selected'}>25</option>
    <option ${tableState.rowsPerPage === 50 && 'selected'}>50</option>
    `;

    document.body.appendChild(rowPerPageSelector);

    rowPerPageSelector.addEventListener('change', (event) => {
        tableState.rowsPerPage = parseInt(event.target.value, 10);
        tableState.page = 1;


        renderTable(data);
    })
}
