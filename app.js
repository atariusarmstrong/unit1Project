//Make 30 Divs for playing cards
for (let i = 0; i < 29; i ++) {
    console.log("cards")

    $('.cards:last').clone().appendTo('body')
}