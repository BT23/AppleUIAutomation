#import "../lib/tuneup.js"

test("Work Order Details - Details tab", function(target, app){
     //window.logElementTree();     
     
     checkIsMainMenu("Work Orders")
     
     // Tap on New button on WO Listing
     window.scrollViews()[1].buttons()[0].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Work Order Details Header --");
     
     // Wait for 3 seconds
     delay(3);
     
     createWorkOrder("Phone", "running wo details details tab test case", "this is wo instruction", "this is wo safety note");
     
     // WO Details - Rego No.
     window.textFields()[1].tap();

     // Wait for 3 seconds
     delay(3);
     
     // WO Details - Group WO No.
     window.buttons()[6].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();
     
     // Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- Work Order Details - Details tab --");     
     
     // WO Details - Details tab
     window.scrollViews()[0].toolbar().buttons()["Details"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Account Code = HSBC
     window.scrollViews()[1].buttons()[1].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[1].tap();     
     
     // Wait for 3 seconds
     delay(3);
     
     // Refernce No = BT123
     window.scrollViews()[1].textFields()[0].tap();
     app.keyboard().typeString("BT123\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Overall Duration (hrs) = 7.50
     window.scrollViews()[1].textFields()[1].tap();
     app.keyboard().typeString("7.50\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Status = 2 - Ready To Start
     window.scrollViews()[1].buttons()["0 - Entered"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[2].tap();      
 
     // Wait for 3 seconds
     delay(3);     
     
     // Priority = 3 - Within 7 Days
     window.scrollViews()[1].buttons()[17].tap();
 
     // Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[2].tap();       
     
     // Wait for 3 seconds
     delay(3);
     
     // Job Type = Break - Breakdown Maintenance
     window.scrollViews()[1].buttons()[23].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();        
     
     // Wait for 3 seconds
     delay(3);
     
     // Department = Finance Division
     window.scrollViews()[1].buttons()[29].tap();
     
     // Wait for 3 seconds
     delay(3);

     window.popover().scrollViews()[0].tableViews()[0].cells()[1].tap();        
     
     // Wait for 3 seconds
     delay(3);     
     
     // Requester = Mickey Mouse
     window.scrollViews()[1].textFields()[3].tap();
     app.keyboard().typeString("Mickey Mouse\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Progress % = 85.55
     window.scrollViews()[1].textFields()[7].tap();
     app.keyboard().typeString("85.55\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Raised Date = 1 day ago
     pickADate(3,-1);     
 
     // Wait for 3 seconds
     delay(3);     
     
     // Due Start = Tomorrow
     pickADate(7,1);    
     
     // Wait for 3 seconds
     delay(3);
     
     // Started = 2 days from today
     pickADate(13,2);  
     
     // Wait for 3 seconds
     delay(3);    
     
     // Due Finish = 7 days from today
     pickADate(19,7);          
     
     // Wait for 3 seconds
     delay(3);
     
     // Finished = 14 days from today
     pickADate(25,14);
     
     // Wait for 3 seconds
     delay(3);
     
     // Printed checkbox
     window.scrollViews()[1].buttons()[" Printed"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Group Work Order checkbox
     window.scrollViews()[1].buttons()[" Group Work Order"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Component Code
     window.scrollViews()[1].buttons()[33].tap();

     // Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();        
     
     // Wait for 3 seconds
     delay(3);
     
     // User Defined
     window.scrollViews()[1].textFields()[4].tap();
     
     // Wait for 3 seconds
     delay(3);
  
     app.keyboard().typeString("Mickey Mouse\n");     

     // Wait for 3 seconds
     delay(3);
     
     // Close back to Work Order Listing
     navBar.buttons()["Work Orders"].tap();

     //Wait for 3 seconds
     delay(3);  
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);
     });		
	
	
	