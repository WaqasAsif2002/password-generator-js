var length = 8

var character = "abcdefghijkl1234567890mnopqr!@#$%^&*()_+{`}|:?><~stuvwxyzABCDEFGHIJKLMNOPQR1234567890 STUVWXYZ"

function generate(){
     var passwordStore = ""
    for(i = 0; i<length;i++)
        {
           
            var rendom = Math.floor(Math.random()*character.length)
            passwordStore+= character[rendom]
            
        }
        return passwordStore;
        
}

function password()
{
    document.getElementById('setpass').value = '';
    var newpass = generate();
    document.getElementById('setpass').value = newpass;
}
