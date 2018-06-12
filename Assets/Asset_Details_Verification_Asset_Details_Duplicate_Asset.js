//#import "../lib/tuneup.js"

test("Verify Asset Register - after asset is duplicated in Asset Details", function(target,app){

     checkIsMainMenu("Assets");
     
     // If asset can be scrolled and tapped on, it means asset is created successfully
     scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "asset duplicate - Information Technology");
     
     // Wait for 3 seconds
     delay(3);
     });
