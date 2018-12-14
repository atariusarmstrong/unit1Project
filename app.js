//Set cloned items into variables
var clonedCards = $('.cards:last').clone()


//Make 30 Divs for playing cards
for (let i = 0; i < 29; i ++) {
    console.log("cards")

    //clonedCards.clone().appendTo('body')
   
}


//Insert cloned cards to grid
$(clonedCards).insertAfter('.cards')
