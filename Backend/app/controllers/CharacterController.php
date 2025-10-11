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

	public function update($id) {
        // 1. Validate input
        $data = $this->validateRequest();
        
        // 2. Update via Model
        $user = User::find($id);
        $user->update($data);
        
        // 3. Redirect or show view
        return redirect('/users/' . $id);
    }
}
?>