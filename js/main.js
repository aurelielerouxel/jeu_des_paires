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
// let coups = document.getElementById("score");

    let choices = [];
    let pair = [];
    let drawCard = [];
    let score = 0;
    

// positionnement aléatoire des cartes du tableau
    for(let i=0; i<back.length; i++) {
        back[i].addEventListener('click', function() {
            let imgRandom = imgFront[Math.floor(Math.random() * [i])];
            this.src = imgRandom;
            choices.push(this);

            console.log(choices);
            

            // si deux éléments se trouvent dans le tableau 
            if (choices.length == 2) {  

                // alors on compare les éléments
                // s'ils sont identiques
                if (choices[0].src === choices[1].src) {
                    console.log("BG");
                    pair.push(this);
                    console.log(pair);
                    choices.pop(this);
                    choices.pop(this); 
                    score++;

                    // impossibilité au double-clic sur une même carte

                    // si toutes les cartes sont retournée (2ème array = 6) alors fin de partie
                    if (pair.length === 6) {
                        alert("Well done ! End of game !");
                    }
                }
                // s'ils sont différents
                else {
                    console.log("Tnul");
                    setTimeout(function() {
                        choices[0].src = "img/card.png",
                        choices[1].src = "img/card.png";
                        choices.pop(this);
                        choices.pop(this);
                        score++; 
                    }, 500);          
                }

                console.log(score);
                document.getElementById("score").innerHTML = "Score : " + score;
                
            }
        })
    }
    // recommencer une partie
