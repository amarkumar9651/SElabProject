function login_page_security() {
    location.href = "2.html";
}

function login_page_manager() {
    location.href = "2.html";
}

function redirect_page() {
    let user = document.getElementById("user_id");
    let password = document.getElementById("password");
    if(user.value==="manager" && password.value==="manager") {
        location.href = "3.html";
    }
    else if(user.value!=="" && password.value!=="") {
        location.href = "4.html";
    }
}

function routine() {
    location.href = "5.html";
}