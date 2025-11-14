<?php

    include("../conexion.php");
    include_once __DIR__ . "/../helpers/cors.php";
    header("Content-Type: application/json");

    $data = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER["REQUEST_METHOD"]){

        //GET: Listar todas las categorias
        case "GET":
            $sql = "SELECT * FROM categoria ORDER BY nombre ASC";
            $resultado = $conexion->query($sql);
            $categorias = [];

            while($fila = $resultado->fetch_assoc()){
                $categorias[] = $fila;
            };

            echo json_encode($categorias);
            break;

            //POST: Agregar una categoria
            case "POST":
                if(!isset($data["nombre"])){
                    http_response_code(400);
                    echo json_encode(['Error' => 'Falta el campo nombre']);
                    exit;
                }

                $nombre = $conexion->real_escape_string($data["nombre"]);
                $sql = "INSERT INTO categoria (nombre) VALUES ('$nombre')";

                if($conexion->query($sql)){
                    echo json_encode(["mensaje" => "Categoria agregada correctamente"]);
                }else{
                    http_response_code(500);
                    echo json_encode(["error" => $conexion->error]);
                }
                break;

            case "PUT":
                if(!isset($data["nombre"])){
                    http_response_code(400);
                    echo json_encode(['Error' => 'Falta el campo nombre']);
                    exit;
                }

                $id = intval($_GET["id"]);
                $nombre = $conexion->real_escape_string($data["nombre"]);

                $sql = "UPDATE categoria SET nombre='$nombre' WHERE id=$id";

                if($conexion->query($sql)){
                    echo json_encode(["mensaje" => "Categoria modificada correctamente"]);
                }else{
                    http_response_code(500);
                    echo json_encode(["error" => $conexion->error]);
                };

                break;
            case "DELETE":
                if(!isset($_GET["id"])){
                    http_response_code(400);
                    echo json_encode(['Error' => 'Falta el campo id']);
                    exit;
                }

                $id = intval($_GET["id"]);

                $sql = "DELETE FROM categoria WHERE id=$id";

                if($conexion->query($sql)){
                    echo json_encode(["mensaje" => "Categoria Eliminada correctamente"]);
                }else{
                    http_response_code(500);
                    echo json_encode(["error" => $conexion->error]);
                };
                break;

                default:
                    http_response_code(405);
                    echo json_encode(["error" => "Método no permitido"]);
                    break;
    }
?>