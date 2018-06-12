//#import "../lib/tuneup.js"

test("Asset Register - New Child", function(target, app){

     checkIsMainMenu("Assets");
     
     // Select Level 1 asset = IT
     scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "IT - Information Technology");     

     // Wait for 3 seconds
     delay(3);     
     
     // Create a new child asset
     window.scrollViews()[2].buttons()["New Child"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Enter Asset No. and Description
     window.textFields()[0].tap();
     app.keyboard().typeString("Asset Child");
     
     //Wait for 3 seconds
     delay(3);
     
     window.textFields()[1].tap();
     app.keyboard().typeString("Asset Register New Child");
     
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
	
	
	