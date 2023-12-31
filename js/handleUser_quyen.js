let apiUsers = 'https://65180651582f58d62d355368.mockapi.io/MainStorage';
let apiMovies = 'https://65180651582f58d62d355368.mockapi.io/Movies';
let userList = []; // Khởi tạo một biến để lưu trữ dữ liệu từ API
let currentUserId;



//FUNCTION ASSIGN DATA TO USERLIST
// async function start() {
//   try {
//     userList = await getUserList(); // Gán dữ liệu từ API vào biến userLisT
//     console.log(userList)
//     return userList
//   } catch (error) {
//     alert('Server đang bị quá tải. Vui lòng thử lại sau');
//   }
// }



//FUNCTION FETCH USER LIST
async function getUserList() {
  try {
    const response = await fetch(apiUsers);
    const data = await response.json();
    return data; // Trả về dữ liệu từ API
  } catch (error) {
    throw error;
  }
}



// FUNCTION TO CHECK THE CURRENT USER
async function checkUser() {
  let userInfo = JSON.parse(localStorage.getItem('userInfo'));
  let email = userInfo[0][1];
  let password = userInfo[0][0];
  let data = await getUserList();
  let user = data.find(user => email == user.email && user.password === password)
  currentUserId = user.id;
  document.getElementById('avatar').setAttribute("src", user.avatar);
  document.getElementById('gender').innerHTML = user.gender;
  document.getElementById('birthday').innerHTML = user.dayOfBirth;
  document.getElementById('userAccount').innerHTML=user.userAccount;
  document.getElementById('account').innerHTML=user.userAccount;
  document.getElementById('phone_nb').innerHTML=user.phoneNumber;
  document.getElementById('email').innerHTML=user.email;
  document.getElementById('area').innerHTML=user.city;
  document.getElementById('password').innerHTML=user.password;
  var list = user.watchedHistory
  if (list.length == 0) {
    document.getElementById('content_view_history').innerHTML = 'Lịch sử trống'
  }
  else {
    list.forEach(function (element) {
    
    })
  }
}




//FUNCTION MANY
function changeMany() {
  var nAccName = document.getElementById('c_name').value;
  var nGender = document.getElementById('c_gender').value;
  var ndob = document.getElementById('c_birthday').value;

  if (nAccName === '') {
    alert('Vui lòng điền đầy đủ thông tin');
  }
  if (nGender === '' || nGender != 'Nam' || nGender != 'nam' || nGender != 'Nữ' || nGender != 'nữ') {
    nGender = "Chưa cập nhật";
  }if (ndob === '') {
    ndob = "Chưa cập nhật";
  }
  else{
    console.log('Fetching URL:', apiUsers + '/' + currentUserId);
    fetch(apiUsers + '/' + currentUserId, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userAccount: nAccName,
        gender: nGender,
        dayOfBirth: ndob  
      })
    }).then(res => res.json()
    ).then(user => {
      document.getElementById('userAccount').innerHTML = user.userAccount;
      document.getElementById('account').innerHTML = user.userAccount;
      document.getElementById('gender').innerHTML = user.gender;
      document.getElementById('birthday').innerHTML = user.dayOfBirth;
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Kết nối của bạn đang gặp vấn đề. Vui lòng thử lại.');
    });
  }

}



//FUNCTION CHANGE USERACCOUNT
function changeAccount() {
  var nAccName = document.getElementById('nAccName').value;
  if (nAccName === '') {
    alert('Vui lòng điền đầy đủ thông tin');
  }
  else{
    console.log('Fetching URL:', apiUsers + '/' + currentUserId);
    fetch(apiUsers + '/' + currentUserId, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userAccount: nAccName
      })
    }).then(res => res.json()
    ).then(user => {
      document.getElementById('userAccount').innerHTML = user.userAccount;
      document.getElementById('account').innerHTML = user.userAccount;
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Kết nối của bạn đang gặp vấn đề. Vui lòng thử lại.');
    });
  }

}




//FUNCTION CHANGE PHONENUMBER
function changeAccount() {
  var phone_nb = document.getElementById('nNumber').value;
  if (phone_nb === '') {
    alert('Vui lòng điền đầy đủ thông tin');
  }
  else{
    console.log('Fetching URL:', apiUsers + '/' + currentUserId);
    fetch(apiUsers + '/' + currentUserId, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber: phone_nb 
      })
    }).then(res => res.json()
    ).then(user => {
      document.getElementById('phone_nb').innerHTML=user.phoneNumber;
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Kết nối của bạn đang gặp vấn đề. Vui lòng thử lại.');
    });
  }

}

//FUNCTION CHANGE EMAIL
function changeEmail() {
  var nEmail = document.getElementById('nEmail').value;
  if (nEmail === '') { 
    alert('Vui lòng điền đầy đủ thông tin');
  }
  else{
    console.log('Fetching URL:', apiUsers + '/' + currentUserId);
    fetch(apiUsers + '/' + currentUserId, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: nEmail
      })
    }).then(res => res.json()
    ).then(user => {
      document.getElementById('email').innerHTML=user.email;
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Kết nối của bạn đang gặp vấn đề. Vui lòng thử lại.');
    });
  }

}



//FUNCTION CHANGE AREA
function changeArea() {
  var nArea = document.getElementById('nArea').value;
  if (nArea === '') {
    alert('Vui lòng điền đầy đủ thông tin');
  }
  else{
    console.log('Fetching URL:', apiUsers + '/' + currentUserId);
    fetch(apiUsers + '/' + currentUserId, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        city: nArea
      })
    }).then(res => res.json()
    ).then(user => {
      document.getElementById('area').innerHTML=user.city;
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Kết nối của bạn đang gặp vấn đề. Vui lòng thử lại.');
    });
  }

}



//FUNCTION CHANGE PASSWORD
function changePassword() {
  var nPassword = document.getElementById('nPassword').value;
  if (nPassword === '') {
    alert('Vui lòng điền đầy đủ thông tin');
  }
  else{
    console.log('Fetching URL:', apiUsers + '/' + currentUserId);
    fetch(apiUsers + '/' + currentUserId, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: nPassword
      })
    }).then(res => res.json()
    ).then(user => {
      document.getElementById('password').innerHTML=user.password;
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Kết nối của bạn đang gặp vấn đề. Vui lòng thử lại.');
    });
  }

}




//FUNCTION LOG OUT
function logOut() {
  window.localStorage.clear(); 
  window.close.localStorage.clear();
  myVariable = false;
  // Lưu giá trị cập nhật vào local storage
  localStorage.setItem('myVariable', myVariable);
}



// RUNNING FUNCTIONS
checkUser()
