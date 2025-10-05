-- backend/database/schema.sql
CREATE DATABASE IF NOT EXISTS silksong_wiki;
USE silksong_wiki;

-- Table des personnages
CREATE TABLE characters (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  title VARCHAR(200),
  image VARCHAR(50),
  description TEXT,
  abilities JSON,
  role VARCHAR(50)
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Données initiales
INSERT INTO characters (name, title, image, description, abilities, role) VALUES
('Hornet', 'Protagoniste et Princesse Protectrice', '🕷️', 'Héroïne jouable, princesse-protectrice de Hallownest', '["Toile de soie", "Aiguilles", "Arts de la soie"]', 'Protagoniste'),
('Shakra', 'Reine des Tisseuses', '👑', 'Souveraine mystérieuse du royaume de la soie', '["Contrôle de la soie", "Commandement"]', 'PNJ important');