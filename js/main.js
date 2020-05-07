
$('#test-btn').on('click',function(){

    var wrap = $('.wrapper'),
        wrapAttr = wrap.attr("data-status");

    if( wrapAttr === "open-half" ){
        wrap.attr('data-status','open-full');
    }else{
        wrap.attr('data-status','open-half');
    }

})

$(window).resize(function() {
    
    var wrap = $('.wrapper'),
    wrapAttr = wrap.attr("data-status");

    //Screen > 992px
    if (window.matchMedia('screen and (min-width: 1025px)').matches) {
        wrap.attr('data-status','open-half');
    }else{
        wrap.attr('data-status','open-full');
    }
});