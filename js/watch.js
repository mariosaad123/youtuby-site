$(document).ready(function() {
 $("#more-btn").on("click", function(){
  read();
 });

 $(".reply").click(function() {
  $(this).parents("div.row").next("div.card").toggle();
 });
});

/* لعرض المزيد او اقل من شرح الفديو على البطاقه */
function read() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("more-btn")

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "عرض المزيد";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "عرض اقل";
        moreText.style.display = "inline";
    }
}