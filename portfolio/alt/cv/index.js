    function checkPswd() {
        var confirmPassword = "aiub";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="http://www.google.com";
        window.location="https://drive.google.com/file/d/1GOpkO13QkC-BT1iU5QalwhVlgYDnXjSU/view";
        }
        else{
            alert("Passwords do not match.");
        }
    }
