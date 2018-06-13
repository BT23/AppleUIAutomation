//#import "../lib/tuneup.js"

test("Asset Register - Move Asset", function(target, app){

     checkIsMainMenu("Assets");

     // Create a new level 1 asset called inactive asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();     

     // Wait for 3 seconds
     delay(3);     

     createAsset("Move Asset", "Moving Asset");

     // Wait for 3 seconds
     delay(3);     
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();      
     
     // Wait for 3 seconds
     delay(3);
     
     // Tap on Actions
     navBar.buttons()["Actions"].tap();     

     // Wait for 3 seconds
     delay(3);
     
     // Tap on Move Asset button
     app.windows()[0].scrollViews()[3].buttons()["Move Asset"].tap();

     // Wait for 3 seconds
     delay(3);
     
     // Tap Yes to Move Asset message box
     app.alert().buttons()["Yes"].tap();

     // Wait for 10 seconds
     delay(10);

     // Select Asset = IT in Asset Selector
     scrollToCellWithNameAndTap(window.tableViews()[1], "IT - Information Technology");

     // Wait for 10 seconds
     delay(10);
     
     // Tap on Select button on Asset Selector
     window.navigationBars()["Asset Selector"].buttons()["Select"].tap();
                                                                              
     // Wait for 10 seconds
     delay(10);
     
     // Verify default values are populated on the following fields
     
     // New Asset Number = Child Asset
     assertEquals("Move Asset", window.popover().textFields()[1].value(), "New Asset Number = Move Asset");

     // Old Parent = Blank
     assertEquals("", window.popover().textFields()[2].value(), "Old Parent = Blank");       
     
     // New Parent = IT
     assertEquals("IT", window.popover().textFields()[3].value(), "New Parent = IT");

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

     // Wait for 3 seconds
     delay(3);
     
     // Tap on update button
     window.popover().buttons()["   Update"].tap();
     
     //Wait for 3 seconds
     delay(3); 
     
     // Enter Movement Date = 1 week ago
     //window.popover().buttons()[1].tap();
     
     //Wait for 3 seconds
     //delay(3);
     
     //var inputDate = calculateDate(-7).split(" ");
     
     //window.elements()[49].pickers()[0].wheels()[0].selectValue(inputDate[0]);
     //window.elements()[49].pickers()[0].wheels()[1].selectValue(inputDate[1]);
     //window.elements()[49].pickers()[0].wheels()[2].selectValue(inputDate[2]);
     
     //window.elements()[49].toolbar().buttons()["Done"].tap();

     //Wait for 3 seconds
     //delay(3);
     
     // Enter Reason in Asset Rename form
     window.popover().textViews()[0].tap();
     
     //Wait for 3 seconds
     delay(3); 
     
     app.keyboard().typeString("Move Asset under IT");
     
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
     //window.buttons()["Assets"].tap();     
     checkIsMainMenu("Assets");
     
     //Wait for 3 seconds
     delay(3);     
     
     // After reopening Asset Register, asset trees are collapsed. Only Level 1 assets are shown.
     
     // Verify asset number = Move Asset is shown
     assertFalse(window.scrollViews()[0].tableViews()[0].cells()["Move Asset - Moving Asset"].staticTexts()["Move Asset - Moving Asset"].isVisible(), "Asset = Move Asset should not be appeared");
     
     //Wait for 3 seconds
     delay(3);
     
     //scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "IT - Information Technology");
     selectAndTapAnAsset("IT - Information Technology");
     
     // Wait for 3 seconds
     delay(3);     
     
     // Expand asset tree by clicking on the arrow button
     window.scrollViews()[0].tableViews()[0].cells()["IT - Information Technology"].buttons()[0].tap();     
     
     // Wait for 3 seconds
     delay(3);
     
     // If asset can be scrolled and tapped on, it means asset is created successfully
     //scrollToCellWithNameAndTap(window.scrollViews()[0].tableViews()[0], "IT - Information Technology");
     selectAndTapAnAsset("Move Asset - Moving Asset");
     
     // Wait for 3 seconds
     delay(3);     
     
     // Verify asset number = Move Asset is shown
     assertTrue(window.scrollViews()[0].tableViews()[0].cells()["Move Asset - Moving Asset"].staticTexts()["Move Asset - Moving Asset"].isVisible(), "Asset = Move Asset should be appeared");   

     // Wait for 3 seconds
     delay(3);
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);     
     });		
	
	
	