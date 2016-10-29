

$(document).ready(function(){

	var contSize = 600;
	var antall = 16;
	var firkantSize = contSize/antall; 

	$('#container').css('background-color', '#F00')
					.css('width', contSize)
					.css('height', contSize);
	$('body').css('background-color', '#FFF');

	var tegnFirkanter = function(antall){
		firkantSize = contSize/antall;
		for(i=0; i<antall*antall; i++){
			$('#container').append('<div class="firkant"></div');
		};
		$('.firkant').css('width', firkantSize)
					 .css('height', firkantSize);
		$('.firkant').hover(function(){
		$(this).addClass('firkantover');
	});			 

	};
	
	tegnFirkanter(antall);



	

	$('button').on('click', function(){
		$('.firkant').removeClass('firkantover');
		$('.firkant').remove();
		antall = prompt('Hvor mange ruter');
		tegnFirkanter(antall);
		

	});

});