<?php
require_once 'cors.php';

require_once 'app\models\Database.php';
require_once 'app\models\CharacterModel.php';

class CharacterController {
    private $characterModel;

    public function __construct() {
        $database = new Database();
        $db = $database->getConnection();
        $this->characterModel = new CharacterModel($db);
    }

	public function getjson() {

		$result = $this->characterModel->getAllCharacters();

		$characters = [];

		while ($row = pg_fetch_assoc($result)) {
			$row['abilities'] = json_decode($row['abilities'], true); // Decode JSONB to array
			$characters[] = $row;
		}

		echo json_encode($characters);
		return json_encode($characters);
	}

	public function insert() {

		if ($_SERVER['REQUEST_METHOD'] === 'POST') {

			$json = file_get_contents('php://input');

			// Convertir la chaîne JSON en tableau associatif PHP
			$data = json_decode($json, true);

			// Extract the data
			$name = $data['name'] ?? '';
			$title = $data['title'] ?? '';
			$role = $data['role'] ?? '';
			$origin = $data['origin'] ?? '';
			$description = $data['description'] ?? '';
			$abilities = $data['abilities'] ?? [];
			$image = strtolower(str_replace(' ', '-', $name)) . '.png';

			$abilitiesJson = json_encode($abilities);
			
			$result = $this->characterModel->insertCharacter($name,$title,$role,$description,$abilitiesJson,$image);

			echo json_encode([
				'success' => true,
				'message' => 'Data received successfully',
				'receivedData' => [
					'name' => $name,
					'title' => $title,
					'role' => $role,
					'origin' => $origin,
					'description' => $description,
					'abilities' => $abilitiesJson
				]
			]);
		
			
		}
	}
}
?>