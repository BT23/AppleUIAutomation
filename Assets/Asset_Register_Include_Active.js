//#import "../lib/tuneup.js"

test("Asset Register - Create inactive asset - Verify asset is hidden", function(target, app){

     checkIsMainMenu("Assets");

     // Create a new level 1 asset called inactive asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();     

     // Wait for 3 seconds
     delay(3);     

     createAsset("Inactive Asset", "Asset is inactive");

     // Wait for 3 seconds
     delay(3);     
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();      
 
     // Wait for 3 seconds
     delay(3);       
     
     // Open Asset Details using Details button
     window.scrollViews()[2].buttons()["Details"].tap();     
     
     //Wait for 3 seconds
     delay(3);    

     // Make the asset inactive
     window.scrollViews()[1].buttons()[" Active"].tap();

     //Wait for 3 seconds
     delay(3);         
     
     // Tap on Yes to Deactive Asset message box
     app.alert().buttons()["Yes"].tap();
     
     //Wait for 3 seconds
     delay(3);        
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();     

     //Wait for 3 seconds
     delay(3);      
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();    

     //Wait for 3 seconds
     delay(3);     
     
     // Open Asset Register
     //window.buttons()["Assets"].tap();
     checkIsMainMenu("Assets");
 
     //Wait for 3 seconds
     delay(3);      
     
     // Verify inactive asset is hidden
     assertFalse(window.scrollViews()[0].tableViews()[0].cells()["Inactive Asset - Asset is inactive"].isVisible(), "inactive asset should be hidden");
     
     //Wait for 3 seconds
     delay(3);     
     
     // Turn on Include Inactive checkbox
     window.scrollViews()[2].buttons()["checkbox"].tap();

     //Wait for 3 seconds
     delay(3);     
     
     // Verify inactive asset showing again
     assertTrue(window.scrollViews()[0].tableViews()[0].cells()["Inactive Asset - Asset is inactive"].staticTexts()["Inactive Asset - Asset is inactive"].isVisible(), "inactive asset should be shown");
     
     //Wait for 3 seconds
     delay(3);
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);      
     });		
	
	
	