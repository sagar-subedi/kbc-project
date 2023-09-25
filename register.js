function handleRegister(){
    const passwordConfirmInput = document.getElementById('password-confirm');

    const email = getEmailElement().value;
    const password = getPasswordElement().value;
    const passwordConfirm = passwordConfirmInput.value;

    const users = getUsers();
    

    if(!checkEmail(email)){
        alert("Invalid Email.");
        return;
    }
    if(password !== passwordConfirm){
        alert("Passwords don't match.");
        return;
    }

    const userExists = users.some((user) => user.email === email);
    if(userExists){
        alert('The user already exists');
        return
    }

    
    //prepare new user as a json object
    const user = {
        email,
        password
    }


    //append the new user to the array
    users.push(user); //pushes the new user
    saveUsers(users); //saves the new users array to local storage

    alert('Registration Successful,  You can now sign in with your credentials');
    window.location.href = 'https://illustrious-cascaron-2979a1.netlify.app/register'; 


}