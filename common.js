//checkEmail(email:string)-> checks email validation
//getemailElement() -> returns email element i.e with id = email
//getPasswordElement() -> returns password element i.e with id =  password 


function checkEmail(email){
    const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    // Test the email against the regular expression
    const  ret = regex.test(email);
    console.log(ret);
    return ret;
}

function getEmailElement(){
    const emailInput = document.getElementById('email');
    return emailInput;
}


function getPasswordElement(){
    const passwordInput = document.getElementById('password');
    return passwordInput;
}