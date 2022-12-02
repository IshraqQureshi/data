/**
 * Fetch Data From CSV
 * @returns Array[]
 */

async function fetchCSVData() {
    const dataArr = [];
    const response = await fetch('nessus.csv');
    const data = await response.text();
    const table = data.split(/\n/).slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        if(columns.length > 1) dataArr.push(columns);
    });
    return dataArr;
}

fetchCSVData().then(dataSet => {
    
    

    dataSet = dataSet.map(row => {        
        return row.map(col => {
            return col.replaceAll('"', '')
        });        
    });

    jQuery(('#dataTable')).DataTable({

        data: dataSet,
        columns: [
            { title: 'Plugin ID' },
            { title: 'CVSS v2.0 Base Score' },
            { title: 'Risk' },
            { title: 'Host' },
            { title: 'Protocol' },
            { title: 'Port' },
            { title: 'Name' },
        ],
        responsive: true,
        pageLength: 25
        
    });

});

// colReorder: {
//     order: [ 2, 1, 3, 5, 4, 6, 0 ]
// }
