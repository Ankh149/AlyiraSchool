class Noeud {
    constructor(valeur) {
      this.valeur = valeur
      this.gauche = undefined
      this.droit = undefined}
ajouter(valeur) {

  if ( valeur < this.valeur)
    if (this.gauche==undefined)
    this.gauche = new Noeud(valeur)
    else 
  this.gauche}
}
