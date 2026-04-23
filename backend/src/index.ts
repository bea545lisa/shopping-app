import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB Atlas verbunden"))
  .catch(err => {
    console.error("❌ DB Fehler:");
    console.error(err.message);
  });

import { Item } from "./models/Items";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API läuft");
});

app.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000");
});

app.get("/items", async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "Fehler beim Laden" });
  }
});

app.post("/items", async (req, res) => {
  try {
    const item = new Item({
      name: req.body.name
    });

    await item.save();

    res.json(item);
  }
  catch (err) {
    console.error(err); // 👈 HIER!
    res.status(500).json({ error: "Fehler beim Speichern" });
  }
});

app.put("/items/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { bought: req.body.bought },
      { new: true }
    );

    res.json(item);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "Fehler beim Update" });
  }
});

app.delete("/items/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "Fehler beim Löschen" });
  }
});

