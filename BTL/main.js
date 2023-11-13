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
    // Xử lý đăng nhập, gửi dữ liệu đến server nếu cần
    console.log('Đăng nhập');
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

function scrollToReviews() {
  const reviewsSection = document.querySelector('.employee-menu-content');
  reviewsSection.scrollIntoView({ behavior: 'smooth' });

  // Focus vào ô textarea
  const reviewTextarea = document.getElementById('review-textarea');
  reviewTextarea.focus();
}

function addEmployee() {
  // Xử lý khi bấm nút "Thêm Nhân Viên"
  console.log('Thêm Nhân Viên');
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
function addEmployee() {
  // Chức năng Thêm Nhân Viên
  const employee = {};
  employee.name = prompt('Nhập tên Nhân Viên:');
  employee.age = prompt('Nhập tuổi Nhân Viên:');
  employee.gender = prompt('Nhập giới tính Nhân Viên:');
  employee.workingHours = prompt('Nhập khung giờ làm việc của Nhân Viên:');

  if (employee.name && employee.age && employee.gender && employee.workingHours) {
      employees.push(employee);
      updateEmployeeList();
  }
}

function editEmployee() {
  // Chức năng Sửa Thông Tin Nhân Viên
  const selectedEmployeeIndex = prompt('Chọn Nhân Viên cần sửa:');
  if (selectedEmployeeIndex >= 0 && selectedEmployeeIndex < employees.length) {
      const editedEmployee = employees[selectedEmployeeIndex];
      editedEmployee.name = prompt('Nhập tên mới cho Nhân Viên:', editedEmployee.name);
      editedEmployee.age = prompt('Nhập tuổi mới cho Nhân Viên:', editedEmployee.age);
      editedEmployee.gender = prompt('Nhập giới tính mới cho Nhân Viên:', editedEmployee.gender);
      editedEmployee.workingHours = prompt('Nhập khung giờ làm việc mới cho Nhân Viên:', editedEmployee.workingHours);
      
      updateEmployeeList();
  }
}

function deleteEmployee() {
  // Chức năng Xóa Nhân Viên
  const selectedEmployeeIndex = prompt('Chọn Nhân Viên cần xóa:');
  if (selectedEmployeeIndex >= 0 && selectedEmployeeIndex < employees.length) {
      employees.splice(selectedEmployeeIndex, 1);
      updateEmployeeList();
  }
}

const employees = []; // Mảng lưu trữ thông tin nhân viên
function updateEmployeeList() {
  // Cập nhật danh sách nhân viên hiển thị
  const employeeList = document.getElementById('employee-list');
  employeeList.innerHTML = ''; // Xóa hết các mục hiện tại

  for (let i = 0; i < employees.length; i++) {
      const newEmployeeItem = document.createElement('li');
      newEmployeeItem.textContent = `Tên: ${employees[i].name}, Tuổi: ${employees[i].age}, Giới Tính: ${employees[i].gender}, Khung Giờ Làm Việc: ${employees[i].workingHours}`;
      newEmployeeItem.addEventListener('click', function() {
          displayEmployeeDetails(i);
      });
      employeeList.appendChild(newEmployeeItem);
  }
}

function displayEmployeeDetails(index) {
  // Hiển thị thông tin chi tiết của nhân viên được chọn
  const employeeDetails = document.getElementById('employee-details');
  employeeDetails.innerHTML = `Thông tin chi tiết của Nhân Viên:
                              <p>Tên: ${employees[index].name}</p>
                              <p>Tuổi: ${employees[index].age}</p>
                              <p>Giới Tính: ${employees[index].gender}</p>
                              <p>Khung Giờ Làm Việc: ${employees[index].workingHours}</p>`;
}

function clearEmployeeDetails() {
  // Xóa thông tin chi tiết của nhân viên khi không có nhân viên nào được chọn
  const employeeDetails = document.getElementById('employee-details');
  employeeDetails.innerHTML = '';
}


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
employees.push({ name: 'Nguyễn Văn A', age: 25, gender: 'Nam', workingHours: '8:00 - 17:00' });
employees.push({ name: 'Trần Thị B', age: 28, gender: 'Nữ', workingHours: '9:00 - 18:00' });
employees.push({ name: 'Lê Hoàng C', age: 30, gender: 'Nam', workingHours: '10:00 - 19:00' });
        
        // Cập nhật danh sách và hiển thị thông tin chi tiết cho nhân viên đầu tiên
updateEmployeeList();