let passwordBox = document.querySelector(".password");
let button = document.querySelector(".button");

var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=/-" 
const length = 12;

function createPassword() {
    let password = "";
    let value
    while (password.length < length) {
        password += arr[Math.floor(Math.random() * arr.length)];
    }
    passwordBox.value = password;
    console.log(password)
}
button.addEventListener("click", createPassword);
document.querySelector(".copy").addEventListener("click",copyPassword);

function copyPassword(){
    document.querySelector(".copied").style.display="block";
    passwordBox.select();
    setTimeout(function(){
      document.querySelector(".copied").style.display="none";
    },1500) 
    document.execCommand("copy");
}

