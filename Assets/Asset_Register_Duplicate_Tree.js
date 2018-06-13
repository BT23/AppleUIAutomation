//#import "../lib/tuneup.js"

test("Asset Register - Duplicate Tree", function(target, app){

     checkIsMainMenu("Assets");

     // Select Asset = IT in Asset Selector
     //scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "IT - Information Technology");    
     selectAndTapAnAsset("IT - Information Technology");
     
     // Wait for 10 seconds
     delay(10);

     // Tap on Actions
     navBar.buttons()["Actions"].tap();     
     
     // Wait for 3 seconds
     delay(3);
     
     // Tap on Duplicate Tree button
     app.windows()[0].scrollViews()[3].buttons()["Duplicate Tree"].tap();
     
     // Wait for 3 seconds
     delay(3);     

     window.popover().buttons()["Cancel"].tap();

     // Wait for 3 seconds
     delay(3);     
     
     // Tap on Move Asset button
     app.windows()[0].scrollViews()[3].buttons()["Duplicate Tree"].tap();
     
     // Wait for 3 seconds
     delay(3);          
     
     // Enter Asset Number = IT Duplicated in 'Please enter an Asset Number for the Duplicated Asset' form
     window.popover().textFields()[0].tap();
     app.keyboard().typeString("IT Duplicated");

     // Wait for 3 seconds
     delay(3);        
     
     // Turn on Do you want to copy the User Defined Fields and Extended Information of all Assets? checkbox
     window.popover().buttons()[" Do you want to copy the User Defined Fields and Extended Information of all Assets?"].tap();
  
     // Wait for 3 seconds
     delay(3);        
     
     // Tap on Ok button
     window.popover().buttons()["Ok"].tap();
     
     //Wait for 3 seconds
     delay(3);     

     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();    
     
     //Wait for 3 seconds
     delay(3);
     
     // Reopen Asset Register
     //window.buttons()["Assets"].tap();     
     checkIsMainMenu("Assets");
     
     //Wait for 3 seconds
     delay(3);
     
     //scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "IT Duplicated - Information Technology");
     selectAndTapAnAsset("IT - Information Technology");
     
     // Wait for 3 seconds
     delay(3);     
     
     // Expand asset tree by clicking on the arrow button
     window.scrollViews()[0].tableViews()[0].cells()["IT Duplicated - Information Technology"].buttons()[0].tap();

     // Wait for 3 seconds
     delay(3);
     
     // If asset can be scrolled and tapped on, it means child asset is copied over
     //scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "Phone - Phone");
     selectAndTapAnAsset("Phone - Phone");
     
     //Wait for 3 seconds
     delay(3);  
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap(); 
     
     //Wait for 3 seconds
     delay(10);  
     });		
	
	
	