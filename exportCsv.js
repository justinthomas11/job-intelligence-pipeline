const { Parser } = require('json2csv');
const fs = require('fs');

function exportToCSV(jobs) {
    const fields = ["title", "companyName", "location", "url"];
    const parser = new Parser({ fields });

    const csv = parser.parse(jobs);
    fs.writeFileSync("jobs.csv", csv);

    console.log("CSV exported: jobs.csv");
}

module.exports = exportToCSV;