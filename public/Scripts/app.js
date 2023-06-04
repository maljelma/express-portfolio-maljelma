/* public.script.app.css - Mohammad Aljelmawi 301-268-246 comp229 s23 04-jun-2023 */
// IIFE -- Immediatly invoced function express
(function()
{
    function Start()
    {
        console.log("App Started...");
    }
    window.addEventListener("load",Start);

})();

/* submit contact form */
function submit_main_form()
{
    let mainform =  document.forms["Main-Form"];
    /* process form varables and fields here */
    var firstname = mainform.firstname.value;
    var lastname = mainform.lastname.value;
    var phonenumber =  mainform.phonenumber.value;
    var emailaddress =  mainform.emailaddress.value;
    var message =  mainform.message.value;
    /* -- testing values without redirectiong */
    /* console.log("post received: %s %s %s %s %s", firstname, lastname, phonenumber, emailaddress, message); */
    
    /* go to home page */
    window.location.href = "/home";
}