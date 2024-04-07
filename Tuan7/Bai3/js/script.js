$(document).ready(function() {
    $("#errFullName, #errUserName, #errPassword, #errConfirmPassword, #errDate, #errPhoneNumber, #errAddress, #errEmail").css({"color": "red", "font-size": "14px"});

    function isValidFullName() {
        var fullname = /^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/;
        if ($("#ipFullName").val() === "") {
            $("#errFullName").text("Không được để trống!");
            return false;
        } else if (!fullname.test($("#ipFullName").val())) {
            $("#errFullName").text("Họ và tên không hợp lệ!");
            return false;
        } else {
            $("#errFullName").text("");
            return true;
        }
    }

    function isValidUserName() {
        var username = /^[a-zA-Z0-9_]+$/;
        if ($("#ipUserName").val() === "") {
            $("#errUserName").text("Không được để trống!");
            return false;
        } else if (!username.test($("#ipUserName").val())) {
            $("#errUserName").text("Tên đăng nhập không hợp lệ!");
            return false;
        } else {
            $("#errUserName").text("");
            return true;
        }
    }

    function isValidPassword() {
        var password = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.{8,})/;
        if ($("#ipPassword").val() === "") {
            $("#errPassword").text("Không được để trống!");
            return false;
        } else if (!password.test($("#ipPassword").val())) {
            $("#errPassword").text("Mật khẩu không hợp lệ!");
            return false;
        } else {
            $("#errPassword").text("");
            return true;
        }
    }

    function isValidConfirmPassword() {
        if ($("#ipConfirmPassword").val() === "") {
            $("#errConfirmPassword").text("Không được để trống!");
            return false;
        } else if ($("#ipConfirmPassword").val() !== $("#ipPassword").val()) {
            $("#errConfirmPassword").text("Mật khẩu xác nhận không khớp!");
            return false;
        } else {
            $("#errConfirmPassword").text("");
            return true;
        }
    }

    function isValidPhoneNumber() {
        var phonenumber = /^((09|03|07|08|05)+([0-9]{8}))/g;
        if ($("#ipPhoneNumber").val() === "") {
            $("#errPhoneNumber").text("Không được để trống!");
            return false;
        } else if (!phonenumber.test($("#ipPhoneNumber").val())) {
            $("#errPhoneNumber").text("Số điện thoại không hợp lệ!");
            return false;
        } else {
            $("#errPhoneNumber").text("");
            return true;
        }
    }

    $("#ipFullName").blur(isValidFullName);
    $("#ipUserName").blur(isValidUserName);
    $("#ipPassword").blur(isValidPassword);
    $("#ipConfirmPassword").blur(isValidConfirmPassword);
    $("#ipPhoneNumber").blur(isValidPhoneNumber);

    function isValidData() {
        if(!isValidFullName()) {
            $("#ipFullName").focus();
            return false;
        }
        else if(!isValidUserName()) {
            $("#ipUserNam").focus();
            return false;
        }
        else if(!isValidPassword()) {
            $("#ipPassword").focus();
            return false;
        }
        else if(!isValidConfirmPassword()) {
            $("#ipConfirmPassword").focus();
            return false;
        }
        else if(!isValidPhoneNumber()) {
            $("#ipPhoneNumber").focus();
            return false;
        }
        else {
            localStorage.setItem("fullname", $("#ipFullName").val());
        }

    }
    $("#btnSubmit").click(function(e) {
        var isValid = true;
        
        if (!isValidFullName()) {
            $("#ipFullName").focus(); 
            isValid = false;
            return false;
        } else if (!isValidUserName()) {
            $("#ipUserName").focus(); 
            isValid = false;
            return false;
        } else if (!isValidPassword()) {
            $("#ipPassword").focus(); 
            isValid = false; return false;
        } else if (!isValidConfirmPassword()) {
            $("#ipConfirmPassword").focus();
            isValid = false; return false;
        } else if (!isValidPhoneNumber()) {
            $("#ipPhoneNumber").focus(); 
            isValid = false; return false;
        } 

        if (!isValid) {
            e.preventDefault(); 
        } else {
            localStorage.setItem("fullname", $("#ipFullName").val());
            localStorage.setItem("username", $("#ipUserName").val());
            localStorage.setItem("password", $("#ipPassword").val());
            localStorage.setItem("phonenumber", $("#ipPhoneNumber").val());
            localStorage.setItem("email", $("#ipEmail").val());
            localStorage.setItem("date", $("#ipDate").val());
            localStorage.setItem("hobbies", $("#hobbies").val());
            localStorage.setItem("address", $("#ipAddress").val());

            window.location.href = "thongtin.html";
        }
    });
});
