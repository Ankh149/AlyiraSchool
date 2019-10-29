function compterLettre(chaine,lettre) {
    if (chaine.indexOf(lettre)== -1)
    return 0
    let compteur = 0

    for (let i = 0; i < chaine.length; i++) {
        if(chaine[i]==lettre) 
        compteur += 1
        
    }

    chaine.substring(debut,fin)

}

console.log(compterLettre("cornichon" , "i"))
console.logt(compterLettre("cornichon" , "k"))
console.log(compterLettre("cornichon" , "c"))

