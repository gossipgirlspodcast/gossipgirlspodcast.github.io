




/* PHOTO CAROUSEL */
var images = ['https://media.giphy.com/media/NLvGVyxOwVlLi/giphy.gif', 
    'https://media.giphy.com/media/2pYzC4vgm29UY/giphy.gif', 
    'https://media.giphy.com/media/xTiTnqXZHLUd9wC9c4/giphy.gif',
    'https://media.giphy.com/media/t4g5L79mGrnIQ/giphy.gif',
    'https://media.giphy.com/media/ZUEaJDyaHNP5m/giphy.gif',
    'https://media.giphy.com/media/3M5J7yedLPCSs/giphy.gif',
    'https://media.giphy.com/media/5yLgoc7NuyKE9aHTEGY/giphy.gif',

    'https://media.giphy.com/media/7MuNcFGThW6LC/giphy.gif',
    'https://media.giphy.com/media/KzcG3wMva1wAg/giphy.gif',
    'https://media.giphy.com/media/QxOS6ox7NDXEI/giphy.gif',
    'https://media.giphy.com/media/m5OjKyCdcJG0w/giphy.gif',
    'https://media.giphy.com/media/upZz6InW5KGwU/giphy.gif',

    ];

var index = 0;

//clicking the next button 
$('#next').on('click',function(){
	//makes the index one more
	index = nextButton(index);	
	console.log(index);
	//changes image attribute to index in array
	$('#gossipgif').attr('src',images[index]);
});

//clicking previous button
$('#prev').on('click',function(){
	index = backButton(index);	
	$('#gossipgif').attr('src',images[index]);
});




function nextButton (){
	//if the index is one less than the total length, otherwise will go to last one twice
	if (index < images.length-1){
		index = index + 1;
	} else {
		index = 0;
	}
	// console.log(index);
	return(index);
};

function backButton () {
	if (index > 0){
		index = index - 1;
	}
	else {
		index = 5;
	}
	// console.log(index);
	return(index);
	
};

// TOP NAVIGATION

// $(function() {
    // Stick the #nav to the top of the window
    var nav = $('#nav');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var w = $(window);
    w.scroll(function() {
        var scrollTop = w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                // 'paddingTop', '10px'
                left: nav.offset().left,
                width: nav.width(),
                background: 'black',
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'

            });

            isFixed = false;
        }
    });
// });


$('#mobilenav').hide();
// Hamburger
$('.hamburger-icon').on('click', function(){
    $(this).toggleClass('active');    
    event.preventDefault();
    $('#mobilenav').toggle('.5s');
    on('click', function(){
        $(this).removeClass('active');
        $('#mobilenav').toggle();
        event.preventDefault();

    });

});



$('#mobilenav a').on('click', function(){
    $('#mobilenav').hide();
        $('.hamburger-icon').removeClass('active');

});
