import express from "express";
import cors from "cors";
import produtoRoutes from "./routes/produtoRoutes";
import contatoRoutes from "./routes/contatoRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/produtos", produtoRoutes);
app.use("/api/contato", contatoRoutes);

app.get("/", (req, res) => {
  res.json({ message: "🌱 Raiz Café API" });
});

export default app;
