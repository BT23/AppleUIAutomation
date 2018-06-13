//#import "../lib/tuneup.js"

test("Verify Asset Register - after creating a new child asset", function(target,app){
     
     checkIsMainMenu("Assets");
     
     // If asset can be scrolled and tapped on, it means asset is created successfully
     //scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "IT - Information Technology");
     window.scrollViews()[0].tableViews()[0].cells()["IT - Information Technology"].staticTexts()["IT - Information Technology"].tap();

     // Wait for 3 seconds
     delay(3);     
     
     // Expand asset tree by clicking on the arrow button
     window.scrollViews()[0].tableViews()[0].cells()["IT - Information Technology"].buttons()[0].tap();     
     
     // Wait for 3 seconds
     delay(3);
     
     // If asset can be scrolled and tapped on, it means asset is created successfully
     //scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "Asset Child - Asset Register New Child");
     window.scrollViews()[0].tableViews()[0].cells()["Asset Child - Asset Register New Child"].staticTexts()["Asset Child - Asset Register New Child"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);
     });
