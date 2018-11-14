$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.height() >= 468) { 
    
     document.getElementById("mob_show").style.display = "none";

      }
     
});