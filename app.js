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

//CATEGORY THREE QUESTIONS -- MUSICAL THEATRE
var categoryThree = [{
    question: 'A 2012 holiday gift to Broadway was a musical based on this Will Ferrell movie about a visitor from the North Pole',
    options: ['White Christmas', 'Elf: The Musical', 'A Christmas Carol', "It's a Wonderful Life"],
    answer: 1
},
{
    question: "Called the most influential work in the American musical theatre it opens with Oh What A Beautiful Mornin'",
    options: ['The Color Purple', 'Catch Me If You Can', 'Oklahoma', 'Bring It On: The Musical'],
    answer: 2
},
{
    question: "This phantom musical theatre composer holds the title Baron of Sydmonton",
    options: ['Andrew Lloyd Webber', 'Stephen Sondheim', 'Richard Rodgers', 'Lin-Manuel Miranda'],
    answer: 0
},
{
    question: 'Cotton Blossom the opening song of this musical is also the name of the title vessel',
    options: ['Titanic', 'Show Boat', 'Big River', 'Big Fish'],
    answer: 1
},
{
    question: 'Sally Bowles is a singer at the Kit Kat Club in this musical set in Berlin',
    options: ['A Chorus Line', "Smokey Joe's Cafe", "Cabaret", "Xanadu"],
    answer: 2
}]

//CATEGORY FOUR QUESTIONS -- TRAVEL
var categoryFour = [{
    question: "This clothing store chain once has Travel & Safari Clothing Co. as part of its name",
    options: ["Banana Republic", "LuLu Lemon", "Nike", "Express", "Anthropologie"],
    answer: 0
},
{
    question: 'This character began traveling around in a large fruit in 1961',
    options: ['Kuzco', 'Aladdin', 'James', 'Mark'],
    answer: 2
},
{
    question: 'This Haitian capital was founded by French planters in 1749',
    options: ['Bogota', 'Lima', 'Guadalajara', 'Port-Au-Prince'],
    answer: 3
},
{
    question: 'The Swann valley outside this Western Australian city is home to dozens of vineyards',
    options: ['Perth', 'Instanbull', 'New Zealand', 'Sydney'],
    answer: 0
},
{
    question: "A group of travelers use Saknussemm's Corridor to do this the title of a Verne novel",
    options: ['A Wrinkle in Time', 'Journey to the Center of the Earth', 'Bridge to Terabithia', 'The Hobbit'],
    answer: 1
}]

//CATEGORY FIVE QUESTIONS -- KIDS BOOKS
var categoryFive = [{
    question: "He's the royal elephant created by illustrator Jean de Brunhoff",
    options: ['Dumbo', 'Babar', 'Puba', 'Elle E. Phant'],
    answer: 1
},
{
    question: 'Kids really dig this 1998 book featuring Stanley Yelnats and Zero, twof of the young inmates at Camp Green Lake',
    options: ['Holes', 'Harry Potter and the Sorcerers Stone', 'The Perks of Being a Wallflower', 'A Series of Unfortunate Events'],
    answer: 0
},
{
    question: 'In a Dr. Seuss story he said with fingers nervously drumming I must find some way to stop Christmas from coming!',
    options: ['The Cat in the Cat', "Oh, the Places You'll Go", 'The Grinch', 'One Fish, Two Fish, Red Fish, Blue Fish'],
    answer: 2
},
{
    question: 'Fast friends Jess and Leslie create a secret and magical kingdom across the creek in this Katherine Paterson book',
    options: ['Bridge to Terabithia', 'The Chronicles of Narnia', 'Harry Potter and the Chamber of Secrets', 'The Fellowship of the Ring'],
    answer: 0
},
{
    question: "Lois Lowry won a 1990 Newbery Medal for this book about helping Jews to escape Denmark and the Nazis during World War II",
    options: ['The Giver', 'Number the Stars', 'Anastasia Krupnik', 'Messenger'],
    answer: 1
}]

//FINAL QUESTION
var categoryFinal = [{
    question: "In You Learn By Living this first lady of the 1940s challenged you must do the thing you think you cannot do",
    options: ['Jackie Kennedy', 'Eleanor Roosevelt', 'Nancy Reagan', 'Elizabeth Wallace'],
    answer: 1
}]

let cardArray = [".one", ".two", ".three", ".four", ".five"]

//FUNCTION & ARRAYS TO DISPLAY ABOVE CATEGORIES
let musicQuestions = []
let wagQuestions = []
let mtQuestions = []
let travelQuestions = []
let kidsQuestions = []
let finalQuestion = []


for (let i=0; i<5; i++){
    //--MUSIC QUESTIONS FOR CATEGORY 1
    let musicObject = new questionModal(categoryOne[i].question, categoryOne[i].options, categoryOne[i].answer, (i*100+(100)))
    musicQuestions.push(musicObject)

    //--WILL&GRACE QUESTIONS FOR CATEGORY 2
    let wagObject = new questionModal(categoryTwo[i].question, categoryTwo[i].options, categoryTwo[i].answer, (i*100+(100)))
    wagQuestions.push(wagObject)

    //--MUSICAL THEATRE QUESTIONS FOR CATEGORY 3
    let mtObject = new questionModal(categoryThree[i].question, categoryThree[i].options, categoryThree[i].answer, (i*100+(100)))
    mtQuestions.push(mtObject)
    
    //--TRAVEL QUESTIONS FOR CATEGORY 4
    let travelObject = new questionModal(categoryFour[i].question, categoryFour[i].options, categoryFour[i].answer, (i*100+(100)))
    travelQuestions.push(travelObject)

    //--KIDS BOOKS QUESTIONS FOR CATEGORY 5
    let kidsObject = new questionModal(categoryFive[i].question, categoryFive[i].options, categoryFive[i].answer, (i*100+(100)))
    kidsQuestions.push(kidsObject)

    //FINAL QUESTION
    let finalObject = new questionModal(categoryFinal.question, categoryFinal.options, categoryFinal.answer, (i*100+(100)))
    finalQuestion.push(finalObject)
    
    $('#cat1 .cards' + cardArray[i]).on('click', ()=> musicQuestions[i].click())
    $('#cat2 .cards' + cardArray[i]).on('click', ()=> wagQuestions[i].click())
    $('#cat3 .cards' + cardArray[i]).on('click', ()=> mtQuestions[i].click())
    $('#cat4 .cards' + cardArray[i]).on('click', ()=> travelQuestions[i].click())
    $('#cat5 .cards' + cardArray[i]).on('click', ()=> kidsQuestions[i].click())
    $('#finalquestion').on('click', ()=> finalQuestion[i].click())
}






