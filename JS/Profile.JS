const loginForm = document.getElementById('login-form');

loginForm.addEventListener('button', (event) => {
  event.preventDefault(); // ngăn chặn form được gửi đi

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '' || password === '') {
    alert('Vui lòng nhập tên đăng nhập và mật khẩu');
  } else if (username === 'admin' && password === 'admin') {
    alert('Đăng nhập thành công!');
    // Chuyển hướng đến trang chính của trang web
    window.location.href = 'Main.html';
  } else {
    alert('Tên đăng nhập hoặc mật khẩu không đúng');
  }
});
