document.addEventListener("DOMContentLoaded", () => {
    const reportsContainer = document.getElementById("reportsContainer");

    // Example reports array
    const reports = [
        {
            title: "Sales Report – July 2025",
            text: "Total sales increased by 18% compared to June. The most sold items were wooden shelves and cabinets. Online orders also rose significantly. Weekly tracking helped spot mid-month slumps and adjust marketing.",
            date: "Last updated: July 25, 2025"
        },
        {
            title: "Stock Movement – July 2025",
            text: "Over 200 units restocked. Most restocked items included hardwood planks and fittings. Losses from damaged goods reduced by 35%. Weekly audits are improving accountability across store branches.",
            date: "Last updated: July 23, 2025"
        }
    ];

    // Render reports
    reports.forEach(report => {
        const card = document.createElement("div");
        card.className = "report-card";
        card.innerHTML = `
            <div class="report-title">${report.title}</div>
            <div class="report-text">${report.text}</div>
            <div class="report-date">${report.date}</div>
        `;
        reportsContainer.appendChild(card);
    });
});
