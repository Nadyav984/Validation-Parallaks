function validate(e){
    e.preventDefault();
    let userName = document.getElementById("username").value;
    console.log(userName);
    let password = document.getElementById("password").value;
    let userAge = document.getElementById("age").value;
    let userEmail = document.getElementById("email").value;
    let data = document.getElementById("date").value;
    if(checkUser(userName)&&
    checkPassword(password)&&
    checkAge(userAge)&&
    checkEmail(userEmail)&&
    checkDate(data)){
      alert(true);
    }else{
     return false
    }
}

window.onload = function() {
  document.getElementById("registrationform").addEventListener("submit", validate);
  document.getElementById("username").oninput = (e) => {
    console.log(e);
    document.getElementById('username1').textContent = document.getElementById("username").value
  }
}

function checkUser(userName='') {
  var re = /^user_(\w+)/g;
  console.log(!!userName.match(re));
    if (userName==="") {
      document.getElementById("username").style.border = "1px solid red";
      alert("You should enter a valid username starts with user_");
        return false;
    } else if(userName.match(re)){
      document.getElementById("username").style.border = "1px solid black";
       return true;
    } else {
        document.getElementById("username").style.border = "1px solid red";
      alert("You entered INVALID USER NAME: "+userName+". Enter a valid username without SPACES starts with user_ + your username ");
        return false;
    }
}

function checkPassword(){
  checkUserEntering=document.getElementById("password").value;
  if (checkUserEntering==="") {
    document.getElementById("password").style.border = "1px solid red";
    alert("Pleas, enter your password");
      return false; 
  }
}
function checkAge(){
  checkAgeEntering=document.getElementById("age").value;
  if (userAge.length === 0) {
		alert("You must enter a age.");
		return;
    } else if (~checkAgeEntering.indexOf(" ")) {
      document.getElementById("age").style.border = "3px solid red";
         alert("You entered NOTHING");
      return false;
      } else if(parseInt(checkAgeEntering) >= 0) {
        document.getElementById("age").style.border = "3px solid black";
		return false;
    }
    else {
        return true;
    } 
  }
  
function checkPassword(){
  checkUserEntering=document.getElementById("password").value;
  if (checkUserEntering==="") {
    document.getElementById("password").style.border = "1px solid red";
    alert("Pleas, enter your password");
      return false;
    }else{
      return true;
    }
}

function checkEmail(){
  checkEmail=document.getElementById("email").value;
    if(checkEmailEntering===""){
      document.getElementById("password").style.border = "1px solid red";
      alert("Enter your email");
      return false;
    }else{
      return true;
    }
}

function checkDate() {
  checkDateEntering=document.getElementById("date").value;
  submitOK = "true";
     
    currentDate = new Date();
  dd = currentDate.getDate();
  mm = currentDate.getMonth()+1; 
  yyyy = currentDate.getFullYear();

  if(dd<10){
      dd='0'+dd;
  } 
  if(mm<10){
      mm='0'+mm;
  } 
  currentDate= dd+'/'+mm+'/'+yyyy;

  if (checkDateEntering==="") {
    document.getElementById("date").style.border = "1px solid red";
      alert("You entered NOTHING in Date placeholder. Enter a valid current date in format dd/mm/yyyy !");
        return false;
  }
  else if(checkDateEntering===currentDate) {
    document.getElementById("date").style.border = "1px solid #00ff00";
    return false;
  } else {
    document.getElementById("date").style.border = "1px solid red";
      alert("You entered INVALID CURRENT DATE: "+checkDateEntering+". Enter a valid current date in format dd/mm/yyyy without spaces!");
        return false;
  }
}


/*--------------------------------------------------------------------------------------------------------*/
