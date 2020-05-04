

function register() {
    var x = document.getElementById("login-form");
    var y = document.getElementById("register-form");
    var h1 = document.getElementById("h4-1");
    var h2 = document.getElementById("h4-2");
    var content = document.getElementById("main");

    h2.style.backgroundColor = "rgb(253, 253, 253)";
    h1.style.backgroundColor = "rgb(182, 182, 182)";
    x.style.left = "-420px";
    y.style.left = "0";
    content.style.height = "480px";
    
}

function login() {
    var x = document.getElementById("login-form");
    var y = document.getElementById("register-form");
    var h1 = document.getElementById("h4-1");
    var h2 = document.getElementById("h4-2");
    var content = document.getElementById("main");
    h2.style.backgroundColor = "rgb(182, 182, 182)";
    h1.style.backgroundColor = "rgb(253, 253, 253)";
    x.style.left = "0";
    y.style.left = "420px";
    content.style.height = "360px";
}