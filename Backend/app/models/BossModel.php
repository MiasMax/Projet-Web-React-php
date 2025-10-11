<?php
require_once 'cors.php';

class BossModel {
	private $conn;
	private $table = 'boss';

	public function __construct($db) {
		$this->conn = $db;
	}

	public function getAllCharacters() {

		$query = "SELECT * FROM bosses";

		$result = pg_query($this->conn, $query);
		
		return $result;
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