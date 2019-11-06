function conversionHexToDeci(hex){
    resultat = 0;
    puissance = hex.length - 1 // la puissance maximale
    for(var caracter of hex){ // Parcours chaque caractere de la chaine hexadecimal 
        dec = parseInt(caracter,16) // conversion hex vers décimal
        //Calcul
        resultat = resultat + (dec * Math.pow(16,puissance))
        //Decrementer la puissance
        puissance-- // puissance = puisssance - 1
        
    }

    return resultat
}

var resultat = conversionHexToDeci("DA091")
console.log(resultat)
