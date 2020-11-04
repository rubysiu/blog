window.onload=(function(){
    $(".right").click(function(){
        var display= $(".left").css('display')
        if (display!="none") {
            $(".left").toggle({width:'toggle'},1000);
            $(".left-e").toggle({width:'toggle'},1000);
            $(".right").animate( {marginLeft:'0'},1000);
            $(".top").animate( {marginLeft:'0'},1000);
        }
    });

   
    
    $(".left-e .icon").click (function(){
    $(".left").animate({width:'toggle'},1000);
    $(".left-e").toggle({width:'toggle'},1000);
    $(".right").animate( {marginLeft:'15%'},1000);
    $(".right .top").animate( {marginLeft:'15%'},1000);
 
    });
}) 
        
           