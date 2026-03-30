# Job Intelligence Pipeline

## Overview
This project is an automated job scraping and filtering pipeline designed to collect, clean, and prioritize internship opportunities in Data Science, Machine Learning, and Data Analytics.

It aggregates job postings from multiple platforms, removes irrelevant roles, deduplicates listings, and outputs a clean, structured dataset ready for analysis or direct application.

---

## Features

### Multi-source scraping
- Collects job postings from:
  - LinkedIn
  - Indeed
- Supports multiple locations:
  - India
  - United States

### Intelligent filtering
- Keeps only relevant roles:
  - Data Science Intern
  - Machine Learning Intern
  - Data Analyst Intern
- Automatically removes:
  - Software Engineer roles
  - Backend/Frontend roles
  - Unrelated job postings

### Deduplication
- Removes duplicate listings across platforms
- Uses job title, company, and location to identify uniqueness

### Structured output
- Exports cleaned data into:
  - JSON (raw and processed)
  - CSV (Excel-ready)

### Daily automation
- Pipeline can be scheduled to run daily
- Ensures fresh job listings are always available

---

## Project Structure
job-intelligence-pipeline/
│
├── scrape.js # Scrapes jobs from multiple sources
├── index.js # Main pipeline runner
├── filter.js # Filters relevant roles and removes noise
├── deduplicate.js # Removes duplicate job postings
├── export.js # Converts data to CSV
├── raw_jobs.json # Raw scraped data
├── clean_jobs.json # Processed job data
├── jobs.csv # Final Excel-ready output
├── .env # API keys (not committed)
└── README.md



---

## Setup Instructions

### 1. Clone the repository
git clone <your-repo-url>
cd job-intelligence-pipeline


### 2. Install dependencies
npm install



### 3. Add environment variables
Create a `.env` file:
APIFY_TOKEN=your_apify_token_here


---

## Running the Pipeline


node index.js


This will:
1. Scrape jobs from all configured sources  
2. Filter relevant roles  
3. Remove duplicates  
4. Save cleaned data  
5. Export results to CSV  

---

## Output

### Raw data

raw_jobs.json


### Cleaned data

clean_jobs.json


### Final output (Excel-ready)

jobs.csv


Each entry includes:
- Job title  
- Company  
- Location  
- Job link  
- Key metadata  

---

## Filtering Logic

Jobs are included only if they match:
- "data"
- "machine learning"
- "analytics"

Jobs are excluded if they contain:
- "software engineer"
- "developer"
- "frontend"
- "backend"

---

## Deduplication Logic

A unique key is generated using:

title + company + location


Duplicate entries are removed before final export.

---

## Automation

### Using Windows Task Scheduler
1. Create a new task  
2. Set trigger to daily  
3. Action:

node C:\path\to\job-intelligence-pipeline\index.js


### Using cron (Linux/macOS)

0 9 * * * node /path/to/job-intelligence-pipeline/index.js


---

## Use Cases
- Internship search automation  
- Data collection for analytics projects  
- Portfolio project demonstrating data pipelines  
- Job market trend analysis  

---

## Future Improvements
- Add more sources (Wellfound, company career pages)  
- Skill extraction and ranking  
- Resume matching  
- Email notifications for new jobs  
- Dashboard for job insights  

---

## Notes
- Some platforms may block scraping or change structure  
- Actor configurations may need updates over time  
- Always respect website terms of service  

---

## License
This project is for educational and personal use.
nonono everything in one block for easy copy paste
# Job Intelligence Pipeline

## Overview
This project is an automated job scraping and filtering pipeline designed to collect, clean, and prioritize internship opportunities in Data Science, Machine Learning, and Data Analytics.

It aggregates job postings from multiple platforms, removes irrelevant roles, deduplicates listings, and outputs a clean, structured dataset ready for analysis or direct application.

---

## Features

### Multi-source scraping
- Collects job postings from:
  - LinkedIn
  - Indeed
- Supports multiple locations:
  - India
  - United States

### Intelligent filtering
- Keeps only relevant roles:
  - Data Science Intern
  - Machine Learning Intern
  - Data Analyst Intern
- Automatically removes:
  - Software Engineer roles
  - Backend/Frontend roles
  - Unrelated job postings

### Deduplication
- Removes duplicate listings across platforms
- Uses job title, company, and location to identify uniqueness

### Structured output
- Exports cleaned data into:
  - JSON (raw and processed)
  - CSV (Excel-ready)

### Daily automation
- Pipeline can be scheduled to run daily
- Ensures fresh job listings are always available

---

## Project Structure


job-intelligence-pipeline/
│
├── scrape.js # Scrapes jobs from multiple sources
├── index.js # Main pipeline runner
├── filter.js # Filters relevant roles and removes noise
├── deduplicate.js # Removes duplicate job postings
├── export.js # Converts data to CSV
├── raw_jobs.json # Raw scraped data
├── clean_jobs.json # Processed job data
├── jobs.csv # Final Excel-ready output
├── .env # API keys (not committed)
└── README.md


---

## Setup Instructions

### 1. Clone the repository

git clone <your-repo-url>
cd job-intelligence-pipeline


### 2. Install dependencies

npm install


### 3. Add environment variables
Create a `.env` file:

APIFY_TOKEN=your_apify_token_here


---

## Running the Pipeline


node index.js


This will:
1. Scrape jobs from all configured sources  
2. Filter relevant roles  
3. Remove duplicates  
4. Save cleaned data  
5. Export results to CSV  

---

## Output

### Raw data

raw_jobs.json


### Cleaned data

clean_jobs.json


### Final output (Excel-ready)

jobs.csv


Each entry includes:
- Job title  
- Company  
- Location  
- Job link  
- Key metadata  

---

## Filtering Logic

Jobs are included only if they match:
- "data"
- "machine learning"
- "analytics"

Jobs are excluded if they contain:
- "software engineer"
- "developer"
- "frontend"
- "backend"

---

## Deduplication Logic

A unique key is generated using:

title + company + location


Duplicate entries are removed before final export.

---

## Automation

### Using Windows Task Scheduler
1. Create a new task  
2. Set trigger to daily  
3. Action:

node C:\path\to\job-intelligence-pipeline\index.js


### Using cron (Linux/macOS)

0 9 * * * node /path/to/job-intelligence-pipeline/index.js


---

## Use Cases
- Internship search automation  
- Data collection for analytics projects  
- Portfolio project demonstrating data pipelines  
- Job market trend analysis  

---

## Future Improvements
- Add more sources (Wellfound, company career pages)  
- Skill extraction and ranking  
- Resume matching  
- Email notifications for new jobs  
- Dashboard for job insights  

---

## Notes
- Some platforms may block scraping or change structure  
- Actor configurations may need updates over time  
- Always respect website terms of service  

---

## License
This project is for educational and personal use.
