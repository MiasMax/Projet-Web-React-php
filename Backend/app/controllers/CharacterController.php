<?php

require_once 'app\models\Database.php';
require_once 'app\models\CharacterModel.php';

class CharacterController {
    private $characterModel;

    public function __construct() {
        $database = new Database();
        $db = $database->getConnection();
        $this->characterModel = new CharacterModel($db);
    }

    public function index() {
        $stmt = $this->characterModel->getAllCharacters();
        $characters = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $row['abilities'] = explode('|', $row['abilities']);
            $characters[] = $row;
        }
        
        // For API response
        header('Content-Type: application/json');
        echo json_encode(['characters' => $characters]);
        
        // For HTML view (uncomment if needed)
        // require_once '../app/views/characters/index.php';
    }

    public function show($id) {
        $character = $this->characterModel->getCharacterById($id);
        if ($character) {
            $character['abilities'] = explode('|', $character['abilities']);
            header('Content-Type: application/json');
            echo json_encode(['character' => $character]);
        } else {
            http_response_code(404);
            echo json_encode(['message' => 'Character not found']);
        }
    }
}
?>