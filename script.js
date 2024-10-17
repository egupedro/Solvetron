document.getElementById("solarForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let consumption = document.getElementById("consumption").value;
    let roofArea = document.getElementById("roofArea").value;
    let solarHours = document.getElementById("solarHours").value;

    let panelEfficiency = 0.18; // Average efficiency of solar panels (18%)
    let panelOutput = 250; // Average solar panel output in watts (250W)
    
    let dailyConsumption = consumption / 30; // Daily energy consumption
    let energyOutputPerSquareMeter = panelEfficiency * solarHours * 1000; // kWh/m²
    let totalEnergyOutput = roofArea * energyOutputPerSquareMeter;

    let result = totalEnergyOutput >= dailyConsumption 
        ? `Your roof can support ${Math.ceil(dailyConsumption / energyOutputPerSquareMeter)} panels to meet your daily consumption!` 
        : "Your roof size may not be enough for your consumption needs.";

    document.getElementById("result").innerHTML = result;
});
