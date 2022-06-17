// Mail
// 1) Creara un array con lista email
// 2) Fare prompt per interagire con l'utente
// 3) Controllare se l'email inserita nel prompt è presente nel array
//          Se si stampare "Email presente" altrimenti se non è presense "Email non presente" altrimenti "Errore! Email non valida"


const emailList = ['mela@frutta.com', 'pera@frutta.com', 'pesca@frutta.com', 'banana@frutta.com', 'fragola@frutta.com'];
const emailUtente = prompt('Inserisci la tua email');
console.log(emailList);

for (let index = 0; index < emailList.length; index++) {

    if (emailList[index] === emailUtente) {
        console.log(index);
        console.log(emailList[index]);
        console.log('Email presente');
    } else if (emailList[index] !== emailUtente) {
        console.log(index);
        console.log(emailList[index]);
        console.log('Email non presente');
    }

}