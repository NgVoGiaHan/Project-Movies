// if already logged in, redirect to home page
if (localStorage.getItem("currentUser")) {
  location.href = "./index.html";
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (username.length < 6) {
    alert("Tên người dùng phải có ít nhất 6 ký tự");
  } else if (password.length < 8) {
    alert("Mật khẩu phải có ít nhất 8 ký tự");
  } else if (!password.match(lowerCaseLetter)) {
    alert("Mật khẩu phải chứa chữ cái thường");
  } else if (!password.match(upperCaseLetter)) {
    alert("Mật khẩu phải chứa chữ cái hoa");
  } else if (!password.match(numbers)) {
    alert("Mật khẩu phải chứa số hoặc ký tự đặc biệt");
  } else {
    if (localStorage.getItem("users")) {
      let users = JSON.parse(localStorage.getItem("users"));

      users.push({
        email,
        password,
        username,
      });

      localStorage.setItem("users", JSON.stringify(users));
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            email,
            password,
            username,
          },
        ])
      );
    }

    alert("Tạo tài khoản thành công! Vui lòng đăng nhập.");
    location.href = "./login.html";
  }
});
