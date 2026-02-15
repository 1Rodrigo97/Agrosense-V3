const axios = require('axios');

// Estado inicial dos silos no simulador para manter a consistência
const farmState = {
    "SILO-Norte": { gas: 180, temp: 22.1 },
    "SILO-Sul":   { gas: 155, temp: 21.4 },
    "SILO-Leste": { gas: 480, temp: 27.8 },
    "SILO-Oeste": { gas: 710, temp: 33.2 }
};

async function updateFarm() {
    const deviceIds = Object.keys(farmState);
    const randomId = deviceIds[Math.floor(Math.random() * deviceIds.length)];
    
    // Simula uma variação pequena e realista (Delta)
    // Temperatura varia +/- 0.2 graus | Gás varia +/- 5 ppm
    const tempDelta = (Math.random() * 0.4 - 0.2);
    const gasDelta = Math.floor(Math.random() * 10 - 5);

    farmState[randomId].temp = parseFloat((farmState[randomId].temp + tempDelta).toFixed(1));
    farmState[randomId].gas = farmState[randomId].gas + gasDelta;

    const data = {
        device_id: randomId,
        gas_level: farmState[randomId].gas,
        temp: farmState[randomId].temp
    };

    try {
        await axios.post('http://localhost:3000/api/telemetry', data);
        console.log(`[REAL TIME] ${randomId} atualizado para ${data.temp}°C | ${data.gas}ppm`);
    } catch (e) {
        console.log("Erro ao conectar no Backend.");
    }
}

// Atualiza um silo aleatório a cada 5 segundos
// Passa a impressão de que os dados estão fluindo, mas sem pressa.
setInterval(updateFarm, 5000);