#import "../lib/tuneup.js"

test("Verify Work Order Details - Job Codes", function(target, app){
     //window.logElementTree();     
     
     checkIsMainMenu("Work Orders")
     
     // Tap on the work order
     window.scrollViews()[0].tableViews()[0].cells()[9].tap();
     
     //Wait for 3 seconds
     delay(3);       
     
     UIALogger.logMessage("-- Work Order Details - Job Code tab --");          
     
     // Wait for 3 seconds
     delay(3);
     
     window.scrollViews()[0].toolbar().buttons()["Job Codes"].tap();
     
     // Wait for 3 seconds
     delay(3);     
     
     // Major Job Code
     assertEquals("01", window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].buttons()[0].label(), "Expected: Major Job Code = 01");
     
     //Wait for 3 seconds
     delay(3); 
     
     // Minor Job Code
     assertEquals("001", window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].buttons()[1].label(), "Expected: Minor Job Code = 001");

     //Wait for 3 seconds
     delay(3);      

     // Description
     assertEquals("AIR CONDITION, HEAT - ADD REFRIGERANT", window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].textViews()[0].value(), "Expected: Description = AIR CONDITION, HEAT - ADD REFRIGERANT");
     
     
     //Wait for 3 seconds
     delay(3);      
     
     // Job Type
     assertEquals("Break", window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].buttons()[2].label(), "Expected: Job Type = Break");

     //Wait for 3 seconds
     delay(3);      
     
     // Asset No.
     assertEquals("Phone", window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].buttons()[3].label(), "Expected: Asset No. = Phone");
     
     //Wait for 3 seconds
     delay(3);    
     
     // Account Code
     assertEquals("Commonwealth", window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].buttons()[4].label(), "Expected: Account Code = Commonwealth");     

     //Wait for 3 seconds
     delay(3);
     
     // Contractor
     assertEquals("Bryan Byrt Bryan Byrt Automotive Group", window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].buttons()[5].label(), "Expected: Contractor = Bryan Byrt");     

     //Wait for 3 seconds
     delay(3);

     // Close back to Work Order Listing
     navBar.buttons()["Work Orders"].tap();
     
     // Wait for 3 seconds
     delay(3);     
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);
     });		
	
	
	