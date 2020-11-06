jQuery(function(){
    let formApp = document.querySelector('.form-app');
    let screenSize = window.innerHeight;
    if(jQuery(formApp).css("height") < jQuery(screenSize)){
        jQuery(formApp).addClass('form-custom-height') ;
        jQuery(this) - offset.top;
    }
});

// Start Function To Change Icon Color

function myFunction(x) {
    x.classList.add("text-primary");
}