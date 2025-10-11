<?php
require_once 'cors.php';
require_once 'app/Router.php';


$router = new Router();

// Define routes
$router->addRoute('/api/characters', 'CharacterController', 'getjson');
$router->addRoute('/api/bosses', 'BossController', 'getjson');

// Dispatch the request
$router->dispatch($_SERVER['REQUEST_URI']);

?>