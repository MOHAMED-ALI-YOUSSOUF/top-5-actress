$(document).ready(function(){

    var $mainMenuİtem = $("#main-menu ul").children("li"),
    totalMainMenuİtem = $mainMenuİtem.length,
    openedİndex = 2,

    init =function(){
        bindEvents();

        if(validİndex(openedİndex))
        {
            animateİtem($mainMenuİtem.eq(openedİndex), true, 700);
        }


       
    },
    bindEvents= function(){
        $mainMenuİtem.children(".images").click(function(){

            var newİndex= $(this).parent().index();
            checkAndAnimateİtems(newİndex);
           
          
        });
        $(".button").hover(
            function(){
                $(this).addClass("hovered");
            },
            function(){
                $(this).removeClass("hovered");
            }
            );
        $(".button").click(function()
        {
            var newİndex= $(this).index();
            checkAndAnimateİtems(newİndex);
            
        });
    },

    validİndex= function (indexToCheck){
        return (indexToCheck >= 0)  && (indexToCheck < totalMainMenuİtem);
    },



    animateİtem= function($item, toOpen, speed){

        var  $colorİmage= $item.find(".color"),
        itemParam =toOpen ? {width:"420px"}: {width: "140px"},
        colorİmageParam= toOpen ? {left:"0px"} : {left:"140px"};
        $colorİmage.animate(colorİmageParam,speed);
        $item.animate(itemParam, speed);
        
    },

    checkAndAnimateİtems= function (indexToCheckAndAnimate){
        if(openedİndex=== indexToCheckAndAnimate)
        {
            animateİtem($mainMenuİtem.eq(indexToCheckAndAnimate), false, 250);
            openedİndex= -1;
        }
        else{
            if(validİndex(indexToCheckAndAnimate))
            {
                animateİtem($mainMenuİtem.eq(openedİndex), false,250);
                openedİndex= indexToCheckAndAnimate;
                animateİtem($mainMenuİtem.eq(openedİndex), true, 250);
            }
        }
    }

    init();
 

});