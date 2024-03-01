//3. FOR MOBILE ONLY : SLIDERMENU SHOW HIDE WITH NAV BUTTON 
let barBtn = document.querySelector("nav .ri-menu-3-line")
let leftbar = document.querySelector(".leftbar")
let clickTime = 0
barBtn.addEventListener("click",function(){
  if(clickTime == 0){
    leftbar.style.right = "0";
    barBtn.classList.replace("ri-menu-3-line", "ri-close-line");
    clickTime = 1;
    }else{
    leftbar.style.right = "-100%";
    barBtn.classList.replace("ri-close-line" , "ri-menu-3-line");
    clickTime = 0;
    }
  });


//4. SLIDERMENU FUNCTIONAL CODE
let portfolioBtn = document.getElementById("port")
let projectBtn = document.getElementById("proj")
let lessonBtn = document.getElementById("less")

let portfolioScreen = document.querySelector(".portfolio")
let projectScreen = document.querySelector(".project")
let lessonScreen = document.querySelector(".lesson")

 portfolioBtn.addEventListener("click",function(){
  leftbar.style.right = "-100%";
  barBtn.classList.replace("ri-close-line" , "ri-menu-3-line");
  portfolioScreen.style.display = "block"
  projectScreen.style.display = "none"
  lessonScreen.style.display = "none"
 })

 projectBtn.addEventListener("click",function(){
  leftbar.style.right = "-100%";
  barBtn.classList.replace("ri-close-line" , "ri-menu-3-line");
  portfolioScreen.style.display = "none"
  projectScreen.style.display = "block"
  lessonScreen.style.display = "none"
 })

 lessonBtn.addEventListener("click",function(){
  leftbar.style.right = "-100%";
  barBtn.classList.replace("ri-close-line" , "ri-menu-3-line");
  portfolioScreen.style.display = "none"
  projectScreen.style.display = "none"
  lessonScreen.style.display = "block"
 })

//SLIDERMENU RIGHTBAR MSG TO ADMIN FUNCTION
let msgAdmin = document.querySelector("#msgToAdminBtn")
let msgPage = document.querySelector(".messagePage")
let right = document.querySelector(".rightbar")
 
msgAdmin.addEventListener("click",function(){ 
   let msgName = document.querySelector(".messagePage #name")
   let msgPhone = document.querySelector(".messagePage #email")
   let msgSubject = document.querySelector(".messagePage #sub")
   let msgTextArea = document.querySelector(".messagePage #msg")
 
  msgName.value = ""
  msgPhone.value = ""
  msgSubject.value = ""
  msgTextArea.value = ""
  right.style.right = "0"
  leftbar.style.right = "-100%";
  barBtn.classList.replace("ri-close-line" , "ri-menu-3-line");
  document.querySelector(".ri-arrow-left-line").style.display = "block"
  loginPage.style.display = "none"
  msgPage.style.display = "block"
  msgPage.style.display = "flex"
  msgPage.style.flexDirection = "column"
})
document.querySelector(".ri-arrow-left-line").addEventListener("click",function(){
    right.style.right = "-100%"
    msgPage.style.display = "flex"
    msgPage.style.flexDirection = "column"
})

//Get data from user of Message Page 
 let MSGBTN = document.querySelector(".messagePage #msgBtn") 
 MSGBTN.addEventListener("click",function(){
  
   let msgName = document.querySelector(".messagePage #name").value
   let msgPhone = document.querySelector(".messagePage #email").value
   let msgSubject = document.querySelector(".messagePage #sub").value
   let msgTextArea = document.querySelector(".messagePage #msg").value
  
   if( msgName.length == 0 || msgPhone.length == 0 || msgSubject.length == 0 || msgTextArea.length == 0){
    swal("ERROR", "Please fill Every Details", "error");
   }else{
    right.style.right = "-100%"
    Email.send({
    SecureToken : "925d1fee-c803-4d93-a09c-c79ad4da638f",
    To : 'mukhtar.alam458546@gmail.com',
    From : "mukhtar.alam458546@gmail.com",
    Subject : msgSubject,
    Body : "Name : " + msgName
          + "<br> Email : " + msgPhone
          + "<br> Message : " + msgTextArea,
}).then(
  message => swal("Created Account Successfully", "Your data sent to Mr. Mukhtar Alam", "success")
      )
    }
 })


//SLIDERMENU RIGHTBAR LOGIN FUNCTIONING
let loginPage = document.querySelector(".loginPage")

setTimeout( function loginFn(){ 
  document.querySelector("nav .ri-menu-3-line").style.display = "none"
  right.style.right = "0"
  right.style.width = "100%"
  document.querySelector(".ri-arrow-left-line").style.display = "none"
  loginPage.style.display = "block"
  loginPage.style.display = "flex"
  loginPage.style.flexDirection = "column"
},500)

//Get data from user Login Page
let LOGINBTN = document.querySelector("#loginBtn")
 LOGINBTN.addEventListener("click",function(){
  
   let msgName = document.querySelector(".loginPage #name").value
   let msgPhone = document.querySelector(".loginPage #phone").value

   if( msgName.length == 0){
    swal("ERROR", "Please fill Every Details", "error");
   }else{
    document.querySelector("nav .ri-menu-3-line").style.display = "block"
    right.style.right = "-100%"
    document.querySelector("#username").innerHTML = `<i class="ri-account-circle-line"></i>` + msgName;
    Email.send({
    SecureToken : "925d1fee-c803-4d93-a09c-c79ad4da638f",
    To : 'mukhtar.alam458546@gmail.com',
    From : "mukhtar.alam458546@gmail.com",
    Subject : "Login Info/BBS.COM V2",
    Body : "Name : " + msgName
          + "<br> Phone : " + msgPhone,
}).then(
  message => swal("Login Successfully", "Your data sent to Mr. Mukhtar Alam", "success")
      )
    }
 })
 
//When Tap Logout button
let logoutBtn = document.querySelector("#logoutBtn")
 logoutBtn.addEventListener("click",function(){
    document.querySelector("#username").innerHTML = `<i class="ri-account-circle-line"></i>` + "Username";
    leftbar.style.right = "-100%";
    barBtn.classList.replace("ri-close-line" , "ri-menu-3-line");
 
  //Call setTimeout Function 
  let msgName = document.querySelector(".loginPage #name")
  let msgPhone = document.querySelector(".loginPage #phone")
  
   msgName.value = ""
   msgPhone.value = ""
  document.querySelector("nav .ri-menu-3-line").style.display = "none"
  right.style.right = "0"
  right.style.width = "100%"
  document.querySelector(".ri-arrow-left-line").style.display = "none"
  loginPage.style.display = "block"
  loginPage.style.display = "flex"
  loginPage.style.flexDirection = "column"
 })




//CODE OF SEARCH PROJECT 
document.getElementById('srcPro').addEventListener('keyup', function() {
  const filter = this.value.toUpperCase();
  const names = document.querySelector(".project ul").getElementsByTagName('li');
  
  for (let i = 0; i < names.length; i++) {
    const name = names[i].textContent.toUpperCase();
    if (name.indexOf(filter) > -1) {
      names[i].style.display = '';
    } else {
      names[i].style.display = 'none';
    }
  }
});

//CODE OF SEARCH LESSON 
document.getElementById('srcLess').addEventListener('keyup', function() {
  const filter = this.value.toUpperCase();
  const names = document.querySelector(".lesson ul").getElementsByTagName('li');
  
  for (let i = 0; i < names.length; i++) {
    const name = names[i].textContent.toUpperCase();
    if (name.indexOf(filter) > -1) {
      names[i].style.display = '';
    } else {
      names[i].style.display = 'none';
    }
  }
});
