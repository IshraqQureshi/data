$(function(){

    const slider = jQuery('.slider').slick();

    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        jQuery('.btn').each(function(){
            const slideNumber = jQuery(this).data('slide');
            if(slideNumber == nextSlide) jQuery(this).addClass('active')
            else jQuery(this).removeClass('active')
        })

        const totalSlides = 8;
        const totalRotate = 360;
        const perSlideRotate = totalRotate / totalSlides;
        
        const toRotate = (perSlideRotate * (nextSlide + 1)).toFixed(0);
        let leftRotate = toRotate;
        let rightRotate = 0;

        let leftTimeout = 400;
        let rightTimeout = 0;

        if(toRotate > 180){
            leftRotate = 180;
            rightRotate = toRotate - 180;
            rightTimeout = 400;
            leftTimeout = 0;
        }

        setTimeout(() => {
            jQuery('#leftRotate').css({'transform': `rotate(${leftRotate}deg)`})
        }, leftTimeout);
        setTimeout(() => {            
            jQuery('#rightRotate').css({'transform': `rotate(${rightRotate}deg)`})
        }, rightTimeout);
    });

    jQuery('.btn').click(function(){
        
        const goToSlide = jQuery(this).data('slide');
        
        jQuery('.btn').removeClass('active')
        jQuery(this).addClass('active')
        slider[0].slick.slickGoTo(parseInt(goToSlide));
    })


    slider[0].slick.slickGoTo(0);
    

})