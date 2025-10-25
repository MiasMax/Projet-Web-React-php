<?php
require_once 'cors.php';

class BossModel {
	private $conn;
	private $table = 'bosses';

	public function __construct($db) {
		$this->conn = $db;
	}

	public function getLastId() {

		$query = "SELECT * FROM bosses ORDER BY id DESC LIMIT 1";
		$result = pg_query($this->conn, $query);
		$row = pg_fetch_assoc($result);

		return $row['id'] + 1;
	}

	public function getAllbosses() {

		$query = "SELECT * FROM bosses";

		$result = pg_query($this->conn, $query);
		
		return $result;
	}

	public function insertboss($name,$title,$location,$difficulty,$description,$attacksJson,$rewardsJson,$image) {
		
		$id = $this->getLastId();

		$query = "INSERT INTO bosses (id, name, title, location, difficulty, description, attacks, rewards, image) 
				VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
				RETURNING id";

		$result = pg_query_params($this->conn, $query, [
			$id,
			$name,
			$title,
			$location,
			$difficulty,
			$description,
			$attacksJson,
			$rewardsJson,
			$image
		]);

		if ($result) {
			$row = pg_fetch_assoc($result);
			return $row['id'];
		}
		
		return $result;
	}
}
?>