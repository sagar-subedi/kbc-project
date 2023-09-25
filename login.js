function checkPass(users, email, password){
    const user = users.find((user)=>  user.email === email);
    if(user){
        const correctPass = user.password;
        if(password === correctPass){
            console.log("Correct Pass");
         return true;
        }
    }
    return false;
}


function handleLogin(){
    const email = getEmailElement().value;
    const password = getPasswordElement().value;
    const isEmailValid = checkEmail(email);
    const users = getUsers();
    const isPassValid = checkPass(users, email, password);

    if(isEmailValid && isPassValid){
        setCurrentUser({
            email,
            password
        });

        window.location.href = 'http://127.0.0.1:5500/index.html'; 
    }
    else{
       console.log("Incorrect Credentials");
       
    }
}
