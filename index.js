const scrapeJobs = require('./scrape');
const filterJobs = require('./filter');
const exportToCSV = require('./exportCsv');
const fs = require('fs');

async function runPipeline() {
    console.log("Scraping jobs...");
    const jobs = await scrapeJobs();

    console.log(`Total scraped: ${jobs.length}`);

    const filtered = filterJobs(jobs);
    console.log(`After filtering: ${filtered.length}`);

    fs.writeFileSync("filtered_jobs.json", JSON.stringify(filtered, null, 2));

    exportToCSV(filtered);

    console.log("Done.");
}

runPipeline();