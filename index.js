$(document).ready(function(){
    $("#signUpForm").validate({
        rules:{
            fname:{
                required: true,
                minlength: 4,
                maxlength:10
            },
            sname:{
                required:true,
                minlength:4

            },
            emailAddress:{
                required:true,
                email:true
            },
            number:{
                required:true,
                phonenu: true,
                matches: "[0-9]+",  // <-- no such method called "matches"!
                minlength:10,
                maxlength:10
            },
            password:{
                required:true,
                minlength:6
            }
            }

        
    });
});
