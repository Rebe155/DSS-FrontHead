<?php
// Permitir solicitudes desde React (puerto 5173)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Conexión a la base de datos
$host = "localhost";
$user = "root";
$pass = "";
$db = "progpractice_db";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error de conexión"]);
    exit;
}

// Recibir datos del frontend
$data = json_decode(file_get_contents("php://input"), true);
$username = $data["username"] ?? "";
$password = $data["password"] ?? "";

if (strlen($username) < 5 || strlen($password) < 6) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Usuario o contraseña inválidos."]);
    exit;
}

// Buscar usuario en la base de datos
$stmt = $conn->prepare("SELECT id_usuario, contraseña FROM usuarios WHERE nombre = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["success" => false, "message" => "Usuario no encontrado."]);
    exit;
}

$user = $result->fetch_assoc();

// Verificar la contraseña
if (password_verify($password, $user['contraseña'])) {
    echo json_encode([
        "success" => true,
        "message" => "Inicio de sesión exitoso",
        "userId" => $user['id_usuario']
    ]);
} else {
    echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
}
$conn->close();
?>
