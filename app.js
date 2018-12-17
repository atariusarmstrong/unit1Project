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
    $('#question').html(this.question)
})

//When user clicks on card it should open a prompt for a question
let clickCard = function (){
    document.getElementById('question').showModal()
}
//let clickCardTwo = function() {
//    document.getElementById('question2').showModal()
//}

//User will select answer then hit "submit"

//When user submits answer it should either prompt that it's correct or incorrect
//When prompt closes, that card is no longer clickable


//QUESTIONS
var categoryOne = [{
    question: "This artist is popularly known by another name, but was born as Robyn Fenty",
    options: ["Beyonce", "Rihanna", "Cher", "Mariah Carey"],
    answer: 1
},
{
    question: 'This Chained To The Rhythm singer is a judge on the 2018 American Idol',
    options: ['Mariah Carey', 'Jennifer Hudson', "Jennifer Lopez", 'Katy Perry'],
    answer: 3
},
{
    question: 'This elegant dance for couples dominated aristocratic European ballrooms from about 1650 to 1750',
    options: ['The Waltz', 'The Minuet', 'The Mirengue', 'The Fox Trot'],
    answer: 1
},
{
    question: 'In a Marvin Gaye song this title precedes things aint what they used to be',
    options: ['I Want You', 'Lets Get It On', 'Mercy Mercy Me', "You're All I Need to Get By"],
    answer: 2
},
{
    question: "In a 1991 top 5 hit Bonnie Raitt sang Let's give them this later the title of a Julia Roberts-Dennis Quaid movie",
    options: ['Something To Talk About', 'A Little More Love', 'Holly Jolly Christmas', 'More'],
    answer: 0
},
{
    question: 'While the military type of this composition is usually fast and upbeat the funeral type is slow and somber',
    options: ['Charleston', 'Gallop', 'Stampede', 'March'],
    answer: 3
}]

//class for question and answer
class questionModal {
    constructor(question, options, answer) {
        this.question = question
        this.options = options
        this.answer = answer
    }
}

let musicQuestions = []
for (let i=0; i<4; i++){
    let musicObject = new questionModal(categoryOne[i].question, categoryOne[i].options, categoryOne[i].answer, (i*100+(100)))
    musicQuestions.push(musicObject)
}


//SETTING UP DIALOG WINDOW TESTER FOR QUESTION BOXES
//Set up dialog in HTML
//Run function in the script to bring up new window

