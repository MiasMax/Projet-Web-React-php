# 🚀 Guide d'installation rapide - Projet Web ENSIIE 

**Créé par** : Maxence TOURNAUD  
**Date** : Novembre 2025

## 📋 Prérequis

Installez les outils suivants avant de commencer :

- **Node.js** - https://nodejs.org
- **PHP** (version 7.4 ou supérieure)
- **PostgreSQL** - https://www.postgresql.org/download

## 📦 Installation depuis le fichier .zip

### 1. Extraction du projet

```bash
# Extrayez le fichier .zip dans votre répertoire de travail
```

### 2. Configuration de la base de données

#### Installation PostgreSQL
1. Installez PostgreSQL depuis le lien ci-dessus
2. Configurez le mot de passe : `projetweb`
3. Créez/utilisez la base de données : `postgres`
4. Ajouté les tables et les donnée qui sont dans le fichier:
```bash
sqlData/silksongData.sql
```

### 3. Configuration PHP

#### Activer les extensions PostgreSQL
1. Ouvrez le fichier de configuration PHP : `php.ini`
2. Décommentez (retirez le `;` devant) les lignes suivantes :
   ```ini
   extension=pdo_pgsql
   extension=pgsql
   ```

### 4. Installation des dépendances Frontend

```bash
# Naviguez vers le dossier Frontend
cd ../Frontend/Projet-web-Frontend

# Installez les dépendances npm
npm install

# Installez React Router
npm install react-router-dom
```

### 5. Configuration de la connexion

Les paramètres de connexion sont définis dans :

**Frontend** : address du backend (`app.jsx`) :
```javascript
export const API_URL_IMG = 'http://localhost:8000/public/images/';
export const API_URL = 'http://localhost:8000/';
```

**Backend** : connection to the database (`Database.php`) :
```php
private $host = 'localhost';
private $db_name = 'postgres';
private $username = 'postgres';
private $password = 'projetweb';
```

## ▶️ Lancement de l'application

### Démarrer le Backend

```bash
# Dans le dossier Backend
cd Backend
php -S localhost:8000
```

### Démarrer le Frontend

```bash
# Dans le dossier Frontend
cd Frontend/Projet-web-Frontend
npm run dev
```

L'application sera accessible à : **http://localhost:5173**

## 🔗 URLs importantes


## ✅ Vérification

Une fois tout lancé, vous devriez avoir :
- ✓ PostgreSQL en cours d'exécution
- ✓ Serveur PHP sur le port 8000
**Backend API** : http://localhost:8000
- ✓ Application React sur le port 5173
**Frontend** : http://localhost:5173

---

📝 **Note** : Ce projet utilise Tailwind CSS via CDN (déjà configuré dans `index.html`)