    function checkPswd() {
        var confirmPassword = "aiub";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="http://www.google.com";
        window.location="https://drive.google.com/drive/folders/1Yxe_vKGOhDpjS9jgIgKgIePCGlqTjECT?usp=share_link";
        }
        else{
            alert("Passwords do not match.");
        }
    }
