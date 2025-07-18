# simplenodapp
simplenodeapp
As part of the DevSecOps task, Trivy scan reported a high severity vulnerability:

- Package: cross-spawn
- CVE: CVE-2024-21538
- Installed: 7.0.3
- Fixed in: 7.0.5

To remediate:
1. Upgraded cross-spawn to version 7.0.5 using:
   npm install cross-spawn@7.0.5 --save

2. Rebuilt the Docker image:
   docker build -t myapp:latest .

3. Re-ran Trivy scan:
   trivy image --input  myapp:latest 

✅ The updated scan showed **0 HIGH/CRITICAL vulnerabilities**, confirming the fix.
