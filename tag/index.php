<?php
session_start();

// الاتصال بقاعدة البيانات
$host = "localhost";  // أو عنوان السيرفر
$dbname = "tag";
$username = "root";  // اسم المستخدم
$password = "";  // كلمة المرور
$error_message = "";  // متغير لتخزين رسالة الخطأ

// الاتصال بقاعدة البيانات
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("فشل الاتصال بقاعدة البيانات: " . $e->getMessage());
}

// التعامل مع البيانات بعد ارسال النموذج
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // استعلام للتحقق من اسم المستخدم وكلمة المرور
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->execute(['username' => $user]);
    $userData = $stmt->fetch();

    if ($userData && $pass == $userData['password']) {  // تحقق من كلمة المرور بدون تشفير في هذه المرحلة
        $_SESSION['user'] = $userData;  // حفظ بيانات المستخدم في الجلسة
        header('Location: page/money.php');  // تحويل المستخدم إلى الصفحة الرئيسية
        exit();  // تأكد من الخروج بعد التوجيه
    } else {
        $error_message = "برجاء مراجعة البيانات";  // تعيين رسالة الخطأ
    }
}
?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تسجيل الدخول</title>
    <link rel="stylesheet" href="css/login.css">
    <!-- إضافة مكتبة أيقونات جوجل -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- إضافة خط Tajawal -->
    <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet">
    <script>
        // دالة لإغلاق المربع المنبثق
        function closeModal() {
            document.getElementById("errorModal").style.display = "none";  // إخفاء المربع المنبثق
        }

        // عند تحميل الصفحة، نعرض المربع المنبثق فقط إذا كان هناك خطأ
        window.onload = function() {
            <?php if($error_message != ""): ?>
                document.getElementById("errorModal").style.display = "block";  // عرض المربع المنبثق عند وجود خطأ
            <?php endif; ?>
        }
    </script>
</head>
<body>
    <!-- مربع منبثق مع تظليل الخلفية -->
    <div id="errorModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <!-- أيقونة التحذير -->
            <div class="warning-icon">
                <span class="material-icons" style="color: #FF0000; font-size: 40px;">warning</span>
            </div>
            <!-- نص الخطأ -->
            <p><?php echo $error_message; ?></p>
            <!-- زر تواصل معنا -->
            <a href="contact.html" class="contact-btn">تواصل معنا</a>
        </div>
    </div>

    <div class="login-container">
        <h2>تسجيل الدخول</h2>
        <form method="POST" action="">
            <label for="username">اسم المستخدم</label>
            <input type="text" id="username" name="username" required>

            <label for="password">كلمة المرور</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">دخول</button>
        </form>
    </div>
</body>
</html>
