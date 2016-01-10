console.log("hello world");
 
   $( document ).ready(function() {
        console.log( "ready for DOM manipulation." );
        
  //       var sBox = $( "#secretBox" );
		// sBox.css('background', 'white');
 		$("#secretBox").html("<h1>secret box!</h1>");
		$("#secretBox").css('background-color', 'white');
		
		$("#row1").children().attr("class", "boxType3")
		
		$('#row4 .box').last().css('background', 'rgb(255,255,153)');
		
		$('#row4 .box').first().css('background', 'white');

		$('#row2 .box:nth-child(-n+2)').css('background','rgb(255,255,153)');

		$( ".box" ).not( "#secretBox" ).css( "width", "200px" );//width can be set to 2px for earlier exercise.

	
		$('#container').on( 'click', function( event ) {
  
		  console.log( event.pageX );   // The document mouse X coordinate.
		  console.log( event.pageY );   // The document mouse Y coordinate.
		});	

		$('.boxType1').append('<a href="http:galvanize.com"></a>');

		$('.boxType1').on( 'click', function( event ) {
  
		  alert( "You can never leave the page." );
		});	

		
		$(".box").on('click',function(){
			$(this).toggleClass("puppy")
		})


		$('#container').click(function(e) {
		    var tgt = e.target;
		    if (tgt.classList.contains('box')) {
		      this.style.backgroundColor = 'black';
		      tgt.style.backgroundColor = 'white';
		    } else {
		      this.style.backgroundColor = 'limegreen';
		    }
		  });


 });
 
    // Shorthand for $( document ).ready()
// $(function() {
//     console.log( "ready!" );
// });

