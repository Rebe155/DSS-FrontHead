<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

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

$data = json_decode(file_get_contents("php://input"), true);
$userId = $data["user_id"] ?? null;
$courseId = $data["course_id"] ?? null;

if (!$userId || !$courseId) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Datos incompletos"]);
    exit;
}

// Solo actualizar si el progreso actual es 'Por Comenzar'
$check = $conn->prepare("SELECT progress FROM user_courses WHERE user_id = ? AND course_id = ?");
$check->bind_param("ii", $userId, $courseId);
$check->execute();
$result = $check->get_result();
$row = $result->fetch_assoc();

if ($row && $row['progress'] === 'Por Comenzar') {
    $stmt = $conn->prepare("UPDATE user_courses SET progress = 'En Progreso', last_accessed = NOW() WHERE user_id = ? AND course_id = ?");
    $stmt->bind_param("ii", $userId, $courseId);
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Curso actualizado a 'En Progreso'"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error al actualizar el curso"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Curso ya en progreso o completado"]);
}

$conn->close();
?>
