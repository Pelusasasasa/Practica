<?php

//Correr servidor: php -S localhost:8000


$host = "localhost";
$user = 'root';
$pass = '';
$db = 'finanza';

$conexion = new mysqli($host, $user, $pass, $db);

if($conexion->connect_error){
    die('Error de conexion: ' . $conexion->connect_error);
}
?>