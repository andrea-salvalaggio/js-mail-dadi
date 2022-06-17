
// 1) Creara un array con lista email
// 2) Fare prompt per interagire con l'utente
// 3) Controllare se l'email inserita nel prompt è presente nel array
//          Se si stampare "Email presente" altrimenti se non è presense "Email non presente"

// Esercizio 1 - Mail

const emailList = ['mela@frutta.com', 'pera@frutta.com', 'pesca@frutta.com', 'banana@frutta.com', 'fragola@frutta.com'];
const UserEmail = prompt('Inserisci la tua email');
let validEmail = false;

for (let index = 0; index < emailList.length; index++) {

    if (emailList[index] === UserEmail) {
        validEmail = true;
    }

}

if (validEmail === true) {
    console.log('Email presente');
} else {
    console.log('Email non presente');
}

console.log(validEmail);
console.log(emailList);
