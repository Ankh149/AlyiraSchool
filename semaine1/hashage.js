const crypto = require("./node_modules/crypto")

function hachage(chaine) {
    condensat=0
    for (let i = 0; i< chaine.lenght; i++) {
        console.log(chaine.charCodeAt(i))
        condensat = (condensat + chaine.charCodeAt(i) * 100**(i+1)%2**16);
    }
    return condensat.toString(16)
}

function sha256(chaine){
    return crypto.createHash("sha256",'hex').update(chaine).digest("hex")
}

function doubleHachage(entree){

}