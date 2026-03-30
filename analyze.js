const axios = require('axios');
require('dotenv').config();

async function analyzeJobs(jobs) {
    const prompt = `
Filter and rank these jobs:
- Keep only internships
- Remove duplicates
- Rank best for beginner data science candidates
- Extract top 20

Jobs:
${JSON.stringify(jobs).slice(0, 8000)}
`;

    const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }]
    }, {
        headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
    });

    return res.data.choices[0].message.content;
}

module.exports = analyzeJobs;