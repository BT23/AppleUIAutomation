//#import "../lib/tuneup.js"

test("Asset Register - Delete Asset", function(target, app){

     checkIsMainMenu("Assets");

     // Create a new level 1 asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();     

     // Wait for 3 seconds
     delay(3);     

     createAsset("Delete Me", "Delete this asset");

     // Wait for 3 seconds
     delay(3);     
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();      
 
     // Wait for 3 seconds
     delay(3);
   
     // Select Asset = IT in Asset Selector
     scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "IT - Information Technology");      
 
     // Wait for 3 seconds
     delay(3);    
     
     // Tap on Actions
     navBar.buttons()["Actions"].tap();
     
     //Wait for 3 seconds
     delay(3);       

     // Try to delete an asset with children
     app.windows()[0].scrollViews()[3].buttons()["Delete"].tap();
     
     //Wait for 3 seconds
     delay(3);   
     
     // Tap Ok to Cancel Delete Asset message box
     app.alert().buttons()["Ok"].tap();     
     
     //Wait for 3 seconds
     delay(3);     
  
     // Select Asset = Delete Me on Asset Tree
     scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "Delete Me - Delete this asset");          
 
     //Wait for 3 seconds
     delay(3);     

     // Delte an asset with no children
     app.windows()[0].scrollViews()[3].buttons()["Delete"].tap();     
     
     // Tap Yes to Delete Asset message box
     app.alert().buttons()["Yes"].tap();     
     
     //Wait for 3 seconds
     delay(3);      
 
     // Tap Ok to Delete Successful message box
     app.alert().buttons()["Ok"].tap();     
     
     //Wait for 3 seconds
     delay(3);        

     // Verify asset number = Delete Me does not exist
     assertFalse(window.scrollViews()[0].tableViews()[0].cells()["Delete Me - Delete this asset"].isVisible(), "Asset = Delete Me should be deleted and removed");
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();    
     
     //Wait for 3 seconds
     delay(10);
     });		
	
	
	