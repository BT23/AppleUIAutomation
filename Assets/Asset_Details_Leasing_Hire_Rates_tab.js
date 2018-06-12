//#import "../lib/tuneup.js"

test("Asset Register Leasing Hire Rates Tab", function(target, app){

     //window.logElementTree();

     checkIsMainMenu("Assets");  
     
     // Create a new level 1 asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Enter Asset No. and Description
     window.textFields()[0].tap();
     app.keyboard().typeString("Asset Leasing");
     
     //Wait for 3 seconds
     delay(3);
     
     window.textFields()[1].tap();
     app.keyboard().typeString("Asset Leasing Tab");
     
     //Wait for 3 seconds
     delay(3);
     
     // Tap Leasing/Hire Rates tab
     window.scrollViews()[0].toolbar().buttons()["Leasing/Hire Rates"].tap();
     
     //Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- Lease Information --");
     
     
     // Check the following fields have 0.00 populated
     
     // Residual Value
     assertEquals("$0.00", window.scrollViews()[1].textFields()[5].value(), "Expected: Residual Value = $0.00"); 
     
     // No. of Payments
      assertEquals("0", window.scrollViews()[1].textFields()[3].value(), "Expected: No. of Payments = 0.00");     
     
     // Total of Lease Payments
     assertEquals("$0.00", window.scrollViews()[1].textFields()[4].value(), "Expected: Repayment Amount = $0.00"); 
     
     // Total of Lease Payments
     assertEquals("$0.00", window.scrollViews()[1].textFields()[6].value(), "Expected: Total of Lease Payment = $0.00");     
     
     // Leased
     window.scrollViews()[1].buttons()[" Leased"].tap();
                                                        
     
     //Wait for 3 seconds
     delay(3);
     
     // Finance Company
     window.scrollViews()[1].buttons()[2].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[3].tap();     
     
     //Wait for 3 seconds
     delay(3);     
     
     // Lease Commenced = 3 days later from Today
     window.scrollViews()[1].buttons()[4].tap();
     
     var inputDate = calculateDate(3).split(" ");
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
     
     window.popover().toolbar().buttons()["Done"].tap();
     
     //Wait for 3 seconds
     delay(3);
    
     // Lease Finished = next month
     window.scrollViews()[1].buttons()[6].tap();

     var inputDate = calculateDate(33).split(" ");
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
     
     window.popover().toolbar().buttons()["Done"].tap();
     
     //Wait for 3 seconds
     delay(3);
    
     // Residual Value
     window.scrollViews()[1].textFields()[5].tap();
     app.keyboard().typeString("320000\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Payment Date of Month
     window.scrollViews()[1].textFields()[2].tap();
     app.keyboard().typeString("15\n");
     
     //Wait for 3 seconds
     delay(3);
     
     //Number of Payment
     window.scrollViews()[1].textFields()[3].tap();
     app.keyboard().typeString("108\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Repayment Amount
     window.scrollViews()[1].textFields()[4].tap();
     app.keyboard().typeString("800\n");

     //Wait for 3 seconds
     delay(3);

     // Total of Lease Payments
     window.scrollViews()[1].textFields()[6].tap();
     
          
     //Wait for 3 seconds
     delay(3);

     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();

     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);
     });		
	
	
	