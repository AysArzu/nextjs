
const isEmailValid = (email)=> {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const isPasswordValid = (password)=> {
    let passwordRegex = /[^A-Za-z0-9]/;
    return passwordRegex.test(password);
}

//console.log(isPasswordValid("abcAB98"));//false baska birsey iceriyor mu?
//console.log(isEmailValid("abc@x.com"));//true

btnLogin.onclick = ()=>{

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    try{
        if(!isEmailValid(email)) throw new Error("Email adresi geçersiz.");
        if(isPasswordValid(password)) throw new Error("Password geçersiz.");
    }
    catch(err){
        alert(err.message);
    }
    
    
}