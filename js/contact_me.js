
    const http = new XMLHttpRequest();
    const url="www.toolsout.giriksoni.wmdd.ca/myportfolioContact";

    // get values from FORM
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();


$('#btn_contact').click((e)=>{

    e.preventDefault();

    console.log(name+""+email+" "+message);
})