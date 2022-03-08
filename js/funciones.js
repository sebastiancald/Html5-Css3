$(document).ready(listo);

function listo(){
    jQuery(".hamb").click(function(e){ //Con jQuery seleccionamos el objeto al cual al dar click nos ejecutara una funcion//
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-times"); //toggle permite cambiar una clase.
    });
    jQuery("header .container nav a").click(function(e){
        jQuery("header .container nav").removeClass("open");
        jQuery(".hamb i").removeClass("fa-times"); //permite quitar una clase.
        var dev = jQuery(this).attr("href"); //crea una variable a la cual se le asigna un objeto 
        //al que se quiere dirigir dando click.

        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top
        })
    });
}