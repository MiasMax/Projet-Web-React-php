<?php
require_once 'cors.php';
require_once 'app/Router.php';


$router = new Router();

// Define routes
$router->addRoute('/api/characters', 'CharacterController', 'getjson');
$router->addRoute('/api/characters/insert', 'CharacterController', 'insert');
$router->addRoute('/api/characters/delete', 'CharacterController', 'delete');

$router->addRoute('/api/bosses', 'BossController', 'getjson');
$router->addRoute('/api/bosses/insert', 'BossController', 'insert');
$router->addRoute('/api/bosses/delete', 'BossController', 'delete');

$router->addRoute('/api/upload', 'CharacterController', 'upload');

// Dispatch the request
$router->dispatch($_SERVER['REQUEST_URI']);

?>