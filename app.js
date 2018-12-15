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

//Card click tester now with modal
$('.cards').click(function(){
    console.log('This tester works so far.')
    clickCard()
})

//When user clicks on card it should open a prompt for a question
let clickCard = function (){
    document.getElementById("question1").showModal()
}

//User will select answer then hit "submit"
//When user submits answer it should either prompt that it's correct or incorrect
//When prompt closes, that card is no longer clickable


//QUESTIONS



//SETTING UP DIALOG WINDOW TESTER FOR QUESTION BOXES
//Set up dialog in HTML
//Run function in the script to bring up new window

