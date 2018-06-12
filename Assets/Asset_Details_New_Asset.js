//#import "../lib/tuneup.js"

test("Asset Details - Create new asset", function(target, app){

     //window.logElementTree();

     checkIsMainMenu("Assets");  
     
     // Create a new level 1 asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();
     
     // Wait for 3 seconds
     delay(3);
 
     createAsset("Asset L1","Asset Register Level 1");
     
     //Wait for 3 seconds
     delay(3); 
     
     // Click Actions
     navBar.buttons()["Actions"].tap();

     //Wait for 3 seconds
     delay(3);       
     
     window.popover().buttons()["New"].tap();

     //Wait for 3 seconds
     delay(10);     
     
     createAsset("AD New","Asset Details New Button")
     
     //Wait for 3 seconds
     delay(3);
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();

     //Wait for 3 seconds
     delay(10);
     });		
	
	
	