function minage (block, cible) {
    none=0
    do {
        nonce = nonce+1
        chaineCandidate = chaine + nonce
        condensat = hachage(chaineCandidate)
    }
    return nonce
}
