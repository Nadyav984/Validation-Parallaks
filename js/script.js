function validate(e){
    e.preventDefault();
      let userName = document.getElementById("username").value;
      let password = document.getElementById("password").value;
    //console.log(password);
      let age = document.getElementById("age").value;
      let userEmail = document.getElementById("email").value;
      let data = document.getElementById("date").value;
        if(checkUser(userName)&&
           checkPassword(password)&&
           checkAge(age)&&
           checkEmail(email)&&
           checkDate(data)){
      alert(true);
    }else{
      return false
    }
}

window.onload = function() {
    document.getElementById("registrationform").addEventListener("submit", validate);
    document.getElementById("username").oninput = (e) => {
    document.getElementById('username1').textContent = document.getElementById("username").value
  }
}

function checkUser(userName='') {
    var re = /^user_(\w+)/g;
 // console.log(!!userName.match(re));
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

function checkPassword(password){
  var pass_regex=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
 //console.log(!!password.match(pass_regex));

  if (password==="") {
    document.getElementById("password").style.border = "1px solid red";
    alert("You should enter a valid password");
            return false;
  }else if (password.match(pass_regex)){
            return true;
  }else{
    document.getElementById("password").style.border = "1px solid red";
    alert("You entered INVALID PASSWORD: "+password+". Enter a valid password:for min 8 letter password, with at least a symbol, upper and lower case letters and a number ");
            return false;
}
}
function checkAge(age){
  var age_regex=/^[1-9]?[0-9]{1}$|^100$/;
//console.log("age");

  if (age.match(age_regex)) {
    document.getElementById("age").style.border = "1px solid black";
		     return false;
    } else  {
      document.getElementById("age").style.border = "1px solid red";
      alert("You should enter correct age");
         return true;
   }
  }
  

function checkEmail(email){
  var email_regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log("email");
    if(!!email.match(email_regex)){
      document.getElementById("email").style.border = "1px solid red";
      alert("Check your entered email");
      return false;
    }else{
      document.getElementById("email").style.border = "1px solid black";
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
