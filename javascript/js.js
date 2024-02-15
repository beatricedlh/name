$(".menu-area").click(function() {
    $(".menu-area").toggleClass("active")
})

var studentName = "Ray";
var allStudents = ["Ray", "Naveena", "Turba","Warrick", "Yuna", "Béatrice", "Priscilla"]
console.log(allStudents)

var i = 0;
while (i < allStudents.length){
    console.log(allStudents[i])
    $("<div></div>")
    .addClass("student")
    .html(allStudents[i])
    .appendTo("#everything")

    i = i + 1
}

$(window).on('resize', function(){
    var win = $(window);
    if(win.width() > 1280){
        $("#everything").css("grid-template-columns", "repeat(4, 1fr)")
    }
    if(win.width() < 1280){
        $("#everything").css("grid-template-columns", "repeat(2, 1fr)")
    }
})

$(document).scroll(function(){
    $("<div></div>")
    .addClass("new-div")
    .appendTo("body")
    .html("Number of Students: " + allStudents.length)
})