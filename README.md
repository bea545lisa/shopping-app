# Shopping List App
Eine einfache Fullstack-Anwendung zum Verwalten einer Einkaufsliste.
## 🛠 Tech Stack
- Frontend: React + TypeScript + Vite + Material UI
- Backend: Node.js + Express + TypeScript
- Datenbank: MongoDB Atlas

## ⚙️ Setup (Projekt starten)
### Backend
```bash
cd backend
npm install
npm run dev
```
### Frontend
```md
cd frontend
npm install
npm run dev
```

## 🔗 Live Demo

Die Anwendung kann lokal ausgeführt werden:

Frontend: http://localhost:5173  
Backend: http://localhost:3000

## ✨ Features
* ➕ Produkte hinzufügen
* ✅ Produkte als gekauft markieren
* 🗑️ Produkte löschen
* 🎨 Modernes UI (Dark Mode + Material UI)
* ⚡ Smooth UX (Enter zum Hinzufügen, direkte Updates)

## 🗄️ Datenbank
Die Anwendung nutzt MongoDB Atlas.

## 🔑 Environment Variable (Backend)
Erstelle eine .env Datei im backend Ordner:
MONGO_URI=mongodb+srv://user:password@cluster0.xxxxx.mongodb.net/shopping-app

## 🛠️ Installation (optional)
Dieser Schritt ist optional und nur notwendig, wenn das Projekt von Grund auf neu erstellt werden soll.
### Backend
```md
npm init -y
npm install express mongoose cors
npm install -D typescript ts-node-dev @types/node @types/express @types/cors
npx tsc --init
```
### Frontend
```md
npm create vite@latest .
npm install
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

## 📌 Hinweise
* Backend und Frontend laufen getrennt
* Keine Authentifizierung erforderlich
* Fokus liegt auf sauberem Code und UX

## 📷 Vorschau
![preview.png](preview.png)
