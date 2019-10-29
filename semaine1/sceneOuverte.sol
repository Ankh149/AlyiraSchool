pragma solidity ^0.5.11;

contract SceneOuverte {
    string[12] passagesArtistes; //0x8391B7384027a3Dc78913bE732c74CC0F47236C5
    uint creneauxLibres = 12;
    uint tour;

    function sInscrire(string memory nomDArtiste) public {
        if(creneauxLibres > 0)
        {
        passagesArtistes[12-creneauxLibres] = nomDArtiste;
        creneauxLibres -= 1;//creneauxLibres - 1
         }
    }

    function passagesArtistesSuivant () public {
    tour += 1;

    }
    function getTour() public view returns (uint) {
        return tour;
    }
    function artisteEnCour() public view returns (string memory) {
        return passagesArtistes[tour-1];
    }

}