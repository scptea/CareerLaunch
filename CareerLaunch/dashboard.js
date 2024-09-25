// dashboard-script.js

// Simulating fetching data from a backend (Firebase can be integrated later)
document.addEventListener('DOMContentLoaded', function() {
    // Mock data (replace with real data from Firebase)
    const data = {
        totalStudents: 1200,
        totalEmployers: 150,
        jobOffersSent: 350,
        cvsCreated: 980
    };

    // Populating the dashboard with data
    document.getElementById('total-students').textContent = data.totalStudents;
    document.getElementById('total-employers').textContent = data.totalEmployers;
    document.getElementById('job-offers').textContent = data.jobOffersSent;
    document.getElementById('cvs-created').textContent = data.cvsCreated;
});
