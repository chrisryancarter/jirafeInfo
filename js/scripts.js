$(function () {
    $(window).scroll(function () {
    var t = $(window).scrollTop();
        if (t >= 170) {
            $('.percentage').removeClass("hidden").addClass("magictime tinDownIn");
		}
        if (t >= 805) {
            $('.appleLogo').removeClass("hidden").addClass("magictime perspectiveLeftRetourn");
        }
        if (t >= 825) {
            $('.iPhone').removeClass("hidden").addClass("magictime perspectiveDownRetourn");
        }
        if (t >= 865) {
            $('.woman').removeClass("hidden").addClass("magictime perspectiveRightRetourn");
        }       
         if (t >= 2805) {
            $('.emailClient').removeClass("hidden").addClass("animated fadeIn");
        }            
         if (t >= 3405) {
            $('.mattersHeader').removeClass("hidden").addClass("animated fadeIn");
        }                  
                                    
        else {
            $('body').removeClass("run").addClass("stand");
        }
        });
});
