const crypto = require('./node_modules/crypto');

function ripemd160(c){
    return crypto.createHash("ripemd160").update(c).digest()
}

function sha256(c){
    return crypto.createHash("sha256").update(c).digest()
}

function adresseBitcoin(clePublique) {
    //Calculer le hash SHA 256 puis RIPEMD160, on appelle ce resultat hash160
    let hash160 = ripemd160(sha256(clePublique))//
    console.log({hash160})
    //Ajouter l'identifiant (0x00) au début, et le contrôle à la fin(4 premiers octets du sha256 (sha256(0x00 + hash160)))
    let adresse = "00" + hash160 + sha256(sha256(Buffer.from("00"+hash160, "hex"))).substr(0,8)
    console.log({adresse})
    //0x00 + hash160 +clé
    //Convertir le nomùbre en base 58

    let adressebs58.encode = (Buffer.from(adresse))

    return 1+adresseb58
}

console.log(adresseBitcoin("82883"))
  