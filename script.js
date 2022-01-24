////current date function 
$("#currentDate").text(moment().format("MMMM Do, YYYY"));
////save text to local storage
function saveDuty() {
    const time = $(this).parent().attr("id");
    const task = $(this).siblings("textarea").val();
    localStorage.setItem(time, task);
}
///getting text from  local storage
$("#hour9 .js-Text").val(localStorage.getItem("hour9"));
$("#hour10 .js-Text").val(localStorage.getItem("hour10"));
$("#hour11 .js-Text").val(localStorage.getItem("hour11"));
$("#hour12 .js-Text").val(localStorage.getItem("hour12"));
$("#hour13 .js-Text").val(localStorage.getItem("hour13"));
$("#hour14 .js-Text").val(localStorage.getItem("hour14"));
$("#hour15 .js-Text").val(localStorage.getItem("hour15"));
$("#hour16 .js-Text").val(localStorage.getItem("hour16"));
$("#hour17 .js-Text").val(localStorage.getItem("hour17"));

//color chaning function
function colorChange(){
    const now = moment().hour();
    $(".js-row").each(function () {
        const row = $(this);
        const rowHour = row.data("hour");
        console.log(rowHour);
        if (rowHour < now) {
            $(this).addClass("past");
        } else if (rowHour === now) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }    
    });
}

$(".saveBtn").on("click", saveDuty);
colorChange();