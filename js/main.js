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
console.log(back);
// let front = document.getElementsByClassName("front");
// console.log(front);

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
    for(let i=0; i<back.length; i++) {
        back[i].addEventListener('click', function() {
            let imgRandom = imgFront[i];
            this.src = imgRandom;
            // alert(i);
        })
    }
// }