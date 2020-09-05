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
                    // et je vide le tableau
                    choices.pop(this);
                    choices.pop(this); 
                    score++;

                    // impossibilité au double-clic sur une même carte
                    // si la carte est côté front, ne pas pouvoir recliquer sur la carte

                    // si toutes les cartes sont retournée (2ème array = 6) alors fin de partie
                    if (pair.length === 6) {
                        alert("Well done ! End of game !");
                    }
                }
                // s'ils sont différents
                else {
                    console.log("Tnul");
                    // mise en place d'un timer pour avoir le temps de voir les 2 cartes retournées
                    setTimeout(function() {
                        choices[0].src = "img/card.png",
                        choices[1].src = "img/card.png";
                        // et je vide le tableau
                        choices.pop(this);
                        choices.pop(this);
                        score++; 
                    }, 500);          
                }

                // Affiche le nombre de coups sur une partie
                console.log(score);
                document.getElementById("score").innerHTML = "Score : " + score;
                
            }
        })      
    }
            // Difficuté avec un temps limité
            let timer = document.getElementById("timer");
            let sec = 5;
            
            var time = setInterval(function() {
                sec--;
                // console.log(sec);
                timer.innerText = sec; 
                // console.log(timer.innerText); 
                if (sec === 0) {
                    alert("Game over");
                    clearInterval(time);
                }    
            }, 1000);
           
    // recommencer une partie
