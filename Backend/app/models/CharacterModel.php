<?php
class CharacterModel {
    private $conn;
    private $table = 'characters';

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getAllCharacters() {
        $query = "SELECT c.*, GROUP_CONCAT(ca.ability SEPARATOR '|') as abilities 
                  FROM characters c 
                  LEFT JOIN character_abilities ca ON c.id = ca.character_id 
                  GROUP BY c.id";
        
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function getCharacterById($id) {
        $query = "SELECT c.*, GROUP_CONCAT(ca.ability SEPARATOR '|') as abilities 
                  FROM characters c 
                  LEFT JOIN character_abilities ca ON c.id = ca.character_id 
                  WHERE c.id = ? 
                  GROUP BY c.id";
        
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
?>