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

	public function getjson() {

		$result = $this->bossModel->getAllCharacters();

		$bosses = [];

		while ($row = pg_fetch_assoc($result)) {
			$row['attacks'] = json_decode($row['attacks'], true); // Decode JSONB to array
			$row['rewards'] = json_decode($row['rewards'], true); // Decode JSONB to array
			$bosses[] = $row;
		}

		echo json_encode($bosses);
		return json_encode($bosses);
	}
}
?>