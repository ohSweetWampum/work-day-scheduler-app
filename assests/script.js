
  $(function() {
    //select the element with the class .btn.saveBtn.col-2.col-md-1"
    var saveButton = $(".btn.saveBtn.col-2.col-md-1");
    saveButton.click(function() {
     
      var taskText = $(this).siblings(".col-8 col-md-10 description").val();
      var taskTime = $(this).parent().attr("id");

      storeToLocal({
        taskText: taskText,
        taskTime: taskTime
      });
      
    });
  });

  //save to local storage function
  function storeToLocal(){
    $(".saveBtn").on("click", function(){
      var taskText = $(this).siblings(".description").val();
      var taskTime = $(this).siblings(".hour").text();
      localStorage.setItem(taskTime, taskText);
    });
  }
  //retrieve from local storage, goes through every hour looking for stored data and retrieves it if there. if there is a saved task then it sets the textarea elemnt to the saved value
  function retrieveFromLocal() {
    for (var hour = 0; hour < 24; hour++) {
      var taskTime = $("#hour-" + hour + " .hour").text();
      var savedTaskText = localStorage.getItem(taskTime);
      if (savedTaskText !== null) {
        $("#hour-" + hour + " .description").val(savedTaskText);
      }
    }
  }

  retrieveFromLocal();



  $(function() {
    var currentTime = dayjs();
    var currentHour = currentTime.hour();
  
    // loop through every hour of the day and check to see if that hour is past, present or future of current hour, then add appropriate class to each box
    for (var hour = 0; hour < 24; hour++) {
      // check if hour is past
      if (currentHour > hour) {
        $("#hour-" + hour).addClass("past");
      }
      // check if hour is present
      else if (currentHour === hour) {
        $("#hour-" + hour).addClass("present");
      }
      // otherwise, hour is future
      else {
        $("#hour-" + hour).addClass("future");
      }
    }
  });
  























  
// //Generation a div element for each hour and will assign correct time (past,present, or future). This save a bunch of coding
//   $(function() {
//     var currentDate = dayjs();
//     var currentHour = currentDate.hour();

//     //looping through all 24 hours and creating and new hour box for each one
//     for (var i = 0; i < 24; i++){
//       var hourBox = $("<div>").addClass("row time-block");


//       //asssigning past, present, or future alerts to each hour box based on current time

//       if (i < currentHour){
//         hourBox.addClass("past");
//       }else if (i === currentHour){
//         hourBox.addClass("present");
//       }else{
//         hourBox.addClass("future");
//       }

//       //create the hour text and add it to box
//       var eachHourText = $("<div>")
//       .addClass("col-2 col-md-1 hour text-center py-3")
//       .text(dayjs({hour: i}).format("hA"));
//       hourBox.append(eachHourText);

//       //create task text input area
//       var taskDescriptionArea = $("<textarea>")
//       .addClass("col-8 col-md-10 description")
//       .attr("rows", "3");
//       hourBox.append(taskDescriptionArea);


//       //create save button for each hour box

//       var saveButton = $("<button>")
//       .addClass("btn saveBtn col-2 col-md-1")
//       .attr("aria-label", "save");
//       var saveIcon = $("<i>")
//       .addClass("fas fa-save")
//       .attr("aria-hidden", "true");


//       //add the entire completed hour box to the page

//       $("#hour-9").append(hourBox);
//     }
//   });


//   for (var i = 0; i < 24; i++){
//     var hourText = dayjs({hour: i}).format("hA");
//     var hourBox = $("<div>").addClass("row time-block");
//     var eachHourText = $("<div>")
//     .addClass("col-2 col-md-1 hour text-center py-3")
//     .text(hourText);
//     hourBox.append(eachHourText);
//     // rest of the code for each hour box
//     $("#planner").append(hourBox);
//   }

// var eachHourText = $("<div>")
//     .addClass("col-2 col-md-1 hour text-center py-3")
//     .text(dayjs({hour: i}).format("hA"));
// hourBox.append(eachHourText);




      