#import "../lib/tuneup.js"

test("Work Order Details Job Codes Tab", function(target, app){
     //window.logElementTree();     
     
     checkIsMainMenu("Work Orders");
     
     // Tap on New button on WO Listing
     window.scrollViews()[1].buttons()[0].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Work Order Details Header --");
     
     // Wait for 3 seconds
     delay(3);
     
     createWorkOrder("Phone", "running wo details job codes tab test case", "this is wo instruction", "this is wo safety note");
     
     // Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Work Order Details - Job Code tab --");          
     
     // Wait for 3 seconds
     delay(3);

     window.scrollViews()[0].toolbar().buttons()["Job Codes"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Tap on New button (Create a new Job Code line)
     window.scrollViews()[1].scrollViews()[1].buttons()["New"].tap();

     // Wait for 3 seconds
     delay(3);
     
     /*
      * Major Job Code - button number has to be buttons()[1] not 0. 
      * It is because red exclamation mark box is appeared after a new major job code line is created. 
      */
     window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].buttons()[1].tap();
     
     // Wait for 10 seconds
     delay(10);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();

     //Wait for 3 seconds
     delay(3);
     
     // Minor Job Code
     window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].buttons()[1].tap();
 
     // Wait for 10 seconds
     delay(10);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();     

     //Wait for 3 seconds
     delay(3);
     
     // Job Type
     window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].buttons()[2].tap();

     // Wait for 10 seconds
     delay(10);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();     

     //Wait for 3 seconds
     delay(3);     
     
     // Asset No.
     window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].buttons()[3].tap();

     // Wait for 10 seconds
     delay(10);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();     
     
     //Wait for 3 seconds
     delay(3);     
  
     // Account Code
     window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].buttons()[4].tap();
     
     // Wait for 10 seconds
     delay(10);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();     
     
     //Wait for 3 seconds
     delay(3);      

     // Contractor
     window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].buttons()[5].tap();
     
     // Wait for 10 seconds
     delay(10);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();     
     
     //Wait for 3 seconds
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
	
	
	