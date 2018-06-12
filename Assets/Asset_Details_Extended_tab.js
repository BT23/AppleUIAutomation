//#import "../lib/tuneup.js"

test("Asset Register Extended tab", function(target, app){
     
     //window.logElementTree();

     checkIsMainMenu("Assets");  
     
     // Create a new level 1 asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();

     // Wait for 3 seconds
     delay(3);

     // Enter Asset No. and Description
     window.textFields()[0].tap();
     app.keyboard().typeString("Asset Extended");

     //Wait for 3 seconds
     delay(3);
     
     window.textFields()[1].tap();
     app.keyboard().typeString("Asset Extended Tab");

     //Wait for 3 seconds
     delay(3);
     
     // Tap Extended tab
     window.scrollViews()[0].toolbar().buttons()["Extended"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Miscellaneous --");
     
     // Enter Serial Number
     window.scrollViews()[1].textFields()[2].tap();
     app.keyboard().typeString("sn123456789");
     
     //Wait for 3 seconds
     delay(3);
     
     
     // Enter Barcode Number
     window.scrollViews()[1].textFields()[4].tap();
     app.keyboard().typeString("bn123456789");
    
     //Wait for 3 seconds
     delay(3);
     
     // Enter Financial Asset Number
     window.scrollViews()[1].textFields()[6].tap();
     target.frontMostApp().keyboard().typeString("fan123456789");

     // Enter Available per Week
     window.scrollViews()[1].textFields()[8].tap();
     app.keyboard().typeString("7.5");
     
     UIALogger.logMessage("-- Dimension --");
     
     // Enter Height
     window.scrollViews()[1].textFields()[3].tap();
     app.keyboard().typeString("1.55");
     
     //Wait for 3 seconds
     delay(3);
     
     // Enter Width
     window.scrollViews()[1].textFields()[5].tap();
     app.keyboard().typeString("2.55");

     //Wait for 3 seconds
     delay(3);
     
     // Enter Depth
     window.scrollViews()[1].textFields()[7].tap();
     app.keyboard().typeString("3.55");
     
     //Wait for 3 seconds
     delay(3);
     
     // Enter Weight
     window.scrollViews()[1].textFields()[9].tap();
     app.keyboard().typeString("4.55");
     
     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Address --");
     
     // Enter Address Line 1
     window.scrollViews()[1].textFields()[11].tap();
     app.keyboard().typeString("320-326 ipswich road\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Enter Address Line 2
     window.scrollViews()[1].textFields()[12].tap();
     app.keyboard().typeString("Annerley\n");
 
     //Wait for 3 seconds
     delay(3);
     
     // Enter City
     window.scrollViews()[1].textFields()[13].tap();
     app.keyboard().typeString("Brisbane\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Enter State
     window.scrollViews()[1].textFields()[14].tap();
     app.keyboard().typeString("QLD\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Enter Country
     window.scrollViews()[1].textFields()[15].tap();
     app.keyboard().typeString("Australia\n");
     
     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Safety --");     
     
     // Turn on Safety checkbox
     window.scrollViews()[1].buttons()[" Safety"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     // Turn on Environmental checkbox
     window.scrollViews()[1].buttons()[" Environmental"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     // Turn on Compliance checkbox
     window.scrollViews()[1].buttons()[" Compliance"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     // Turn on Quality checkbox
     window.scrollViews()[1].buttons()[" Quality"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     //Turn on Operational checkbox
     window.scrollViews()[1].buttons()[" Operational"].tap();
    
     // Wait for 3 seconds
     delay(3);
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     // Wait for 3 seconds
     delay(3);
});		
	
	
	