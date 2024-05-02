let inputName = document.getElementById("name");
let nameError = document.getElementById("nameError");
// let resultName = document.getElementById("resultName");
let idCardName = document.querySelector(".idCardName");

let inputRoll = document.getElementById("roll");
let rollError = document.getElementById("rollError");
// let resultRoll = document.getElementById("resultRoll");
let idCardRoll = document.querySelector(".idCardRoll");

let inputClass = document.getElementById("class");
let classError = document.getElementById("classError");
// let resultClass = document.getElementById("resultClass");
let idCardId = document.querySelector(".idCardId");

let inputMobileNo = document.getElementById("mobileNo");
let mobileNoError = document.getElementById("mobileNoError");
// let resultMobileNo = document.getElementById("resultMobileNo");
let idCardMobile = document.querySelector(".idCardMobile");
let mobileNoRegex = /^(?:\+88|01)?\d{11}\r?$/;

let inputEmail = document.getElementById("email");
let emailError = document.getElementById("emailError");
let resultEmail = document.getElementById("resultEmail");
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let submitButton = document.getElementById("submit");
let resetButton = document.getElementById("reset");

let inputError = document.getElementsByClassName("error");
// let inputBox = document.getElementsByClassName("inputBox");

let result = document.getElementsByClassName("result");
// let resultWrapper = document.getElementsByClassName("resultWrapper")
let idCardWrapper = document.querySelector("#idCardWrapper");

submitButton.addEventListener("click", function(){
  if(inputName.value == ""){
    nameError.innerHTML = "Please enter your name.";
    inputName.style.borderColor = "red";
  }else if(inputName.value - 20){
    nameError.innerHTML = "Please enter valid name.";
    inputName.style.borderColor = "red";
  }else if(inputRoll.value == ""){
    rollError.innerHTML = "Please enter your roll.";
    inputRoll.style.borderColor = "red";
  }else if(isNaN(inputRoll.value)){
    rollError.innerHTML = "Please use number not text.";
    inputRoll.style.borderColor = "red";
  }else if(inputClass.value == ""){
    classError.innerHTML = "Please enter your class name.";
    inputClass.style.borderColor = "red";
  }else if(inputMobileNo.value == ""){
    mobileNoError.innerHTML = "Please enter your mobile number.";
    inputMobileNo.style.borderColor = "red";
  }else if(!inputMobileNo.value.match(mobileNoRegex)){
    mobileNoError.innerHTML = "Mobile number is not valid";
    inputMobileNo.style.borderColor = "red"
  }else if(inputEmail.value == ""){
    emailError.innerHTML = "Please enter your email.";
    inputEmail.style.borderColor = "red";
  }else if(!inputEmail.value.match(emailRegex)){
    emailError.innerHTML = "Please enter valid email.";
    inputEmail.style.bordercoler = "red";
  }else{
    idCardName.innerText = `Name: ${inputName.value}`;
    idCardRoll.innerText = `Roll: ${inputRoll.value}`;
    idCardId.innerText = `Student ID: ${inputClass.value}`;
    idCardMobile.innerText = `Mobile no: ${inputMobileNo.value}`;
    // resultEmail.innerText = `Email: ${inputEmail.value}`;
    // resultWrapper[0].style.display = "block";
    idCardWrapper.style.display = "block"
    console.log();
  }
});
resetButton.addEventListener("click", function(){
  // location.reload()
  inputName.value = "";
  inputRoll.value = "";
  inputClass.value = "";
  inputMobileNo.value = "";
  inputEmail.value = "";
  nameError.innerHTML = "";
  rollError.innerHTML = "";
  classError.innerHTML = "";
  mobileNoError.innerHTML = "";
  emailError.innerHTML = "";
})