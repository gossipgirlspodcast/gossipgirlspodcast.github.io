




/* PHOTO CAROUSEL */
var images = ['https://media.giphy.com/media/NLvGVyxOwVlLi/giphy.gif', 'https://media.giphy.com/media/2pYzC4vgm29UY/giphy.gif', 'https://media.giphy.com/media/xTiTnqXZHLUd9wC9c4/giphy.gif'];

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



