$(document).ready(function() {
 $(".remove").click(function(){
  $(this).parents(".card").hide();
 });

 $(".remove-all").click(function(){
    $('.card').hide();
    $('.remove-all').hide();
 });
});