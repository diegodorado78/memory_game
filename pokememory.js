document.addEventListener('DOMContentLoaded',()=> {
 const monsters = [  
    {
        name:'blastoise',
        src: './images_pokemon/blastoise.png'
    },
    {
        name:'charizard',
        src: './images_pokemon/charizard.png'
    },
    {
        name:'venasaur',
        src: './images_pokemon/venasaur.png'
    },
    {
        name:'flareon',
        src: './images_pokemon/flareon.png'
    },
    {
        name:'vaporeon',
        src: './images_pokemon/vaporeon.png'
    },
    {
        name:'gastly',
        src: './images_pokemon/gastly.png'
    },
    {
        name:'blastoise',
        src: './images_pokemon/blastoise.png'
    },
    {
        name:'charizard',
        src: './images_pokemon/charizard.png'
    },
    {
        name:'venasaur',
        src: './images_pokemon/venasaur.png'
    },
    {
        name:'flareon',
        src: './images_pokemon/flareon.png'
    },
    {
        name:'vaporeon',
        src: './images_pokemon/vaporeon.png'
    },
    {
        name:'gastly',
        src: './images_pokemon/gastly.png'
    },
    
];

    //MOVER EL ORDEN DE LAS IMAGENES
    monsters.sort(() => 0.5 - Math.random())
    //CREACION TABLERO
    const grid = document.querySelector('.grid');
    const resultado = document.querySelector('#resultado');
    var cardsChosen= [];
    var cardsChosenId = [];
    const cardsWon = [];

    //funcion crear tablero
     function crearTablero() {
         for (var i = 0; i < monsters.length;i++){
            var div = document.createElement('div');
            div.setAttribute('class','divPoke');
            var card = document.createElement('img');
            card.setAttribute('src', './images_pokemon/pokeball.png')
            card.setAttribute('cardId',i)
            card.addEventListener('click', voltearCarta)
            div.appendChild(card)
            grid.appendChild(div) 
        }
     }    
    //CHECK FOR MATCH DE PAREJAS
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
        
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', './images_pokemon/pokeball.png')
        cards[optionTwoId].setAttribute('src', './images_pokemon/pokeball.png')
        alert("elegiste la misma imagen")
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        alert("encontraste una pareja")
        cards[optionOneId].setAttribute('src', './images_pokemon/white.png')
        cards[optionTwoId].setAttribute('src', './images_pokemon/white.png')
        cards[optionOneId].removeEventListener('click', voltearCarta);
        cards[optionTwoId].removeEventListener('click', voltearCarta);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', './images_pokemon/pokeball.png')
        cards[optionTwoId].setAttribute('src', './images_pokemon/pokeball.png')
        alert('intenta de nuevo')
    }
    // limpiar los arrays haya o no match
    cardsChosen = []
    cardsChosenId = []
    resultado.textContent = cardsWon.length
    if (cardsWon.length === monsters.length / 2) {
        resultado.textContent = 'Congrats, you caught them all'
    }
}
     //FUNCION VOLTEAR CARTA
     function voltearCarta(){
         var cardId =this.getAttribute('cardId');
         cardsChosen.push(monsters[cardId].name);
         cardsChosenId.push(cardId);
         this.setAttribute('src',monsters[cardId].src);
         if( cardsChosen.length===2){
             setTimeout(checkForMatch, 500);
         }
     }
crearTablero()  
})
// EJEMPLO CREACION DE POKEDESK CON FOR EACH
/*
var grid = document.querySelector('.grid');

monsters.forEach((element,index) => {
    var div = document.createElement('div');
    div.setAttribute('class', 'divPoke');
var p = document.createElement('p');
var imagen= document.createElement('img');
imagen.setAttribute('src',monsters[index].src);
   //p.textContent= monsters[index].name;
    //p.innerHTML= monsters[index].name;
    div.append(imagen,p);
    grid.append(div); 
});*/
