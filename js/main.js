




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




// can i make a js query to replace an entire block of html, for the nav?



// AJAX FOR EPISODES

$.ajax({
  url: "https://gossipgirls.simplecast.fm/",
  context: document.body
}).done(function(data) {
console.log('data')});



