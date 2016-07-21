// reveal all the cards
$('.carttotal').find('div').removeClass('front')

// unwrap groups of li's from respective ul's
$('.card-list').children().unwrap();

// get list of li's
var lis = $('.carttotal').find('li');

//style all li's to make them suitable for "prependTo" function
lis.each(function() {
    this.style.height = "60px";
    this.style.width = "50px";
    this.style.float = "right";
});


function order(itr){

	lis.each(function() {
	    if(this.children[0].getAttribute('data-id') == masterArr[itr].toLowerCase()){
	        console.log(this.children[0].getAttribute('data-id'));
	        $(this).prependTo(this.parentNode);
	    }
	});

}

// arrange all cards according to their pair
var masterArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
for( var i=0; i<masterArr.length; i++ ){
	order(i);
}

// now all that's left is to click the cards in succession!
