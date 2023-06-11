function msg() {
    const name = document.getElementsByClassName("box");
    var c = 0;
    for (i = 0; i < name.length; i++)
        if (name[i].value == "") {
            c = -1;
        }
    if (c != -1) {
        alert(name[0].value + "'s account has been sucessfully created !!!");
    }
}




function forgopass() {
    var email = document.forgot_form.email.value;
    var otp_entered = parseInt(document.forgot_form.otp.value);
    function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }
    var emailErr = otpErr = true;


    if (email == "") {
        printError("emailErr", "Email is required");
    }
    else {

        var regex = /[A-z._]+@[A-z]+[.][A-z]{3}/;
        var regex_at = /@/;
        if (regex.test(email) == false) {
            if (regex_at.test(email) == false) {
                printError("emailErr", "Email Should contain @");
            }
        }

        else {
            printError("emailErr", "");
            emailErr = false;
        }
    }
    document.getElementById("email").readOnly = "true";

    alert("OTP has been seen to: " + usermail);

    var cont = document.getElementsByClassName("OTP");
    for (i = 0; i < cont.length; i++)
        cont[i].style.display = "block";

    document.getElementById("send").style.display = "none";


    txt = "0123456789"
    otp = "";

    for (i = 0; i < 6; i++)
        otp += txt[Math.floor(Math.random() * 10)];

    otpEmail(otp)

    if (emailErr || otpErr) {
        return false;
    }
    else {
        return true;
    }


};

function otpEmail(otp) {
    document.getElementById("otp").innerHTML = otp;
}









function contact_onvalidate() {
    var name = document.ContactForm.name.value;
    var email = document.ContactForm.emailid.value;
    var feedback = document.ContactForm.feedback.value;

    function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }

    var emailErr = nameErr = feedErr = true;

    if (name == "") {
        printError("nameErr", "Name is Required");
    }
    else {
        var regex = /[A-z]{5,} [A-z]{3,}/;
        var regex_space = / /;
        if (regex.test(name) === false) {
            if (regex_space.test(name) === false) {
                printError("nameErr", "Please enter your full name");
            }
        }
        else {
            printError("nameErr", "");
            nameErr = false;
        }

    }

    if (email == "") {
        printError("emailErr", "Email is required");
    }
    else {

        var regex = /[A-z._]+@[A-z]+[.][A-z]{3}/;
        var regex_at = /@/;
        if (regex.test(email) == false) {
            if (regex_at.test(email) == false) {
                printError("emailErr", "Email Should contain @")
            }
            printError("emailErr", "Please enter email in proper format");
        }

        else {
            printError("emailErr", "");
            emailErr = false;
        }
    }


    if (feedback == "") {
        printError("feedErr", "This field is required");
    }
    else {
        printError("feederr", "");
    }

    if (emailErr == true || nameErr == true || feedErr == true) {
        return false;
    }
    else {
        return true;
    }
};






function sign_validate() {

    var email = document.signForm.emails.value;
    var password = document.signForm.pass.value;

    function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }

    var emailErr = passErr = true;
    if (email == "") {
        printError("emailErr", "Email is required");
    }

    else {
        printError("emailErr", "");
        emailErr = false;
    }

    if (password == "") {
        printError("passErr", "Please enter your password");
    }
    else {
        printError("passErr", "");
        passErr = false;
    }

    if (emailErr || passErr) {
        return false;
    }


};


function reg() {
    var name = document.regForm.name.value;
    var email = document.regForm.email.value;
    var password = document.regForm.pass.value;
    var confirm_pass = document.regForm.cpass.value;

    function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }

    var nameErr = emailErr = passErr = cpassErr = true;

    if (name == "") {
        printError("nameErr", "Enter your name");
    }
    else {
        var regex = /[A-z]{2,} [A-z ]{3,}/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter name in proper format");
        }
        else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "Email is required");
    }
    else {
        var regex = /[A-z._]+@[A-z]+[.][A-z]{3}/;
        var regex_at = /@/;
        if (regex.test(email) === false) {
            if (regex_at.test(email) === false) {
                printError("emailErr", "Email should contain @");
            }
        }

        else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (password == "") {
        printError("passErr", "Please enter your password");
    }
    else {
        var regex = /[\w. \W\s]{8,16}/;
        var regex_cap = /[A-Z]/;
        var regex_small = /[a-z]/;
        var regex_no = /[0-9]/;
        var regex_sp = /[\W\s]/;
        var errors = "";
        var linebreak = "</br>";
        if (regex.test(password) === false) {
            if (password.length < 8) {
                errors += "Should be atleast 8 characters" + linebreak;
            }
            if (regex_cap.test(password) === false) {
                errors += "Should contain atleast One upper case character [A-Z]" + linebreak;
            }
            if (regex_small.test(password) === false) {
                errors += "Should contain atleast One lower case character [a-z]" + linebreak;
            }
            if (regex_no.test(password) === false) {
                errors += "Should contain atleast one digit [0-9]" + linebreak;
            }
            if (regex_sp.test(password) === false) {
                errors += "Should contain atleast one special character ['@','/',...]" + linebreak;
            }
            if (password.length > 16) {
                errors += "Should not exceed 16 characters" + linebreak;
            }

            printError("passErr", errors);
        }
        else {
            printError("passErr", "");
            passErr = false;
        }
    }


    if (confirm_pass != password) {
        printError("cpassErr", "Password Doesn't match");
    }
    else {
        printError("cpassErr", "");
        cpassErr = false;
    }

    if (emailErr || passErr) {
        return false;
    }

    if ((nameErr || emailErr || passErr || cpassErr) == true) {
        return false;
    }

    else {

        return alert("Your Form has been submitted! ThankYou");
    }
};



function table_book() {

    var name = document.book.name.value;
    var email = document.book.email.value;
    var phno = document.book.phno.value;

    function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }

    var nameErr = emailErr = phoneErr = true;

    if (name == "") {
        printError("nameErr", "Enter your name");
    }
    else {
        var regex = /[A-z]{2,}[A-z ]{3,}/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter name in proper format");
        }
        else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "Email is required");
    }
    else {
        var regex = /[A-z._]+@[A-z]+[.][A-z]{2,3}/;
        var regex_at = /@/;
        var regex_domain = /[.][A-z]{3}/;
        var emailerrors = "";
        var linebreak = "</br>";
        if (regex.test(email) === false) {
            if (regex_at.test(email) === false) {
                emailerrors = "Email Should contain @" + linebreak;
            }

            if (regex_domain.test(email) === false) {
                emailerrors += "Email should contain a proper domain [.com, .in, etc]"
            }

            printError("emailErr", emailerrors);

        }

        else {
            printError("emailErr", "");
            emailErr = false;
        }
    }



    if (phno == "") {
        printError("phoneErr", "Please enter your mobile number");
    }
    else {
        var regex = /[6789]\d{9}/;
        var regex_start = /[6789]/
        error = "";
        linebreak = "<br/>"
        if (regex.test(phno) === false) {
            if (phno.length < 10)
                error = "Number should have 10 digits. Exclude country code." + linebreak;
            if (regex_start.test(phno) === false)
                error += "Number should start with 6/7/8/9." + linebreak;

            printError("phoneErr", error);
        }
        else {
            phoneErr = false;
            printError("phoneErr", "");
        }
    }

    if (nameErr || phoneErr || emailErr) {
        return false;
    }
    else {
        if (confirm("Do you confirm the entered details?")) {
            alert("Your table has been booked! Further deatils will be shared on your email or phone number");
        }
    }

}

function newacc() {
    window.open("reg");
}


function admin() {
    window.open("admin/admin_db_select");
}
