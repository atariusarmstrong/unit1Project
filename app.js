//Make 30 Divs for playing cards
for (let i = 0; i < 15; i ++) {
    console.log("cards")

    $('.cards:last-child').clone().appendTo('body')
}

