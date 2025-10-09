<?php
class Database {
    private $host = 'localhost';
    private $db_name = 'silksong_db';
    private $username = 'postgres';
    private $password = 'projetweb';
    public $conn;

    public function getConnection() {
		$this->conn = null;
		try {
			$connection_string = "host=" . $this->host . " dbname=" . $this->db_name . " user=" . $this->username . " password=" . $this->password;
			$this->conn = pg_connect($connection_string);
			
			if (!$this->conn) {
				throw new Exception("Connection error: Unable to connect to PostgreSQL database");
			}
		} catch(Exception $exception) {
			echo "Connection error: " . $exception->getMessage();
		}
		return $this->conn;
    }
}
?>