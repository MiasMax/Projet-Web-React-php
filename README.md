# 🌐 Projet Web ENSIIE

Projet de développement web full-stack avec React en frontend et PHP/PostgreSQL en backend.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- **Node.js** (pour le frontend React)
- **XAMPP** (serveur web local)
- **PostgreSQL** (base de données)

## 📥 Installation

### 1. Configuration de l'environnement

#### PostgreSQL
- Téléchargez et installez PostgreSQL depuis : https://www.postgresql.org/download

#### Configuration PHP
- Allez dans `C:\xampp\php\php.ini`
- Décommentez les lignes suivantes :
  ```ini
  extension=pdo_pgsql
  extension=pgsql

#### Configuration React avec vite

Crée un projet react :
```bash
npm create vite@latest Projet-web-Frontend
```

#### Configuration tailwindcss

Crée une config tailwindcss :
```bash
npm install tailwindcss @tailwindcss/vite
```

et add dans vite.config.js : 

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
plugins: [
	react(),
	tailwindcss()
	],
})
```

## 🚀 Execution

## Frontend

### 1. Lance REACT

Aller dans le projet Projet-web-react-php/Frontend

Lancé le server React avec :
```bash
npm run dev
```
Et se rendre a l'adresse local: http://localhost:5173

## Backend

### 1. XAMPP

Ouvre XAMPP 
démarre le service Apache 

Les fichier du server sont dans :
```bash
C:\xampp\htdocs
```

on se connect a la page web comme depuis :
http://localhost/index.php

## Base de donnée

ouvre pgadmin 4 avec projetweb


