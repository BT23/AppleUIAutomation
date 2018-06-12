//#import "../lib/tuneup.js"

test("Asset Register Details - Duplicate Asset", function(target, app){

     //window.logElementTree();

     checkIsMainMenu("Assets");
     
     scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "IT - Information Technology");
     
     //Wait for 3 seconds
     delay(3);     
     
     // Open Asset Details using Details button
     window.scrollViews()[2].buttons()["Details"].tap();
     
     //Wait for 3 seconds
     delay(3);     
     
     // Click Actions
     navBar.buttons()["Actions"].tap();
     
     //Wait for 3 seconds
     delay(3);       
     
     window.popover().buttons()["Duplicate"].tap();
     
     //Wait for 3 seconds
     delay(3);     
     
     window.popover().textFields()[0].tap();

     //Wait for 3 seconds
     delay(3);  

     app.keyboard().typeString("asset duplicate");
     
     //Wait for 3 seconds
     delay(3);     

     window.popover().buttons()[" Do you want to copy the User Defined Fields and Extended Information of all Assets?"].tap();

     //Wait for 3 seconds
     delay(3);     
     
     target.frontMostApp().mainWindow().popover().buttons()["Ok"].tap();
 
     //Wait for 3 seconds
     delay(3);    

     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();
     
     //Wait for 3 seconds
     delay(3);  
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);   
     });		
	
	
	