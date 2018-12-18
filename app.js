//Set cards to be clone into variables
var oneCards = $('.one:last')
var twoCards = $('.two:last')
var threeCards = $('.three:last')
var fourCards = $('.four:last')
var fiveCards = $('.five:last')


//Make 30 Divs for playing cards
for (let i = 0; i < 4; i ++) {
    oneCards.clone().appendTo('#cat'+ (i + 2))
    twoCards.clone().appendTo('#cat'+ (i + 2))
    threeCards.clone().appendTo('#cat'+ (i + 2))
    fourCards.clone().appendTo('#cat'+ (i + 2))
    fiveCards.clone().appendTo('#cat'+ (i + 2))
}

//class for question and answer
class questionModal {
    constructor(question, options, answer) {
        this.question = question
        this.options = options
        this.answer = answer
    }
    //When div is clicked the question and the answer options appear in the modal
    click(){
    $('.questionarea').html(this.question)
    for (let i=0; i< this.options.length; i++){
        $('#answer' + i).html(this.options[i])
    }
    document.getElementById('question').showModal()
    }
    answerSubmit() {
        
    }
}


//QUESTIONS COURTESY OF JEOPARDYQUESTIONS.COM
//CATEGORY ONE QUESTIONS --- MUSIC
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
}]


//CATEGORY TWO QUESTIONS -- WILL AND GRACE
var categoryTwo = [{
    question: "No big stretch -- he played dad to Willow in I Am Legend & to Jaden in The Pursuit of Happyness",
    options: ["Will Valderama", "Will Smith", "Will Ferrel", "Will"],
    answer: 1
},
{
    question: 'In the 1920s this cowboy humorist was honorary mayor of Beverly Hills California',
    options: ['Andy Warhol', 'Will Rogers', 'William Shakespeare', "Bill Bellamy"],
    answer: 1
},
{
    question: 'She followed Florence Harding into the White House',
    options: ['Chloe Grace Moretz', 'Grace Jones', 'Grace Coolidge', 'Grace Phipps'],
    answer: 2
},
{
    question: 'In 2016 this rear admiral and first Lady of Software was posthumously awarded the Presidential Medal of Freedom',
    options: ['Grace Hopper', 'Grace Foley', 'Grace Shadrack', "Grace Jones"],
    answer: 2
},
{
    question: "Not a movie star but a movie czar his censorship code governed the movie industry until the 1960s",
    options: ['Will Smith', 'William Baldwin', 'Willie Aames', 'Will Hays'],
    answer: 3
}]



let cardArray = [".one", ".two", ".three", ".four", ".five"]

//FUNCTIONS TO DISPLAY ABOVE CATEGORIES
let musicQuestions = []
let wagQuestions = []


for (let i=0; i<5; i++){
    //--MUSIC QUESTIONS FOR CATEGORY 1
    let musicObject = new questionModal(categoryOne[i].question, categoryOne[i].options, categoryOne[i].answer, (i*100+(100)))
    musicQuestions.push(musicObject)

    //--WILL&GRACE QUESTIONS FOR CATEGORY2
    let wagObject = new questionModal(categoryTwo[i].question, categoryTwo[i].options, categoryTwo[i].answer, (i*100+(100)))
    wagQuestions.push(wagObject)
    
    //console.log($('#cat1 .cards' + cardArray[i]).html())
    $('#cat1 .cards' + cardArray[i]).on('click', ()=> musicQuestions[i].click())
    $('#cat2 .cards' + cardArray[i]).on('click', ()=> wagQuestions[i].click())
}






