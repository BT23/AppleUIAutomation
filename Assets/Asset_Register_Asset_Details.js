//#import "../lib/tuneup.js"

test("Asset Register Asset Details Tab", function(target, app){

     //window.logElementTree();

     checkIsMainMenu("Assets");
     
     // Create a new level 1 asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();

     // Wait for 3 seconds
     delay(3);

     // Enter Asset No. and Description
     var assetNoField = window.textFields()[0];
     assetNoField.tap();
     app.keyboard().typeString("Asset Register Details");

     //Wait for 3 seconds
     delay(3);
     
     var assetDescription = window.textFields()[1];
     assetDescription.tap();
     app.keyboard().typeString("Asset Register Details");

     //Wait for 3 seconds
     delay(3);
     
     // Enter Account Code
     window.scrollViews()[1].buttons()[2].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     // Select Account Code = HSBC
     window.popover().scrollViews()[0].tableViews()[0].cells()[1].tap();

     //Wait for 3 seconds
     delay(3);

     // Enter Asset Type = CARS
     //window.scrollViews()[1].buttons()[4].tap();
     
     //Wait for 3 seconds
     //delay(3);
     
     //window.popover().scrollViews()[0].tableViews()[0].cells()[2].tap();

     //Wait for 3 seconds
     delay(3);

     // Enter Manufacturer = FORD
     window.scrollViews()[1].buttons()[6].tap();
     
     //Wait for 3 seconds
     delay(3);     
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[1].tap();

     //Wait for 3 seconds
     delay(3);

     // Enter Model Number = Fiesta
     window.scrollViews()[1].buttons()[8].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();

     //Wait for 3 seconds
     delay(3);

     // Enter Department = AD
     window.scrollViews()[1].buttons()[10].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();

     //Wait for 3 seconds
     delay(3);

     // Enter Customer = BTC
     window.scrollViews()[1].buttons()[12].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();; 
     
	 //Wait for 3 seconds
     delay(3);	 

     // Enter Asset Status = In Use
     window.scrollViews()[1].buttons()[18].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[1].tap();

     //Wait for 3 seconds
     delay(3);
   
     // Enter Asset Comments
     var assetComments = window.scrollViews()[1].textViews()[1];
     assetComments.tap();
     app.keyboard().typeString("Release Test - Comments");

     //Wait for 3 seconds
     delay(3);

     // Take a photo and upload it
     window.scrollViews()[1].buttons()[22].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     // Tap on 'Take Photo or Video' button
     app.alert().buttons()["Take Photo or Video"].tap();

     //Wait for 3 seconds
     delay(3);
     
     var b = window.popover().buttons()["PhotoCapture"];
     var x = b.rect().origin.x + 1;
     var y = b.rect().origin.y + 1;
     target.tap({x:x, y:y})
     
     window.popover().buttons()["Use Photo"].tap();

     //Wait for 3 seconds
     delay(3);

     hideTheKeyboard();

     //Wait for 3 seconds
     delay(3);    
     
     UIALogger.logMessage("-- Go to Extended tab --");
	 
     // Tap Extended tab
     window.scrollViews()[0].toolbar().buttons()["Extended"].tap();
     
	 //Wait for 3 seconds
     delay(3);
	 
     // Enter Serial Number
     window.scrollViews()[1].textFields()[2].tap();
     app.keyboard().typeString("sn123456789");

     //Wait for 3 seconds
     delay(3);
	 
	 UIALogger.logMessage("-- Go to Financial tab --");
	 
     // Tap Financial tab
     window.scrollViews()[0].toolbar().buttons()["Financial"].tap();	

     //Wait for 3 seconds
     delay(3);	 
	 
     // Purchase Date = 1 year ago
     pickADate(1, -365);
     
     //Wait for 3 seconds
     delay(3);
	 
     // Purchase Cost
     window.scrollViews()[1].textFields()[4].tap();
     app.keyboard().typeString("1234.56\n");
     
     //Wait for 3 seconds
     delay(3);	 
	 
	 //Financial tab - Supplier = Bryan Byrt
     window.scrollViews()[1].buttons()[3].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();

     //Wait for 3 seconds
     delay(3);

	 UIALogger.logMessage("-- Go to Rego/Warranty/Other tab --");	 
	 
     // Tap Rego/Warranty/Other tab
     window.scrollViews()[0].toolbar().buttons()["Rego/Warranty/Other"].tap();

     //Wait for 3 seconds
     delay(3);
     
     // Warranty Start Date = Last Week
     pickADate(1, -7);
     
     //Wait for 3 seconds
     delay(3);
     
     // Warranty Finish = Next Week
     pickADate(3, 7);

     //Wait for 3 seconds
     delay(10);
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();

     //Wait for 3 seconds
     delay(3);
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);
     });		
	
	
	