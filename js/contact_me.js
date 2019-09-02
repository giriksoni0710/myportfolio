
const http = new XMLHttpRequest();
const url="localhost:3000/myportfolioContact";




$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            console.log(name);
            console.log(email);
            console.log(message);
           
            http.open('get',url);
            http.send(name);

            http.onreadystatechange=(e)=>{

                console.log(http.responseText);
            }
            
            // $.post("localhost:3000/myportfolioContact", {name: name, email: email, message: message}, 
            // (data, status)=>{

            //     console.log(data);
            //     console.log(status);

            // })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
