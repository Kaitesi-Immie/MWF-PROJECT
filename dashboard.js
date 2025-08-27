// Dashboard interactivity (example: pie chart animation)
document.addEventListener("DOMContentLoaded", () => {
    const pieChart = document.getElementById("pieChart");
    // Animate pie chart
    let degree = 0;
    const animate = setInterval(() => {
        degree += 2;
        if(degree > 360) clearInterval(animate);
        pieChart.style.background = `conic-gradient(
            #61dafb 0% ${Math.min(degree, 38)}%, 
            #1a4d8f 38% ${Math.min(degree, 68)}%, 
            #0f2a54 68% 100%
        )`;
    }, 20);
});
