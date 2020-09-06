
const imgFront = [
    'img/css.png', 
    'img/microsoft.png',
    'img/html5.png',
    'img/github.png',
    'img/json.png',
    'img/microsoft.png',     
    'img/html5.png',
    'img/github.png',
    'img/javascript.png',
    'img/javascript.png',
    'img/json.png',
    'img/css.png', 
];

let back = document.getElementsByClassName("back");

let choices = [];
let pair = [];
let drawCard = [];
let score = 0;
let coups = 10;

// function jouer() { 
//     alert("Bonjour");
//     console.log(jouer);
//     console.log(alert);

    // function randomImg() {
    //     const imgFront = [
    //         'img/css.png', 
    //         'img/microsoft.png',
    //         'img/html5.png',
    //         'img/github.png',
    //         'img/json.png',
    //         'img/microsoft.png',     
    //         'img/html5.png',
    //         'img/github.png',
    //         'img/javascript.png',
    //         'img/javascript.png',
    //         'img/json.png',
    //         'img/css.png',        
    //     ];
    //     let imgRandom = Math.floor(Math.random() * Math.floor(imgFront.length));
    //     return imgFront[imgRandom];
    // }

    // positionnement aléatoire des cartes du tableau
    // for()
    for(let i=0; i<back.length; i++) {
        back[i].addEventListener('click', function(randomImg) {
            let imgRandom = imgFront[i];
            drawCard.push(imgRandom);
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
                    // et on vide le tableau
                    choices.pop(this);
                    choices.pop(this); 
                    // on incrémente et décrémente
                    score++;
                    coups--;

                    // impossibilité au double-clic sur une même carte
                    // (si la carte est côté front, ne pas pouvoir recliquer sur la carte)
                    if(choices != back) {
                        console.log("interdit de cliquer 2 fois sur la même carte");
                        
                    }

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
                        choices[0].src = "img/card.png";
                        choices[1].src = "img/card.png";
                        // et on vide le tableau
                        choices.pop(this);
                        choices.pop(this);
                        // on incrémente et décrémente
                        score++; 
                        coups--;
                    }, 500);          
                }
                
                // Affiche le nombre de coups sur une partie
                console.log(score);
                document.getElementById("score").innerHTML = "Score : " + score;

                // Difficulté avec un nombre de coups maximum
                document.getElementById("coups").innerText = "Coups : " + coups;
                // if (coups === 0) {
                //     alert("Game over");
                //     console.log("looser");
                // }             
            }
        })      
    }

    // Difficuté avec un temps limité
    let timer = document.getElementById("timer");
    let sec = 60;
            
    let time = setInterval(function() {
        sec--;
        // console.log(sec);
        timer.innerText = sec; 
        // console.log(timer.innerText); 
        if (sec === 0 || coups === 0) {
            alert("Game over");
            clearInterval(time);
        }    
    }, 1000);

// }
           
// recommencer une partie
// function main() {  
//     continuer = true;        
//     while ( continuer ) {          
//         jouer();          
//         continuer = confirm("Veux tu continuer ?");             
//     }
// }


// faire un jeu de morpion, puissance 4
