//#import "../lib/tuneup.js"

test("Verify Asset Details - Documents tab", function(target,app){

     checkIsMainMenu("Assets");

     UIALogger.logMessage("-- Click Details button to open Asset Details --");
 
     //Wait for 3 seconds
     delay(3);
     
     // Select Asset = Asset Documents - Asset Documents Tab
     window.scrollViews()[0].tableViews()[0].cells()["Asset Documents - Asset Documents Tab"].tap();

     //Wait for 3 seconds
     delay(3);     
     
     // Open Asset Details using Details button
     window.scrollViews()[2].buttons()["Details"].tap();
 
     //Wait for 3 seconds
     delay(3);
     
     // Wait for Asset Details form opened
     waitVisible(navBar.staticTexts()["Asset Details"]);
     
     // Tap Financial tab
     window.scrollViews()[0].toolbar().buttons()["Documents"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     // Verify the following fields are not blank (i.e values can be saved into database)

     // Asset No. and Description
     var assetNoFieldValue = window.textFields()[0].value();
     assertEquals("Asset Documents", assetNoFieldValue, "Expected: Asset No. = Asset Documents");
     
     var assetDescriptionValue = window.textFields()[1].value();
     assertEquals("Asset Documents Tab", assetDescriptionValue, "Expected: Asset Description = Asset Documents Tab");

     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Docs --");
     
     var countRecords = window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells().length;
     assertEquals("1", countRecords, "Expected: Only 1 record is shown.")

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
