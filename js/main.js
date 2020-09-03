// Au clic supprimer le hidden du front et le mettre sur le back

let imgFront = [
    'img/css.png', 
    'img/github.png',
    'img/html5.png',
    'img/javascript.png',
    'img/json.png',
    'img/microsoft.png',
    'img/css.png', 
    'img/github.png',
    'img/html5.png',
    'img/javascript.png',
    'img/json.png',
    'img/microsoft.png',
];

let back = document.getElementsByClassName("back");

// si back est afficher, au clic, afficher front
// function game() {
    // boucle
    // for(let card of back){
    //     card.addEventListener('click', function(){
    //         // boucle des images front + random + retirer du tableau si affichée
    //         this.src="img/card.png";
    //         // console.log(img);
    //     });
    //     console.log(card);
    // }

    let choices = [];
    let pair = [];

    for(let i=0; i<back.length; i++) {
        back[i].addEventListener('click', function() {
            let imgRandom = imgFront[i];
            this.src = imgRandom;
            choices.push(this);
            console.log(choices);

            // si deux éléments se trouvent dans le tableau 
            if (choices.length == 2) {  // modulo ???

                // alors on compare les éléments
                // s'ils sont identiques
                if (choices[0].src === choices[1].src) {
                    console.log("BG");
                    pair.push(this);
                    console.log(pair);
                    choices.pop(this);
                    choices.pop(this); 

                    // si toutes les cartes sont retournée (2ème array = 6) alors fin de partie
                    if (pair.length === 6) {
                        alert("Well done !");
                    }
                }
                // s'ils sont différents
                else {
                    console.log("nul");
                    choices[0].src = "img/card.png";
                    choices[1].src = "img/card.png";
                    choices.pop(this);
                    choices.pop(this);              
                }
            }
        })
    }
// }