//Set cards to be clone into variables
var oneCards = $('.one:last')
var twoCards = $('.two:last')
var threeCards = $('.three:last')
var fourCards = $('.four:last')
var fiveCards = $('.five:last')


//Make 30 Divs for playing cards
for (let i = 0; i < 4; i ++) {
    console.log("cards")

    oneCards.clone().appendTo('.gamingArea')
    twoCards.clone().appendTo('.gamingArea')
    threeCards.clone().appendTo('.gamingArea')
    fourCards.clone().appendTo('.gamingArea')
    fiveCards.clone().appendTo('.gamingArea')
}



