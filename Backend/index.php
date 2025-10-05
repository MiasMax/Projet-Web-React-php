<?php
require_once 'app/Router.php';

$router = new Router();

// Define routes
$router->addRoute('/api/characters', 'CharacterController', 'index');
$router->addRoute('/api/characters/{id}', 'CharacterController', 'show');
$router->addRoute('/api/bosses', 'BossController', 'index');
$router->addRoute('/api/game-info', 'GameController', 'index');

// Dispatch the request
$router->dispatch($_SERVER['REQUEST_URI']);
?>