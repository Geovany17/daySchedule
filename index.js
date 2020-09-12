// resources https://www.udemy.com/certificate/UC-c31b4994-3478-4f49-8f25-f9ade037f53d/ 
// https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/18125165#overview
// https://www.appbrewery.co/p/web-development-course-resources 
$(document).ready(function () {


    var hour = moment().hours();
    //================================
    // date and time for top of page
    //================================

    function getDate() {

        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    };

    //==================================================
    // I made this step with the help of a tutor 
    //Color coding schedule 
    //===================================================

    function colorSchedule() {

        $("input").each(function () {

            var rowHour = $(this).attr("id");
            var rowNumber = parseInt(rowHour);

            if (rowNumber === hour) {

                $(this).addClass("present");

            } else if (rowNumber < hour) {

                $(this).addClass("past");

            } else {

                $(this).addClass("future");
            };
        });
    };

    //=========================================================================
    //made this step with this resource https://htmlcheatsheet.com/jquery/
    //Rendering stored inputs after page refresh
    //made this step with the help of a  tutor
    //=========================================================================

    function renderStoredInputs() {

        $(".event").each(function () {

            var inputId = $(this).attr("id");

            $(this).val(localStorage.getItem(inputId));

        });
    };

    //=========================================================
    //Click event to save user input in local storage
    //=========================================================


    $(".saveBtn").click(function () {

        var scheduleInputs = $(this).siblings(".event").val();
        var inputsLocation = $(this).siblings(".event").attr("id");

        localStorage.setItem(inputsLocation, scheduleInputs);

    });





    //=========================================================
    //Calling the functions
    //=========================================================

    setInterval(getDate, 1000);
    colorSchedule();
    setInterval(colorSchedule, 1000);
    renderStoredInputs();

});