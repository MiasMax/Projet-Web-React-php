<?php
require_once 'cors.php';
require_once 'app\models\Database.php';
require_once 'app\models\BossModel.php';

class BossController {
    private $bossModel;

    public function __construct() {
        $database = new Database();
        $db = $database->getConnection();
        $this->bossModel = new BossModel($db);
    }

	public function upload() {
		if (isset($_FILES['image'])) {
			$fileName = $_FILES['image']['name'];// a faire changer le nom

			// Convert to lowercase
			$fileName = strtolower($fileName);

			// Replace spaces with dashes
			$fileName = str_replace(' ', '-', $fileName);
			
			$tmpPath = $_FILES['image']['tmp_name'];
			$target = "public/images/" . $fileName;

			move_uploaded_file($tmpPath, $target);

			echo json_encode([
				"success" => true,
				"filename" => $fileName,
				"path" => $target
			]);
		}
	}

	public function getjson() {

		$result = $this->bossModel->getAllbosses();

		$bosses = [];

		while ($row = pg_fetch_assoc($result)) {
			$row['attacks'] = json_decode($row['attacks'], true); // Decode JSONB to array
			$row['rewards'] = json_decode($row['rewards'], true); // Decode JSONB to array
			$bosses[] = $row;
		}

		echo json_encode($bosses);
		return json_encode($bosses);
	}

	public function insert() {

		if ($_SERVER['REQUEST_METHOD'] === 'POST') {

			$json = file_get_contents('php://input');

			// Convertir la chaîne JSON en tableau associatif PHP
			$data = json_decode($json, true);

			// Extract the data
			$name = $data['name'] ?? '';
			$title = $data['title'] ?? '';
			$location = $data['location'] ?? '';
			$difficulty = $data['difficulty'] ?? '';
			$description = $data['description'] ?? '';
			$attacks = $data['attacks'] ?? [];
			$rewards = $data['rewards'] ?? [];
			$image = $data['image'];

			$attacksJson = json_encode($attacks);
			$rewardsJson = json_encode($rewards);
			
			$result = $this->bossModel->insertboss($name,$title,$location,$difficulty,$description,$attacksJson,$rewardsJson,$image);

			echo json_encode([
				'success' => true,
				'message' => 'Data received successfully',
				'receivedData' => [
					'name' => $name,
					'title' => $title,
					'location' => $location,
					'difficulty' => $difficulty,
					'description' => $description,
					'attacks' => $attacksJson,
					'rewards' => $rewardsJson
				]
			]);
		
			
		}
	}
}
?>