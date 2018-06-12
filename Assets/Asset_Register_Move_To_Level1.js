//#import "../lib/tuneup.js"

test("Asset Register - Move To Level 1", function(target, app){

     checkIsMainMenu("Assets");

     // Create a new level 1 asset called inactive asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();     

     // Wait for 3 seconds
     delay(3);     

     createAsset("Parent Asset", "Parent Asset");

     // Wait for 3 seconds
     delay(3);     
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();      
 
     // Wait for 3 seconds
     delay(3);

     // Create a new child asset
     window.scrollViews()[2].buttons()["New Child"].tap();     
  
     // Wait for 3 seconds
     delay(3);     
     
     createAsset("Child Asset", "Child Asset");
     
     //Wait for 3 seconds
     delay(3);       
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Tap on Actions
     navBar.buttons()["Actions"].tap();     

     // Wait for 3 seconds
     delay(3);
     
     // Tap on Move To Level 1 button
     app.windows()[0].scrollViews()[3].buttons()["Move To Level 1"].tap();

     // Wait for 3 seconds
     delay(3);
     
     // Tap Yes to Move Asset Level 1 message box
     app.alert().buttons()["Yes"].tap();

     // Wait for 10 seconds
     delay(10);
     
     // Verify default values are populated on the following fields
     
     // New Asset Number = Child Asset
     assertEquals("Child Asset", window.popover().textFields()[1].value(), "New Asset Number = Child Asset");
     
     // Old Parent = Parent Asset
     assertEquals("Parent Asset", window.popover().textFields()[2].value(), "Old Parent = Parent Asset");
     
     // New Parent = Blank
     assertEquals("", window.popover().textFields()[3].value(), "New Parent = Blank");     

     // Movement Date = Today 
     assertEquals(calculateDateForVerification(0, "longDate"), window.popover().buttons()[1].label(), "Movement Date = Today");
     
     // Reason = Asset Movement.
     assertEquals("Asset Movement.", window.popover().textViews()[0].value(), "Reason = Asset Movement.");

     // Verify the following fields are Read Only
     
     // New Asset Number is Read Only field
     assertFalse(window.popover().textFields()[1].isEnabled(), "New Asset Number field should be Read Only");
     
     // Old Parent is Read Only field
     assertFalse(window.popover().textFields()[2].isEnabled(), "Old Parent field should be Read Only");
     
     // New Parent is Read Only field
     assertFalse(window.popover().textFields()[3].isEnabled(), "New Parent field should be Read Only");       
     
     //Tap on Cancel button
     window.popover().buttons()["Cancel"].tap();

     // Wait for 3 seconds
     delay(3);
     
     // Tap on Move To Level 1 button
     app.windows()[0].scrollViews()[3].buttons()["Move To Level 1"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Tap Yes to Move Asset Level 1 message box
     app.alert().buttons()["Yes"].tap();

     //Wait for 3 seconds
     delay(3);      
     
     // Tap on update button
     window.popover().buttons()["   Update"].tap();
     
     //Wait for 3 seconds
     delay(3); 
     
     // Enter Movement Date = 1 week ago
     window.popover().buttons()[1].tap();
  
     //Wait for 3 seconds
     delay(3);
     
     var inputDate = calculateDate(-7).split(" ");
     
     //Wait for 3 seconds
     delay(3);
     
     window.elements()[49].pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.elements()[49].pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.elements()[49].pickers()[0].wheels()[2].selectValue(inputDate[2]);
     
     window.elements()[49].toolbar().buttons()["Done"].tap();

     //Wait for 3 seconds
     delay(3);
     
     // Enter Reason in Asset Rename form
     window.popover().textViews()[0].tap();
     
     //Wait for 3 seconds
     delay(3); 
     
     app.keyboard().typeString("Move Child Asset to Level 1");
     
     //Wait for 3 seconds
     delay(3);      
 
     //Tap on Cancel button
     window.popover().buttons()["Move Asset"].tap();    
 
     //Wait for 3 seconds
     delay(3);      
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();    
     
     //Wait for 3 seconds
     delay(3);
     
     // Reopen Asset Register
     window.buttons()["Assets"].tap();     

     //Wait for 3 seconds
     delay(3);     
     
     // After reopening Asset Register, asset trees are collapsed. Only Level 1 assets are shown.
     
     // Verify asset number = Parent Asset is shown
     assertTrue(window.scrollViews()[0].tableViews()[0].cells()["Parent Asset - Parent Asset"].isVisible(), "Asset = Parent Asset should be shown");
     
     //Wait for 3 seconds
     delay(3);     
     
     // Verify asset number = Child Asset is shown
     assertTrue(window.scrollViews()[0].tableViews()[0].cells()["Child Asset - Child Asset"].isVisible(), "Asset = Child Asset should be appeared")     
     
     //Wait for 3 seconds
     delay(3);     
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);
     });		
	
	
	