const { ApifyClient } = require('apify-client');
require('dotenv').config();

const client = new ApifyClient({
    token: process.env.APIFY_TOKEN,
});

async function runActor(actorId, input) {
    try {
        console.log(`\n🚀 Running actor: ${actorId}`);

        const run = await client.actor(actorId).call(input);

        const { items } = await client
            .dataset(run.defaultDatasetId)
            .listItems();

        console.log(`✅ Fetched ${items.length} jobs from ${actorId}`);
        return items;

    } catch (err) {
        console.log(`❌ Failed for ${actorId}: ${err.message}`);
        return [];
    }
}

async function scrapeJobs() {

    const sources = [

        // 🔵 LINKEDIN - INDIA
        {
            actor: "futurizerush/linkedin-job-scraper",
            input: {
                keywords: [
                    "data science intern",
                    "data analyst intern",
                    "machine learning intern"
                ],
                location: "India",
                maxItems: 30,
                datePosted: "past-week"
            }
        },

        // 🔵 LINKEDIN - USA
        {
            actor: "futurizerush/linkedin-job-scraper",
            input: {
                keywords: [
                    "data science intern",
                    "data analyst intern",
                    "machine learning intern"
                ],
                location: "United States",
                maxItems: 30,
                datePosted: "past-week"
            }
        },

        // 🟢 INDEED - INDIA
        {
            actor: "apify/indeed-scraper",
            input: {
                queries: [
                    "data science intern",
                    "data analyst intern"
                ],
                location: "India",
                maxItems: 30
            }
        },

        // 🟢 INDEED - USA
        {
            actor: "apify~indeed-scraper",
            input: {
                queries: [
                    "data science intern",
                    "machine learning intern"
                ],
                location: "United States",
                maxItems: 30
            }
        }

    ];

    let allJobs = [];

    for (let src of sources) {
        const jobs = await runActor(src.actor, src.input);
        allJobs = allJobs.concat(jobs);
    }

    console.log(`\n📊 Total jobs before dedup: ${allJobs.length}`);

    // 🔥 DEDUPLICATION LOGIC
    const uniqueJobs = [];
    const seen = new Set();

    for (let job of allJobs) {
        // Create a unique key (safe across different platforms)
        const title = job.title || job.position || "";
        const company = job.company || job.companyName || "";
        const location = job.location || "";

        const key = `${title}-${company}-${location}`.toLowerCase();

        if (!seen.has(key)) {
            seen.add(key);
            uniqueJobs.push(job);
        }
    }

    console.log(`🧹 After deduplication: ${uniqueJobs.length}`);

    return uniqueJobs;
}

module.exports = scrapeJobs;