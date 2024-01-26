function checkPassword()
{
    let password=document.getElementById("password").value; 
    let confirmpassword=document.getElementById("confirm_password").value;
    let message=document.getElementById("message");
    if(password.length!=0)
    {
        if(password==confirmpassword)
        {
            message.textContent="Password matched";
            message.style.backgroundColor="#3ae374";
           
        }
        else
        {
            message.textContent="Password not matched"; 
            message.style.backgroundColor="#ff4d4d";
        }
    }

}

