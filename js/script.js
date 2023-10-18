// alert ("ciao");  TEST

// Data
const userKm = parseInt(prompt("Quanti KM vuoi percorrere?"));
console.log(userKm, typeof userKm);

const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge, typeof userAge);

let travelTicket = 0.21 * userKm;
console.log(travelTicket, typeof travelTicket);
travelTicket = travelTicket.toFixed(2);


// Program Logic
if (userAge < 18) {
    console.log("E' Minorenne ha diritto ad uno sconto del 20%");
} else if (userAge > 65) {
    console.log("Ha un eta' over 65 ha diritto ad uno sconto del 40%");
}

if (userAge < 18) {
    let minorDisc = travelTicket * 0.20;
    let minorTicket = travelTicket - minorDisc;
    console.log(minorTicket, typeof minorTicket);
} else if (userAge > 65) {
    let overDisc = travelTicket * 0.40;
    let overTicket = travelTicket - overDisc;
    console.log(overTicket, typeof overTicket);
}

// Output
