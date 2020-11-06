jQuery(function(){
    /* Start Tabs For Add Recipes */
    /* Start Tabs For Name */
    jQuery("#recipe-tabs-name li").click(function(){
        // Get The Clicked li ID And Cache it in nameId Variable
        let nameId = jQuery(this).attr("id");
        // Remove Class Inactive From Clicked Li And Add It To Other Li In The Same Ul
        jQuery(this).removeClass("inactive").siblings().addClass("inactive");
        // Hide All On Tab-Content-Details When Click On The Li
        jQuery(".tab-content .tab-content-details").hide();
        jQuery('#' + nameId + "-content").fadeIn("1000");
    });


    jQuery("#recipe-tabs-Keywords li").click(function(){
        // Get The Clicked li ID And Cache it in nameId Variable
        let keywordsId = jQuery(this).attr("id");
        // Remove Class Inactive From Clicked Li And Add It To Other Li In The Same Ul
        jQuery(this).removeClass("inactive2").siblings().addClass("inactive2");
        // Hide All On Tab-Content-Details When Click On The Li
        jQuery(".keywords-tab-content .keywords-tab-content-details").hide();
        jQuery('#' + keywordsId + "-content").fadeIn("1000");
    });


    let formApp = document.querySelector('.form-app');
    let screenSize = window.innerHeight;
    if(jQuery(formApp).css("height") < jQuery(screenSize)){
        jQuery(formApp).addClass('form-custom-height') ;
        jQuery("body").css("paddingBottom", "0") ;
    }

    
    var buttonAdd = document.getElementById('add-step');
    jQuery(buttonAdd).click(function(e){
        e.preventDefault();
        jQuery('form #ayhaga').append(
            jQuery("<div class='form-div'>").append(
                jQuery("<input type='text'  class='form-input' placeholder=' '>"),
                jQuery("<label for =' ' class ='form-label'>محتوى الخطوة </label>")

            )
        );
    });



    var IngredientsButtonAdd = document.getElementById('ingredients-button-add');
    jQuery(IngredientsButtonAdd).click(function(event){
        event.preventDefault();
        jQuery('form #ingredients-list').append(
            jQuery("<div class='form-div-list'>").append(
                jQuery("<input type='text'  class='form-input-list' placeholder='المكون '>")
            ),
            jQuery("<div class='form-div-list'>").append(
                jQuery("<input type='text'  class='form-input-list' placeholder=' الكمية'>")

            )        );
        jQuery("form #ingredients-list").append(
            jQuery("<li class='form ingredients-item'></li>").append(
                jQuery("<button = 'delet-item' type='submit'><span class='delet-icon'><i class='flaticon-plus'></i></span></button>")
            )
        )
        jquery('.ingredients-item button').click(function(eve){
            eve.preventDefault();
            jquery(".ingredients-item").remove();
        })
    });














    
});
