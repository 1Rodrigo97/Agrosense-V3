const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 1. Criamos um OBJETO fixo. A chave é o ID do silo.
// Isso garante que os silos fiquem "travados" na tela.
let silos = {
    "SILO-Norte": { device_id: "SILO-Norte", gas_level: 100, temp: 20.0, status: "Normal", color: "green", timestamp: "--:--:--" },
    "SILO-Sul":   { device_id: "SILO-Sul",   gas_level: 100, temp: 20.0, status: "Normal", color: "green", timestamp: "--:--:--" },
    "SILO-Leste": { device_id: "SILO-Leste", gas_level: 100, temp: 20.0, status: "Normal", color: "green", timestamp: "--:--:--" },
    "SILO-Oeste": { device_id: "SILO-Oeste", gas_level: 100, temp: 20.0, status: "Normal", color: "green", timestamp: "--:--:--" }
};

app.post('/api/telemetry', (req, res) => {
    const { device_id, gas_level, temp } = req.body;
    
    // 2. Verificamos se o ID enviado existe no nosso objeto fixo
    if (silos[device_id]) {
        let status = "Normal";
        let color = "green";

        // Lógica de Alerta
        if (gas_level > 650 || temp > 32) {
            status = "CRÍTICO: Fermentação";
            color = "red";
        } else if (gas_level > 450 || temp > 28) {
            status = "Alerta: Monitorar";
            color = "yellow";
        }

        // 3. ATUALIZAMOS o silo existente em vez de dar um .push()
        silos[device_id] = {
            device_id,
            gas_level,
            temp,
            status,
            color,
            timestamp: new Date().toLocaleTimeString()
        };
        
        console.log(`[ATUALIZADO] ${device_id} - Gás: ${gas_level} - Status: ${status}`);
    } else {
        console.log(`[AVISO] Recebido ID desconhecido: ${device_id}`);
    }

    res.json({ success: true });
});

app.get('/api/dashboard', (req, res) => {
    // 4. Retornamos apenas os valores do objeto como uma lista para o Vue
    res.json(Object.values(silos));
});

app.listen(3000, () => {
    console.log('-------------------------------------------');
    console.log('   SISTEMA AGROSENSE ONLINE NA PORTA 3000  ');
    console.log('-------------------------------------------');
});