//#import "../lib/tuneup.js"

test("Asset Register Document Tab", function(target, app){

     //window.logElementTree();

     checkIsMainMenu("Assets");
     
     // Create a new level 1 asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Enter Asset No. and Description
     window.textFields()[0].tap();
     app.keyboard().typeString("Asset Documents");
     
     //Wait for 3 seconds
     delay(3);
     
     window.textFields()[1].tap();
     app.keyboard().typeString("Asset Documents Tab");
     
     //Wait for 3 seconds
     delay(3);
     
     // Tap Documents tab
     window.scrollViews()[0].toolbar().buttons()["Documents"].tap();
     
     //Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- Upload Photo --");
     
     // Add a new Document
     window.scrollViews()[1].scrollViews()[1].buttons()["New"].tap();
     
     // Enter Document Location
     window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].textFields()[0].tap();
     app.keyboard().typeString("http://www.mex.com.au");
     
     //Wait for 3 seconds
     delay(3);
     
     // Enter Comment
     window.scrollViews()[1].scrollViews()[0].tableViews()[0].cells()[0].textFields()[1].tap();
     app.keyboard().typeString("MEX Website\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Upload Photo
     window.scrollViews()[1].scrollViews()[1].buttons()["Upload Photo"].tap();

     //Wait for 3 seconds
     delay(3);
     
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
 
     // Click Actions hyperlink
     window.scrollViews()[1].toolbar().buttons()["Actions"].tap();
     
     //Wait for 3 seconds
     delay(3);     
     
     // Open the first document
     window.scrollViews()[1].scrollViews()[2].buttons()["OpenDoc"].tap();
     
     //Wait for 10 seconds
     delay(10);
     
     // Close Document Viewer
    window.popover().toolbar().buttons()["Back"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
    // Delete the first document
     window.scrollViews()[1].scrollViews()[2].buttons()["Delete"].tap();

     //Wait for 3 seconds
     delay(3);
     
     // Tap on No to the message box
     // Alert is handled by myself (onAlert function in MEXFunctions.js) not using the default one
     app.alert().buttons()["No"].tap();


     //Wait for 3 seconds
     delay(3);
     
     // Delete the first document again
     window.scrollViews()[1].scrollViews()[2].buttons()["Delete"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     // Tap on Yes to the message box
     // Alert is handled by myself (onAlert function in MEXFunctions.js) not using the default one
     app.alert().buttons()["Yes"].tap();

     //Wait for 3 seconds
     delay(3);

     // Click Cancel hyperlink
     window.scrollViews()[1].toolbar().buttons()["Cancel"].tap();

     //Wait for 3 seconds
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
	
	
	