<?php
require_once 'cors.php';

class CharacterModel {
	private $conn;
	private $table = 'characters';

	public function __construct($db) {
		$this->conn = $db;
	}

	public function getLastId() {

		$query = "SELECT * FROM characters ORDER BY id DESC LIMIT 1";
		$result = pg_query($this->conn, $query);
		$row = pg_fetch_assoc($result);

		return $row['id'] + 1;
	}

	public function getAllCharacters() {

		$query = "SELECT * FROM characters";

		$result = pg_query($this->conn, $query);
		
		return $result;
	}

	public function insertCharacter($name, $title, $role, $description, $abilities, $image) {

		$id = $this->getLastId();

		$query = "INSERT INTO characters (id, name, title, description, abilities, image, role) 
				VALUES ($1, $2, $3, $4, $5, $6, $7) 
				RETURNING id";

		$result = pg_query_params($this->conn, $query, [
			$id,
			$name,
			$title,
			$description,
			$abilities,
			$image,
			$role
		]);

		if ($result) {
			$row = pg_fetch_assoc($result);
			return $row['id'];
		}
		
		return false;
	}
}
?>