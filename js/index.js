

// nav bar
$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
   $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
})

// up and down slider
$('.singer h3').on('click', function(e) {
    
    let targetH3 = $(e.target).parent().children('p') 
    let siblingsH3 = $(e.target).parent().siblings().children('p')

    siblingsH3.slideUp(1000)
    targetH3.slideToggle(1000)
})


// section Count Down

$(function(){

    
    let countDown = new Date("april 29, 2024 23:59:59").getTime()
    
    let counter = setInterval(() => {
        let dateNow = new Date().getTime()
        let dateDiff = countDown - dateNow
        
        // Get time Unites
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
        let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) )
        let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60 ) )
        let seconde = Math.floor((dateDiff % (1000 * 60 )) / (1000 ) )
    
        document.querySelector('#days').innerHTML = days
        document.querySelector('#hours').innerHTML = hours
        document.querySelector('#minutes').innerHTML = minutes
        document.querySelector('#seconde').innerHTML = seconde
    
       
    }, 1000);
    
    })
     


    
