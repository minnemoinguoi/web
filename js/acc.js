function signup(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {
        username: username,
        email: email,
        password: password
    };
    
    var json = JSON.stringify(user);
    localStorage.setItem("user", json);
    alert("Đăng ký thành công!");
}

function login(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = localStorage.getItem("user"); 
    var data = JSON.parse(user);

    if (username.trim() === '' || password.trim() === '') {
        alert("Vui lòng nhập tên người dùng và mật khẩu.");
    } else if (user === null) {
        alert("Tài khoản không tồn tại. Vui lòng đăng ký trước.");
    } else if (username === data.username && email === data.email && password === data.password) {
        alert("Đăng nhập thành công!");
        window.location.href = "/index.html"; 
    } else {
        alert("Tên người dùng hoặc mật khẩu không chính xác!");
    }
}
