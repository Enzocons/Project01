let index = 0;
const totalWorkItems = $(".section3-item-box").length;
console.log(totalWorkItems);

$(document).ready(function () {

    // Definimos el height maximo de la imagen de la lightbox //
    const wHeight = $(window).height();

    $(".lightbox-img").css("max-height", wHeight +"px")
    

    $(".section3-img").click(function () { 
        //console.log($(this).parent(".section3-item-box").index())
        index = $(this).parent(".section3-item-box").index();
        $(".lightbox").addClass("open");
        lightboxSlideShow();
    });

    //botones next y prev
    $(".lightbox .prev").click(function(){
        if(index == 0){
            index = totalWorkItems-1;
        }
        else{
            index--;
        }
        lightboxSlideShow();
    });

    $(".lightbox .next").click(function(){
        if(index == totalWorkItems-1){
            index = 0;
        }
        else{
            index++;
        }
        lightboxSlideShow();
    });

    //cerrar con la cruz
    $(".lightbox-close").click(function(){
        $(".lightbox").removeClass("open")
    })

    //cerrar clickeando fuera de la imagen

    $(".lightbox").click(function(event){
        if($(event.target).hasClass("lightbox")){
            $(this).removeClass("open");
        }
    })

});



function lightboxSlideShow(){
    const imgSrc = $(".section3-item-box").eq(index).find("img").attr("data-large");
    //console.log(imgSrc);
    const category = $(".section3-item-box").eq(index).find("h4").html();
    $(".lightbox-img").attr("src",imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-counter").html((index+1) + "/" + totalWorkItems);
    
}