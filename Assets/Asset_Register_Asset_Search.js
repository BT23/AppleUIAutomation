//#import "../lib/tuneup.js"

test("Asset Register - Asset Search", function(target, app){

     checkIsMainMenu("Assets");
     
     // Click Search button
     window.scrollViews()[2].buttons()["Search"].tap();

    window.logElementTree();
     
     // Wait for 3 seconds
     delay(3);

     // Tap on Search field on Asset Selector
     window.searchBars()[0].tap();
     
     //Wait for 3 seconds
     delay(3);    
     
     // Enter Search keyword = ford
     app.keyboard().typeString("ford");

     //Wait for 3 seconds
     delay(3);    
     
     // Tap on Search button
     app.keyboard().buttons()["Search"].tap();

     //Wait for 3 seconds
     delay(3);        
     
     // Tap on Asset = Fiesta
     window.scrollViews()[4].tableViews()[0].cells()[1,4].tap();

     //Wait for 3 seconds
     delay(3);        
     
     // Tap on Select button on Asset Selector
     window.navigationBars()["Asset Selector"].buttons()["Select"].tap();
     
     //Wait for 3 seconds
     delay(3);     
     
     // Close back to Asset Register
     //navBar.buttons()["Assets"].tap();
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);
     });		
	
	
	