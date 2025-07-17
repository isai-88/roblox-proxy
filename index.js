const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api", async (req, res) => {
  try {
    const { userId } = req.query;

    const response = await fetch(`https://games.roblox.com/v1/users/${userId}/games`);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});

app.get("/", (req, res) => {
  res.send("Servidor Proxy para Roblox activo.");
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
