   
function viewDiv(){
  document.getElementById("mob_show").style.display = "block";
};
        function hideDiv(){
  document.getElementById("mob_show").style.display = "none";
};


window.onresize = function() {
    if (window.innerHeight >= 820) { /* ... */ }
    if (window.innerWidth <= 1280) {  /* ... */ }
}
