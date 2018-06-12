//#import "../lib/tuneup.js"

test("Asset Register Financial Tab", function(target, app){

     //window.logElementTree();

     checkIsMainMenu("Assets");
     
     // Create a new level 1 asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Enter Asset No. and Description
     window.textFields()[0].tap();
     app.keyboard().typeString("Asset Financial");
     
     //Wait for 3 seconds
     delay(3);
     
     window.textFields()[1].tap();
     app.keyboard().typeString("Asset Financial Tab");
     
     //Wait for 3 seconds
     delay(3);
     
     // Tap Financial tab
     window.scrollViews()[0].toolbar().buttons()["Financial"].tap();
     
     //Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- Purchase Details --");
     
     // Purchase Date = 1 year ago
     window.scrollViews()[1].buttons()[1].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     var inputDate = calculateDate(-365).split(" ");
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
     
     window.popover().toolbar().buttons()["Done"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     // Purchase Cost
     window.scrollViews()[1].textFields()[4].tap();
     app.keyboard().typeString("1234.56\n");
     
     //Wait for 3 seconds
     delay(3);
     
     //Order Number
     window.scrollViews()[1].textFields()[7].tap();
     app.keyboard().typeString("ord123456789\n");
     
     //Wait for 3 seconds
     delay(3);
     
     //Supplier = Google
     window.scrollViews()[1].buttons()[3].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[1].tap();

     //Wait for 3 seconds
     delay(3);
     
     // Initial KMs
     window.scrollViews()[1].textFields()[10].tap();
     app.keyboard().typeString("4567\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Date Received = next day of purchased date
     
     window.scrollViews()[1].buttons()[7].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     var inputDate = calculateDate(-364).split(" ");
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
     
     window.popover().toolbar().buttons()["Done"].tap();     

     //Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- Value --");
     // Market Value
     window.scrollViews()[1].textFields()[14].tap();
     app.keyboard().typeString("25600\n");

     // Replacement Value
     window.scrollViews()[1].textFields()[15].tap();
     app.keyboard().typeString("12500\n");
     
     // Change Over Value
     //assertTrue(window.scrollViews()[1].textFields()[16].isEnabled(), "Change Over Value textfield should be read only");
     
     //var changeOverValue = window.scrollViews()[1].textFields()[16].value();
     //assertNull(currentValue, "It is is not null");
     
     
     // Last Evaluation Date = last month
     window.scrollViews()[1].buttons()[13].tap();     

     //Wait for 3 seconds
     delay(3);
     
     var inputDate = calculateDate(-30).split(" ");
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
     
     window.popover().toolbar().buttons()["Done"].tap();  
     
     //Wait for 3 seconds
     delay(3);
     
     // Next Evaluation Date = next year
     window.scrollViews()[1].buttons()[15].tap();     
     
     //Wait for 3 seconds
     delay(3);
     
     var inputDate = calculateDate(365).split(" ");
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
     
     window.popover().toolbar().buttons()["Done"].tap();    
     
     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Account Information --");
     
     // Expected Life
     window.scrollViews()[1].textFields()[2].tap();
     app.keyboard().typeString("5\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Expected Life Or Hours
     window.scrollViews()[1].textFields()[3].tap();
     app.keyboard().typeString("8\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Salvage Value
     window.scrollViews()[1].textFields()[5].tap();
     app.keyboard().typeString("1000\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Appreciation
     window.scrollViews()[1].textFields()[6].tap();
     app.keyboard().typeString("1\n");

     //Wait for 3 seconds
     delay(3);
     
     // Depreciation Years
     window.scrollViews()[1].textFields()[8].tap();
     app.keyboard().typeString("7\n");
 

     //Wait for 3 seconds
     delay(3);
     
     // Current Value
     assertTrue(window.scrollViews()[1].textFields()[9].isEnabled(), "Current Value textfield should be read only");
     
     var currentValue = window.textFields()[9].value();
     assertNull(currentValue, "It is is not null");
     
     //Wait for 3 seconds
     delay(3);
     
     // Depreciation Type
     window.scrollViews()[1].buttons()[5].tap();

     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[1].tap();
	 
     UIALogger.logMessage("-- Selling Information --");
     
     // Date Sold = next week
     window.scrollViews()[1].buttons()[9].tap();
     
     var inputDate = calculateDate(7).split(" ");
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
     
     window.popover().toolbar().buttons()["Done"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     // Actual Resale Value
     window.scrollViews()[1].textFields()[13].tap();
     app.keyboard().typeString("22000\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Replaced Vehicle
     window.scrollViews()[1].buttons()[11].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[5].tap();
     
     
     // Wait for 3 seconds
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
	
	
	