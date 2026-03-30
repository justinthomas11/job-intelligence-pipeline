function isDataRole(job) {
    const title = (job.title || "").toLowerCase();

    return (
        title.includes("data") ||
        title.includes("machine learning") ||
        title.includes("ai") ||
        title.includes("analytics")
    ) && !(
        title.includes("software") ||
        title.includes("frontend") ||
        title.includes("backend") ||
        title.includes("full stack")
    );
}

function filterJobs(jobs) {
    return jobs.filter(isDataRole);
}

module.exports = filterJobs;