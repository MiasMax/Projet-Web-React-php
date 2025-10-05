<?php
class Router {
    protected $routes = [];

    public function addRoute($route, $controller, $method) {
        $this->routes[$route] = ['controller' => $controller, 'method' => $method];
    }

    public function dispatch($uri) {
        $path = parse_url($uri, PHP_URL_PATH);
        $path = str_replace('/silksong-backend', '', $path); // Adjust for subdirectory
        
        foreach ($this->routes as $route => $config) {
            // Simple routing - you can enhance with regex for dynamic parameters
            if ($path === $route) {
                $controller = $config['controller'];
                $method = $config['method'];
                
                require_once "../app/controllers/$controller.php";
                $controllerInstance = new $controller();
                $controllerInstance->$method();
                return;
            }
        }
        
        // 404 Not Found
        http_response_code(404);
        echo json_encode(['message' => 'Route not found']);
    }
}
?>