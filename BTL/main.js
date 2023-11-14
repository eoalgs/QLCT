function submitReview() {
    // Lấy nội dung đánh giá từ ô văn bản
    var reviewContent = document.querySelector('.review-textarea').value;

    // Tạo một đối tượng chứa thông tin đánh giá (ở đây tạm thời là console.log)
    console.log({
      content: reviewContent,
      user: 'Ẩn Danh' // Đây là giả sử người dùng ẩn danh
    });

    // Tạo một phần tử p chứa nội dung đánh giá và thêm vào cuối trang
    var reviewElement = document.createElement('p');
    reviewElement.textContent = 'Người dùng ẩn danh: ' + reviewContent;
    document.body.appendChild(reviewElement);

    // Cuộn xuống cuối trang
    window.scrollTo(0, document.body.scrollHeight);
  }
  function showModal(itemName, itemPrice) {
    // Hiển thị modal và nền mờ
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';

    // Đặt tiêu đề của modal là tên món và giá
    document.getElementById('modalTitle').innerHTML = itemName + ' - Giá: ' + itemPrice + ' VNĐ';
  }

  function closeModal() {
    // Đóng modal và ẩn nền mờ
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
  }

  function buyItem() {
    // Lấy số lượng từ input
    var quantity = document.getElementById('quantity').value;

    // Thực hiện các bước mua hàng (ở đây tạm thời là console.log)
    console.log('Mua thành công ' + quantity + ' sản phẩm');

    // Hiển thị thông báo mua thành công và lời cảm ơn
    alert('Mua thành công ' + quantity + ' sản phẩm.\nChúc bạn ngon miệng!');
    
    // Đóng modal sau khi mua hàng
    closeModal();
  }

  function changePage(pageNumber) {
    // Đặt logic xử lý khi chuyển trang ở đây
    alert('Đang chuyển đến trang ' + pageNumber);
  }

  var menuItems = [
    "Bánh Mì",
    "Bún Cá Cay",
    "Bánh Bao",
    // Thêm các mục thực đơn khác
  ];

  // Lắng nghe sự kiện khi người dùng nhập vào thanh tìm kiếm
  document.getElementById('searchInput').addEventListener('input', function() {
    searchMenuItems(this.value.toLowerCase());
  });

  // Hàm tìm kiếm và hiển thị mục thực đơn tương ứng
  function searchMenuItems(keyword) {
    var menuContainer = document.querySelector('.menu-items');
    menuContainer.innerHTML = ''; // Xóa nội dung hiện tại

    // Lọc và hiển thị các mục thực đơn phù hợp
    var filteredItems = menuItems.filter(function(item) {
      return item.toLowerCase().includes(keyword);
    });

    if (filteredItems.length === 0) {
      menuContainer.innerHTML = '<p>Không tìm thấy món ăn nào.</p>';
      return;
    }

    filteredItems.forEach(function(item) {
      var menuItem = document.createElement('div');
      menuItem.textContent = item;
      // Thêm các thông tin khác cho mục thực đơn nếu cần
      menuContainer.appendChild(menuItem);
    });
  }

  function toggleForm(formId) {
    // Ẩn tất cả các form
    document.querySelectorAll('form').forEach(form => form.style.display = 'none');

    // Hiển thị form được chọn
    document.getElementById(formId).style.display = 'flex';

    // Ẩn nút đăng nhập và đăng ký, hiển thị thông tin người dùng
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('user-info').style.display = 'flex';
  }

  function login() {
    var usernameInput = document.getElementById('username').value;
    if (usernameInput.trim() !== '') {
        // Ẩn form đăng nhập
        document.getElementById('login-form').style.display = 'none';
        
        // Hiển thị thông tin người dùng và nút đăng xuất
        var userInfoDiv = document.getElementById('user-info');
        userInfoDiv.style.display = 'block';
        document.getElementById('logged-username').innerText = usernameInput;

        var logoutButton = document.querySelector('.logout-button');
        logoutButton.style.display = 'block';
        
        // Thay đổi nội dung nút đăng nhập thành tên người dùng
        var loginButton = document.querySelector('#login-form button');
        loginButton.innerHTML = usernameInput + ' <span class="logout-button">(Đăng xuất)</span>';
        loginButton.onclick = logout; // Gắn sự kiện click cho nút đăng xuất
    }
}

function logout() {
  // Hiển thị form đăng nhập và ẩn thông tin người dùng
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('user-info').style.display = 'none';

  // Ẩn nút đăng xuất
  document.querySelector('.logout-button').style.display = 'none';

  // Thay đổi nội dung nút đăng nhập về trạng thái ban đầu
  var loginButton = document.querySelector('#login-form button');
  loginButton.innerHTML = 'Đăng nhập';
  loginButton.onclick = login; // Gắn sự kiện click cho nút đăng nhập
}

  function register() {
    // Xử lý đăng ký, gửi dữ liệu đến server nếu cần
    console.log('Đăng ký');
  }

  function forgotPassword() {
    // Xử lý quên mật khẩu, gửi dữ liệu đến server nếu cần
    console.log('Quên mật khẩu');
  }
  function logout() {
    // Xử lý đăng xuất
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('user-info').style.display = 'none';
  }
  function scrollToReviews() {
    const reviewsSection = document.querySelector('.danh-gia');
    reviewsSection.scrollIntoView({ behavior: 'smooth' });

    // Focus vào ô textarea
    const reviewTextarea = document.getElementById('review-textarea');
    reviewTextarea.focus();
}


document.querySelectorAll('nav ul li').forEach(function(menuItem) {
  menuItem.addEventListener('click', function() {
      // Loại bỏ lớp selected-menu từ tất cả các menu
      document.querySelectorAll('nav ul li').forEach(function(menu) {
          menu.classList.remove('selected-menu');
      });

      // Thêm lớp selected-menu cho menu được chọn
      menuItem.classList.add('selected-menu');

      // Hiển thị hoặc ẩn nội dung menu Nhân Viên
      if (menuItem.id === 'employee') {
          document.querySelector('.menu-container').style.display = 'none';
          document.querySelector('.employee-menu-content').style.display = 'block';

          // Chuyển xuống cuối trang
          window.scrollTo(0, document.body.scrollHeight);
      } else {
          document.querySelector('.menu-container').style.display = 'block';
          document.querySelector('.employee-menu-content').style.display = 'none';
      }

      // Thêm các chức năng xử lý tương ứng ở đây nếu cần
  });
});

// Xử lý khi chọn menu
document.querySelectorAll('nav ul li').forEach(function(menuItem) {
  menuItem.addEventListener('click', function() {
      // Loại bỏ lớp selected-menu từ tất cả các menu
      document.querySelectorAll('nav ul li').forEach(function(menu) {
          menu.classList.remove('selected-menu');
      });

      // Thêm lớp selected-menu cho menu được chọn
      menuItem.classList.add('selected-menu');

      // Hiển thị hoặc ẩn nội dung menu Nhân Viên
      if (menuItem.id === 'employee') {
          document.querySelector('.menu-container').style.display = 'none';
          document.querySelector('.employee-menu-content').style.display = 'block';
          // Chuyển xuống cuối trang
          window.scrollTo(0, document.body.scrollHeight);
      } else {
          document.querySelector('.menu-container').style.display = 'block';
          document.querySelector('.employee-menu-content').style.display = 'none';
      }

      // Cập nhật danh sách nhân viên khi chuyển menu
      updateEmployeeList();
  });
});

function toggleTable(tableNumber) {
  var table = document.getElementById('table' + tableNumber);
  table.classList.toggle('booked');
  table.classList.toggle('available');
}

function scrollToSchedule() {
  // Sử dụng JavaScript để cuộn màn hình đến bảng có ID là "schedule-table"
  var scheduleTable = document.getElementById('employees-table');
  scheduleTable.scrollIntoView({ behavior: 'smooth' });
}
function scrollToMenu() {
  var scheduleTable = document.getElementById('menu');
  scheduleTable.scrollIntoView({ behavior: 'smooth' });
}
