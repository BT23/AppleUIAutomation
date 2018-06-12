//#import "../lib/tuneup.js"

test("Verify Asset Details - Details tab", function(target,app){

     checkIsMainMenu("Assets");
     
     // Select Asset = MEX iPad
     window.scrollViews()[0].tableViews()[0].cells()["Asset Details - Asset Details Tab"].tap();

     //Wait for 3 seconds
     delay(3);     
     
     // Open Asset Details using Details button
     window.scrollViews()[2].buttons()["Details"].tap();
     
     // Wait for Asset Details form opened
     waitVisible(navBar.buttons()["Assets"]);
     
     //Wait for 3 seconds
     delay(3); 
     
     // Verify the following fields are not blank (i.e values can be saved into database)

     // Asset No. and Description
     var assetNoFieldValue = window.textFields()[0].value();
     assertEquals("Asset Details", assetNoFieldValue, "Expected: Asset No. = Asset Details");
 
     //Wait for 3 seconds
     delay(3);     
     
     var assetDescriptionValue = window.textFields()[1].value();
     assertEquals("Asset Details Tab", assetDescriptionValue, "Expected: Asset Description = Asset Details Tab");

     //Wait for 3 seconds
     delay(3);
     
     // Account Code     
     var accountCodeValue = window.scrollViews()[1].buttons()[2].label();
     assertEquals("HSBC", accountCodeValue, "Expected: Account Code = HSBC");

     //Wait for 3 seconds
     delay(3);
     
     // Asset Types
     //var assetTypeValue = window.scrollViews()[1].buttons()[4].label();
     //assertEquals("CARS", assetTypeValue, "Expected: Asset Type = CARS");
     
     //Wait for 3 seconds
     delay(3);
     
     // Manufacturer
     var manufacturerValue = window.scrollViews()[1].buttons()[6].label();
     assertEquals("FORD", manufacturerValue, "Expected: Manufacturer = FORD");
     
     //Wait for 3 seconds
     delay(3);
     
     // Model Number
     var modelNumberValue = window.scrollViews()[1].buttons()[8].label();
     assertEquals("Fiesta", modelNumberValue, "Expected: Model Number = Fiesta");

     //Wait for 3 seconds
     delay(3);
     
     // Department
     var departmentValue = window.scrollViews()[1].buttons()[10].label();
     assertEquals("AD", departmentValue, "Expected: Department = AD");
     
     //Wait for 3 seconds
     delay(3);
     
     // Customer
     var customerValue = window.scrollViews()[1].buttons()[12].label();
     assertEquals("BTC", customerValue, "Expected: Customer = BTC");

     //Wait for 3 seconds
     delay(3);
     
     // Contractor
     var contractorValue = window.scrollViews()[1].buttons()[14].label();
     assertEquals("Google Google Inc", contractorValue, "Expected: Contractor = Google - Google Inc");
     
     //Wait for 3 seconds
     delay(3);
     
     // Asset Status
     var assetStatusValue = window.scrollViews()[1].buttons()[18].label();
     assertEquals("In Use", assetStatusValue, "Expected: Asset Status = In Use");
     
     //Wait for 3 seconds
     delay(3);
     
     // Safety Notes
     var safetyNotesValue = window.scrollViews()[1].textViews()[0].value();
     assertEquals("Release Test - Safety Notes", safetyNotesValue, "Expected: Safety Notes = Release Test - Safety Notes");   

     //Wait for 3 seconds
     delay(3);
     
     // Comments
     var commentsValue = window.scrollViews()[1].textViews()[1].value();
     assertEquals("Release Test - Comments", commentsValue, "Expected: Comments = Release Test - Comments");  
     
     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- DONE - Verified All Fields --");
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);     
     });
