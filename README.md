# 🌐 Projet Web ENSIIE

Projet de développement web full-stack avec React en frontend et PHP/PostgreSQL en backend.

Front
D:\Project Informatique\Projet-Web-React-php

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

##### Add composer au php de xampp

install :
https://getcomposer.org/download

add this to your path (du system ou du user)
C:\ProgramData\ComposerSetup\bin

system -> variable d'environement

##### install dotenv variable
composer require vlucas/phpdotenv

#### Configuration React avec vite

Crée un projet react :
```bash
npm create vite@latest Projet-web-Frontend
```
```bash
npm install react-router-dom
```

#### Configuration tailwindcss

Changer le index.html : 
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Silksong Wiki</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
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

#### Interface Graphique :

ouvre "pgadmin 4" avec projetweb

query tool worplace
select the current BD

#### CMD :

ouvre psql 









Dans Front npm run dev 

dans back php -S localhost:8000