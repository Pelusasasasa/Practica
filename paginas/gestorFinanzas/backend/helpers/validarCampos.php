<?php
function validarCampos(array $data, array $camposRequeridos){
    foreach ($camposRequeridos as $campo){
        if (!isset($data[$campo]) || $data[$campo] === ''){
            http_response_code(400);
            echo json_encode(['Error' => "Falta el campo '$campo'"]);
            exit;
        }
    }
}