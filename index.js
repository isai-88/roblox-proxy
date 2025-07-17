const express = require("express");
const fetch = require("node-fetch"); // Si usas Node 18+ puedes usar fetch nativo
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/user/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    // Cambia esta URL si necesitas otro endpoint
    const response = await fetch(`https://economy.roblox.com/v2/users/${userId}/inventory/34?limit=100&cursor=`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos de Roblox" });
  }
});

app.get("/", (req, res) => {
  res.send("Servidor Proxy activo.");
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
