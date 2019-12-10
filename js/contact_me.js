

            // const http = new XMLHttpRequest();
          

$('#btn_contact').click(function(e){

        e.preventDefault();
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            
            let obj = {
                name: name,
                email: email,
                message: message
            };
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            
            if(name!="" && validateEmail(email) && message!=""){
            fetch('http://www.toolsout.giriksoni.wmdd.ca/myportfolioContact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        name: name,
                        email: email,
                        message: message
                    }
                })
            });

            alert(`Thankyou ${name}. Your message has been sent successfully.`);
            $("input#name").val('');
            $("input#email").val('');
            $("textarea#message").val('');


        }

        else{
            if(name==null){
                alert("Please fill in the name")    
            }
            else if(message==null){
                alert("Please send me a message so that I can know you better")
            }
            else{
            alert("Please fill in the required fields")
        }
        }
    })

    function validateEmail(inputtext) {

                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if( $("input#email").val().match(mailformat))
        {
        return true;
        }
        else
        {
        alert("You have entered an invalid email address!");
        $("input#email").focus();
        return false;
        }

    }