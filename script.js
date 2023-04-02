function enviarMensagemWhatsApp() {
    var nome = document.getElementsByName("nome")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var numeroWhatsApp = document.getElementsByName("numero-whatsapp")[0].value;
    var mensagem = document.getElementsByName("mensagem")[0].value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Mensagem enviada com sucesso!");
        }
    };
    xhttp.open("POST", "https://api.twilio.com/2010-04-01/Accounts/SEU_ACCOUNT_SID/Messages.json", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.setRequestHeader("Authorization", "Basic " + btoa("SEU_ACCOUNT_SID:SEU_AUTH_TOKEN"));
    xhttp.send("From=whatsapp:+14155238886&Body=" + mensagem + "&To=whatsapp:" + numeroWhatsApp);
}
