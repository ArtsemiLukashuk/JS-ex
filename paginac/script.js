import renderTable from './render-table.js'

async function init() {
    const response = await fetch('by-cities.json');

    const byCities = await response.json()

    renderTable(byCities);
}

init();