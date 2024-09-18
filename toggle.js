const bar = document.getElementById("bar");
const menu = document.getElementById("menu");

if(bar){
    bar.addEventListener("click",() => {
        menu.classList.toggle("active");
    });
}





















            function sendEmail(){
                Email.send({
                Host : "smtp.gmail.com",
                Username : "suryaganawa392@gmail.com",
                Password : "57575758",
                To : 'inderganawa@gmail.com',
                From :document.getElementById("email").value,
                Subject : "New Contact Form Equiry",
                Body : "Name:" + document.getElementById("name").value
                + "<br> Email:" + document.getElementById("email").value
                + "<br> Message:" + document.getElementById("message").value    
               }).then(
              message => alert("Message Sent to Succesfully")
    );

            }