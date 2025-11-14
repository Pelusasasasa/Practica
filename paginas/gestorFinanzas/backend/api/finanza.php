<?php
    include("../conexion.php");
    include_once __DIR__ . "/../helpers/cors.php";
    include_once __DIR__ . "/../helpers/validarCampos.php";
    header("Content-Type: application/json");

    $data = json_decode(file_get_contents('php://input'), true);

    switch($_SERVER["REQUEST_METHOD"]){

        //GET: listar todas las categorias
        case "GET":
            $sql = "SELECT finanza.*, categoria.id AS categoria_id, categoria.nombre AS categoria_nombre 
                    FROM finanza 
                    INNER JOIN categoria ON finanza.categoria_id = categoria.id 
                    ORDER BY finanza.id DESC";
            $resultado = $conexion->query($sql);
            $finanza = [];

            while($fila = $resultado->fetch_assoc()){
                // Convertir todos los atributos a sus tipos apropiados
                $fila['id'] = intval($fila['id']);
                $fila['importe'] = floatval($fila['importe']);
                $fila['categoria_id'] = intval($fila['categoria_id']);
                $finanza[] = $fila;
            };

            echo json_encode($finanza);
            break;

            //Agregar una categoria
            case "POST":
                validarCampos($data, ['fecha', 'descripcion', 'importe', 'tipo', 'categoria_id']);


                $fecha = $conexion->real_escape_string($data["fecha"]);
                $descripcion = $conexion->real_escape_string($data["descripcion"]);
                $importe = floatval($data["importe"]);
                $tipo = $conexion->real_escape_string($data["tipo"]);
                $categoria_id = intval($data["categoria_id"]);
                
                
                $sql = "INSERT INTO finanza (fecha, descripcion, importe, tipo, categoria_id) VALUES ('$fecha', '$descripcion', '$importe', '$tipo', '$categoria_id')";

                if($conexion->query($sql)){
                    echo json_encode(["mensaje" => "Finanza agregada correctamente"]);
                }else{
                    http_response_code(500);
                    echo json_encode(["error" => $conexion->error]);
                }
                break;

            case "PUT":
                validarCampos($data, ['fecha', 'descripcion', 'importe', 'tipo', 'categoria_id']);

                $id = intval($_GET["id"]);
                $fecha = $conexion->real_escape_string($data["fecha"]);
                $descripcion = $conexion->real_escape_string($data["descripcion"]);
                $importe = floatval($data["importe"]);
                $tipo = $conexion->real_escape_string($data["tipo"]);
                $categoria_id = intval($data["categoria_id"]);

                $sql = "UPDATE finanza SET fecha='$fecha', descripcion='$descripcion', importe='$importe', tipo='$tipo', categoria_id='$categoria_id' WHERE id=$id";

                if($conexion->query($sql)){
                    echo json_encode(["mensaje" => "finanza modificada correctamente"]);
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

                $sql = "DELETE FROM finanza WHERE id=$id";

                if($conexion->query($sql)){
                    echo json_encode(["mensaje" => "Finanza Eliminada correctamente"]);
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