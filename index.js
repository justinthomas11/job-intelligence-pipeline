const scrapeJobs = require('./scrape');
const fs = require('fs');

async function runPipeline() {
    try {
        console.log("🔍 Scraping jobs...");
        const jobs = await scrapeJobs();

        console.log(`✅ Scraped ${jobs.length} jobs`);

        // Save raw data
        fs.writeFileSync(
            "raw_jobs.json",
            JSON.stringify(jobs, null, 2)
        );

        console.log("💾 Saved raw_jobs.json");

        console.log("\n👉 NEXT STEP:");
        console.log("1. Open raw_jobs.json");
        console.log("2. Copy some/all data");
        console.log("3. Paste into Claude");
        console.log("4. Ask: filter + rank internships");

    } catch (error) {
        console.error("❌ Error:", error.message);
    }
}

runPipeline();