// Dashboard dengan visualisasi grafik
document.addEventListener('DOMContentLoaded', function() {
    createSalesChart();
});

function createSalesChart() {
    const canvas = document.getElementById('salesChart');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = 280;
    
    // Data penjualan bulanan
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
    const sales = [8.5, 10.2, 9.8, 12.5, 14.3, 15.5]; // dalam juta
    
    const maxSales = Math.max(...sales);
    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw axes
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();
    
    // Draw bars
    const barWidth = chartWidth / months.length * 0.6;
    const barSpacing = chartWidth / months.length;
    
    sales.forEach((sale, index) => {
        const barHeight = (sale / maxSales) * chartHeight;
        const x = padding + index * barSpacing + (barSpacing - barWidth) / 2;
        const y = canvas.height - padding - barHeight;
        
        // Draw bar with gradient
        const gradient = ctx.createLinearGradient(0, y, 0, canvas.height - padding);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw value on top of bar
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(sale + 'jt', x + barWidth / 2, y - 5);
        
        // Draw month label
        ctx.fillText(months[index], x + barWidth / 2, canvas.height - padding + 20);
    });
}
