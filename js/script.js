$(document).ready(function(){
    ////Set options

    //speed of slides by hand
    var speed = 200;

    //should it auto-slide
    var autoswitch = true;

    var autoswitch_speed = 4000;

    //Add initial active class
    $('.slide').first().addClass('active');

    //hide all slides
    $('.slide').hide();

    //show first slide
    $('.active').show();
    
    ////event handler
    
    //next button
    //get onclick event for next
    $('#next').on('click',nextSlide);
    
    //get onclick event for next
    $('#prev').on('click',prevSlide);
    
    //autoslide
    if(autoswitch===true){
        setInterval(nextSlide,autoswitch_speed);
        
    };
    
    //switch to the next slide
    function nextSlide(){

        //append oldActive class to current active image
        //check if image is the last child or we have another to loaf
        $('.active').removeClass('active').addClass('oldActive');
        //if it it last child append active class to the first child
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
            
        //if there is next child (image) asign it to be active
        }else{
            $('.oldActive').next().addClass('active');
        }
        
        //remove class oldActive so we can add it to the next loaded image
        $('.oldActive').removeClass('oldActive');
        //since slide is the container to our picture we use it to slide it out of the site
        $('.slide').fadeOut(speed);
        //after that we simply fade in our new image that ws previously hidden
        $('.active').fadeIn(speed);
        
    };
    
    //switch to the previous slide
    function prevSlide(){
        //append oldActive class to current active image
        //check if image is the last child or we have another to loaf
        $('.active').removeClass('active').addClass('oldActive');
        //if it it last child append active class to the first child
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
            
        //if there is previous child (image) asign it to be active
        }else{
            $('.oldActive').prev().addClass('active');
        }
        
        //remove class oldActive so we can add it to the next loaded image
        $('.oldActive').removeClass('oldActive');
        //since slide is the container to our picture we use it to slide it out of the site
        $('.slide').fadeOut(speed);
        //after that we simply fade in our new image that ws previously hidden
        $('.active').fadeIn(speed);
    }
});



