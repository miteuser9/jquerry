$(function(){
   var flag = true;
    $("#onoff").click(function(){
        if(flag){
        var imgname = "images/off.jpg"
        flag=false;
        }else{
          var imgname = "images/on.jpg"
        flag=true;  
        }
        $("img").attr("src", imgname);
    });
/* start of hide show toggle ex*/
    $("#hide").click(function(){
        $("#randomtext").hide();
    });
    
    $("#show").click(function(){
        $("#randomtext").show();
    });
    
    $("#toggle").click(function(){
        $("#randomtext").toggle();
    });
    /* end of hide show toggle ex*/
   
   /*fadein and fadeout example*/
    $("#fadein").click(function(){
        $("#box1").fadeIn();               
    });
    
    $("#fadeout").click(function(){
        $("#box1").fadeOut();
    });
   
});