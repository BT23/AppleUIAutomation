//#import "../lib/tuneup.js"

test("Verify Asset Register - after asset is created in Asset Details", function(target,app){
     
     checkIsMainMenu("Assets");
     
     // If asset can be scrolled and tapped on, it means asset is created successfully
     scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "Asset L1 - Asset Register Level 1");

     // Wait for 3 seconds
     delay(3);

     // If asset can be scrolled and tapped on, it means asset is created successfully
     scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "AD New - Asset Details New Button");
     
     // Wait for 3 seconds
     delay(3);
     });
