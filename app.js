const express = require('express');
const app = express();
const PORT = 3000;

// Your info
const fullName = "Charley E. Comia";
const classSection = "BSIT NT-4101";
const quote = "You don't need to be perfect - just be persistent.";

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Node.js App</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', Arial, sans-serif;
            }

            body {
                background: linear-gradient(135deg, #77a7ff, #a07bff, #ff80c8);
                background-size: 300% 300%;
                animation: gradientFlow 12s ease infinite;

                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
            }

            @keyframes gradientFlow {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            .card {
                backdrop-filter: blur(12px);
                background: rgba(255, 255, 255, 0.72);
                padding: 40px;
                border-radius: 22px;
                box-shadow: 0 12px 30px rgba(0,0,0,0.15);
                max-width: 450px;
                width: 100%;
                text-align: center;
                border: 1px solid rgba(255,255,255,0.4);
            }

            .info {
                font-size: 20px;
                margin: 14px 0;
                color: #333;
                font-weight: 500;
            }

            .quote {
                margin-top: 25px;
                padding: 14px 18px;
                background: rgba(255, 255, 255, 0.85);
                border-radius: 14px;
                font-style: italic;
                font-size: 17px;
                color: #444;
                border: 1px solid #ddd;
                box-shadow: 0 4px 12px rgba(0,0,0,0.06);
            }

            /* Responsive */
            @media (max-width: 480px) {
                .card {
                    padding: 28px;
                }
                .info {
                    font-size: 18px;
                }
                .quote {
                    font-size: 15px;
                }
            }
        </style>
    </head>
    <body>
        <div class="card">
            <p class="info"><strong></strong> ${fullName}</p>
            <p class="info"><strong></strong> ${classSection}</p>
            <p class="quote">"${quote}"</p>
        </div>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
