const crypto = require("crypto")

class ArbreDeMerkle {
    constructor(feuilles)
    {
        this.feuille = feuilles
        this.arbre=[[]]
    }