//#import "../lib/tuneup.js"

test("Asset Register Rego/Warranty/Other Tab", function(target, app){

     //window.logElementTree();

     checkIsMainMenu("Assets");  
     
     // Create a new level 1 asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Enter Asset No. and Description
     window.textFields()[0].tap();
     app.keyboard().typeString("Asset Rego");
     
     //Wait for 3 seconds
     delay(3);
     
     window.textFields()[1].tap();
     app.keyboard().typeString("Asset Rego Tab");
    
     //Wait for 3 seconds
     delay(3);
     
     // Tap Financial tab
     window.scrollViews()[0].toolbar().buttons()["Rego/Warranty/Other"].tap();
     
     //Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- Registration --");
     
     // Rego No. = 123 ABC
     window.scrollViews()[1].textFields()[2].tap();
     app.keyboard().typeString("123 ABC\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Inspect Date = next month
     window.scrollViews()[1].buttons()[5].tap();
     
     var inputDate = calculateDate(30).split(" ");
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
     
     window.popover().toolbar().buttons()["Done"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     // Cost = $695.95
     window.scrollViews()[1].textFields()[6].tap();
     app.keyboard().typeString("695.95\n");
    
     //Wait for 3 seconds
     delay(3);
                               
     // License Code = lic123456789
     window.scrollViews()[1].textFields()[7].tap();
     app.keyboard().typeString("lic123456789\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // State/Territory = QLD                               
     window.scrollViews()[1].textFields()[3].tap();
     app.keyboard().typeString("QLD\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Due Date = 23 days                          
     window.scrollViews()[1].buttons()[7].tap();

     var inputDate = calculateDate(23).split(" ");
     
     //Wait for 3 seconds
     delay(3);

     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
                               
     window.popover().toolbar().buttons()["Done"].tap();
                               
     //Wait for 3 seconds
     delay(3);
 
     UIALogger.logMessage("-- Warranty --");
                               
     // Warranty Start Date = Last Week
     window.scrollViews()[1].buttons()[1].tap();
     
     var inputDate = calculateDate(-7).split(" ");
                               
     //Wait for 3 seconds
     delay(3);
                               
     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
                               
     window.popover().toolbar().buttons()["Done"].tap();
                               
     //Wait for 3 seconds
     delay(3);
     
     // Warranty Finish = Next Week
     window.scrollViews()[1].buttons()[3].tap();

     var inputDate = calculateDate(7).split(" ");
                               
     //Wait for 3 seconds
     delay(3);
                               
     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
                               
     window.popover().toolbar().buttons()["Done"].tap();

     //Wait for 3 seconds
     delay(3);
     
     // Warranty = 24
     window.scrollViews()[1].textFields()[4].tap();
     app.keyboard().typeString("24\n");

     //Wait for 3 seconds
     delay(3);
     
     // Warranty Or = 6 months
     window.scrollViews()[1].textFields()[5].tap();
     app.keyboard().typeString("6\n");
     
     //Wait for 3 seconds
     delay(3);     
     
     // Warranty Supplier = Ah Fai
     window.scrollViews()[1].buttons()[9].tap();
     window.popover().scrollViews()[0].tableViews()[0].cells()[1].tap();

     //Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- Other --");     
     
     // Financial Asset No. = fan123456789
     window.scrollViews()[1].textFields()[9].tap();
     app.keyboard().typeString("fan123456789\n");

     // Security No. = sec123456789
     window.scrollViews()[1].textFields()[10].tap();
     app.keyboard().typeString("sec123456789\n");     
     
     //Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- Insurance Details --");  

     // Insurance Value = insure123456789
     window.scrollViews()[1].textFields()[13].tap();
     app.keyboard().typeString("insure123456789\n");      
     
     //Wait for 3 seconds
     delay(3);
     
     // Renewal = Nex Year
     window.scrollViews()[1].buttons()[11].tap();
     
     var inputDate = calculateDate(365).split(" ");
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
     
     window.popover().toolbar().buttons()["Done"].tap();     

     //Wait for 3 seconds
     delay(3);

     // Company = 
     window.scrollViews()[1].buttons()[14].tap();
     window.popover().scrollViews()[0].tableViews()[0].cells()[2].tap();

     //Wait for 3 seconds
     delay(3);     
     
     // Policy No. = pol1234566789
     window.scrollViews()[1].textFields()[15].tap();
     app.keyboard().typeString("pol123456789\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Premium = $108.95
     window.scrollViews()[1].textFields()[16].tap();
     app.keyboard().typeString("108.95\n");
     
     //Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- FBT --");
     
     // Private Use
     window.scrollViews()[1].buttons()[" Private Use"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     // FBT Rate = $120.88
     window.scrollViews()[1].textFields()[14].tap();
     app.keyboard().typeString("120.88\n");

     // Wait for 3 seconds
     delay(3);

     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();

     // Wait for 3 seconds
     delay(3)
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);
     });		
	
	
	