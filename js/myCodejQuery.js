
$(document).ready(function(){
   
    

    // css() animate() fade() slide() show() toggle() ...
    $(".button1").click(function(){    
       $(".mydiv").animate({height:"100px" } ) ;
       $(".mydiv").animate({width:"400px" } ) ;
       $(".mydiv").animate({borderRadius:"30px"},2000 ) ;

        $(".hi").animate({top:"50px",});

    });
    
    // text() html() ...
    $(".myVal").click(function(){
        $(".result").text("Your name is :  "+$("input").val());
        });
    
    // after() before() appende() prepend() ...
    $(".otherInputFile").click(function(){
    	$('.inputFile').after("<br> <input type='file' > ");
    })
    
    // Dimentions .... width() innerWidth() outerWidth() outerWidth()
    //       //   .... height()     //          //          //        
    var dw = $(document).width();
    var dh = $(document).height();
    console.log(dw+ " x "+ dh);

    $(".button1").hover(function(){    
   		$(".hi").width("+=" + 5);
    });
   

   $(".dim-left").click(function() {
   		$(this).width("+=" + 10);
   		$(".dim-right").width("-=" + 10);
   })
	$(".dim-right").click(function() {
   		$(this).width("+=" + 10);
   		$(".dim-left").width("-=" + 10);
   })


});