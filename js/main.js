//
function screenSizeInit(){
    if (window.matchMedia('screen and ( min-width: 1024px ) ').matches) {
        $('body').attr("data-devices","desktop");
        //$('.wrapper').addClass('wrapper-100');
    }

    else if (window.matchMedia('screen and (min-width: 576px) and (max-width: 768px) ').matches) {
        $('body').attr("data-devices","ipad");
        //$('.wrapper').addClass('wrapper-100');
    }

    else if (window.matchMedia('screen and (max-width: 576px)').matches) {
        $('body').attr("data-devices","mobile");
        //$('.wrapper').addClass('wrapper-100');
    }
}

$(function(){
    screenSizeInit();

    $(window).resize(function() {
        screenSizeInit();
    });

})


//Show Participants List
$('#pp_list').on('click',function(){
    
    if( $('body').attr("data-devices") === "mobile"){
            $('aside.sider').attr("data-mobile-views","on");
        }
    else if( $('body').attr("data-devices") === "ipad"){
        $('aside.sider').attr("data-mobile-views","on");
    }
    else if( $('body').attr("data-devices") === "desktop"){
         return;
    }

})

//Mobile Views Navigation 
$(function(){
    $('[data-mobile-nav="back"]').on('click',function(){
        $('[data-mobile-views]').attr("data-mobile-views","off");
    })
})







if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // some code..

}