This repository contains a sample Node.js application (simplenodeapp) designed as part of a DevSecOps assessment. The project demonstrates secure CI/CD practices including vulnerability scanning, static analysis, and Docker image hardening.

📁 Project Structure
bash
Copy
Edit
simplenodeapp/
├── .github/workflows/main.yml    # GitHub Actions pipeline
├── Dockerfile                    # Container build definition
├── package.json                  # Node.js dependencies
├── server.js                     # Simple Node.js HTTP server
└── README.md                     # Project documentation
🧰 Technologies Used
Node.js 18

Docker

GitHub Actions

Trivy (by Aqua Security) – File system & container image vulnerability scanning

Semgrep – Static code analysis

✅ Tasks Completed
1. Fixed High Severity CVE
Vulnerability: cross-spawn@7.0.3

CVE ID: CVE-2024-21538

Remediation:

bash
Copy
Edit
npm install cross-spawn@7.0.5 --save
2. Built Docker Image
bash
Copy
Edit
docker build -t myapp:latest .
3. Security Scanning in CI Pipeline
File system scanning (Trivy)

Static code scanning (Semgrep)

Docker image scanning (Trivy)

🚀 How to Run Locally
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/simplenodeapp.git
cd simplenodeapp
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Application
bash
Copy
Edit
node server.js
Server will start at http://localhost:3000

🐳 Docker Instructions
Build the Docker Image
bash
Copy
Edit
docker build -t myapp:latest .
Run the Docker Container
bash
Copy
Edit
docker run -p 3000:3000 myapp:latest
🔐 Security Scanning
Run Trivy File System Scan
bash
Copy
Edit
trivy fs .
Run Trivy Image Scan
bash
Copy
Edit
trivy image myapp:latest
⚙️ GitHub Actions – Secure CI/CD Pipeline
The GitHub Actions pipeline performs the following on every push to main:

Checkout code

Install Node.js and dependencies

Run Trivy FS scan

Run Semgrep static analysis

Build Docker image

Scan Docker image with Trivy

Pipeline config: .github/workflows/main.yml

📄 Submission Package
✅ Dockerfile, pipeline config (.github/workflows/main.yml), and app source code

✅ README.md with setup instructions

✅ PDF report (separately attached)

