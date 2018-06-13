#import "../lib/tuneup.js"

test("Asset Register - Rename Asset", function(target, app){

     checkIsMainMenu("Assets");

     // Create a new level 1 asset called inactive asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();     

     // Wait for 3 seconds
     delay(3);     

     createAsset("Original Name", "Original Asset Name");

     // Wait for 3 seconds
     delay(3);     
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();      
 
     // Wait for 3 seconds
     delay(3);
     
     // Tap on Actions
     navBar.buttons()["Actions"].tap();
     
     //Wait for 3 seconds
     delay(3);       

     // Tap on Rename Asset button
     window.scrollViews()[3].buttons()["Asset"].tap();
       
     //Wait for 3 seconds
     delay(3);   
     
     // Verify default values are populated on the following fields
     
     // Old Asset Number = Original Name
     assertEquals("Original Name", window.popover().textFields()[0].value(), "Old Asset Number should be Original Name");
     
     // Asset Number = Blank

     assertEquals("", window.popover().textFields()[1].value(), "Asset Number should be blank");
     
     // Asset Rename Date = Today
     assertEquals(calculateDateForVerification(0, "longDate"), window.popover().buttons()[1].label(), "Asset Rename Date = Today");
     
     // Old Parent = Blank
     assertEquals("", window.popover().textFields()[2].value(), "Old Parent should be blank");
     
     // New Parent = Blank
     assertEquals("", window.popover().textFields()[3].value(), "New Parenet should be blank");

     // Reason = Asset Rename.
     assertEquals("Asset Rename.", window.popover().textViews()[0].value(), "Reason = Asset Rename.");
     
     //Tap on Cancel button
     window.popover().buttons()["Cancel"].tap();
     
     //Wait for 3 seconds
     delay(3);  
     
     // Reopen Asset Rename form
     window.scrollViews()[3].buttons()["Asset"].tap();     
 
     //Wait for 3 seconds
     delay(3);         
     
     // Enter new asset name in Asset Rename form
     window.popover().textFields()[1].tap();
     
     //Wait for 3 seconds
     delay(3); 
     
     app.keyboard().typeString("Rename Asset");
 
     //Wait for 3 seconds
     delay(3);      
     
     // Enter Reason in Asset Rename form
     window.popover().textViews()[0].tap();

     //Wait for 3 seconds
     delay(3); 
     
     app.keyboard().typeString("Asset is renamed from Original Name to Rename Asset");
     
     //Wait for 3 seconds
     delay(3);      
     
     // Tap on update button
     window.popover().buttons()["   Update"].tap();

     //Wait for 3 seconds
     delay(3); 
     
     // Enter Asset Rename Date = 1 week ago
     //window.popover().buttons()[1].tap();
     
     //var inputDate = calculateDate(-7).split(" ");
     
     //Wait for 3 seconds
     //delay(3);
     
     // elements number changes everytime. It may fail
     //window.elements()[49].pickers()[0].wheels()[0].selectValue(inputDate[0]);
     //window.elements()[49].pickers()[0].wheels()[1].selectValue(inputDate[1]);
     //window.elements()[49].pickers()[0].wheels()[2].selectValue(inputDate[2]);
     
     //window.elements()[49].toolbar().buttons()["Done"].tap();
     
     //Tap on Rename Asset button
     window.popover().buttons()["Rename Asset"].tap();
     
     //Wait for 3 seconds
     delay(3);        
     
     // Verify asset number = Original Name does not exist
     assertFalse(window.scrollViews()[0].tableViews()[0].cells()["Original Name - Original Asset Name"].staticTexts()["Original Name - Original Asset Name"].isVisible(), "Asset = Original Name should not be shown");
     
     //Wait for 3 seconds
     delay(3);     
     
     // Verify inactive asset showing again
     assertTrue(window.scrollViews()[0].tableViews()[0].cells()["Rename Asset - Original Asset Name"].staticTexts()["Rename Asset - Original Asset Name"].isVisible(), "Asset = Rename Asset should be appeared");
     
     //Wait for 3 seconds
     delay(3);     
        
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();    
     
     //Wait for 3 seconds
     delay(10);
     });		
	
	
	