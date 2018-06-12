//#import "../lib/tuneup.js"

test("Asset Register Vehicle Information Tab", function(target, app){

     //window.logElementTree();

     checkIsMainMenu("Assets");  
     
     // Create a new level 1 asset
     window.scrollViews()[2].buttons()["New Level 1"].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Enter Asset No. and Description
     window.textFields()[0].tap();
     app.keyboard().typeString("Asset Vehicle");
     
     //Wait for 3 seconds
     delay(3);
     
     window.textFields()[1].tap();
     app.keyboard().typeString("Asset Vehicle Tab");
     
     //Wait for 3 seconds
     delay(3);
     
     // Tap Vehicle Information tab
     window.scrollViews()[0].toolbar().buttons()["Vehicle Information"].tap();
     
     //Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- Vehicle Details --");
     
     // Body
     window.scrollViews()[1].textFields()[2].tap();
     app.keyboard().typeString("hatch\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Year
     window.scrollViews()[1].textFields()[5].tap();
     app.keyboard().typeString("2015\n");
     
     //Wait for 3 seconds
     delay(3);
     
     //Seating Capacity
     window.scrollViews()[1].textFields()[6].tap();
     app.keyboard().typeString("5\n");
     
     //Wait for 3 seconds
     delay(3);
     
     //VIN Chassis
     window.scrollViews()[1].textFields()[9].tap();
     app.keyboard().typeString("vin123456789\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Engine No.
     window.scrollViews()[1].textFields()[12].tap();
     app.keyboard().typeString("engine123456789\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Engine Size
     window.scrollViews()[1].textFields()[14].tap();
     app.keyboard().typeString("7\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // No. of Cylinders
     window.scrollViews()[1].textFields()[16].tap();
     app.keyboard().typeString("16\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Transmission
     window.scrollViews()[1].textFields()[17].tap();
     app.keyboard().typeString("semi auto\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Key No.
     window.scrollViews()[1].textFields()[20].tap();
     app.keyboard().typeString("key123456789\n");
     
     //Wait for 3 seconds
     delay(3);
     
     // Radio No.
     window.scrollViews()[1].textFields()[23].tap();
     app.keyboard().typeString("radio12345678");

     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Driver --");
     
     // Driver
     window.scrollViews()[1].buttons()[3].tap();
     
     //Wait for 3 seconds
     delay(3);

     window.popover().scrollViews()[0].tableViews()[0].cells()[2].tap();
     
     
     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Fuel Details --");
     
     // Primary Fuel Type
     window.scrollViews()[1].buttons()[7].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Primary Tank Capacity
     window.scrollViews()[1].textFields()[29].tap();
     app.keyboard().typeString("500\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Primary Attracts Rebate?
     window.scrollViews()[1].buttons()[10].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Secondary Fuel Type
     window.scrollViews()[1].buttons()[12].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();

     // Wait for 3 seconds
     delay(3);
     
     // Secondary Tank Capacity
     window.scrollViews()[1].textFields()[30].tap();
     app.keyboard().typeString("600\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Secondary Attracts Rebate?    
     window.scrollViews()[1].buttons()[13].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Tank Units
     window.scrollViews()[1].buttons()[15].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[2].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Tyres --");
     
     // Tyre Size Steer
     window.scrollViews()[1].textFields()[3].tap();
     app.keyboard().typeString("597\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // No of:
     window.scrollViews()[1].textFields()[4].tap();
     app.keyboard().typeString("2\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Tyre Size Drive
     window.scrollViews()[1].textFields()[7].tap();
     app.keyboard().typeString("597\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // No of:
     window.scrollViews()[1].textFields()[8].tap();
     app.keyboard().typeString("2\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Wheel Base
     window.scrollViews()[1].textFields()[10].tap();
     app.keyboard().typeString("alloy\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Wheel Drive
     window.scrollViews()[1].textFields()[11].tap();
     app.keyboard().typeString("four wheel\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // No Of Axles
     window.scrollViews()[1].textFields()[13].tap();
     app.keyboard().typeString("4\n");
     
     // Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Weight/Dimensions --");
     
     // Tare Weight
     window.scrollViews()[1].textFields()[18].tap();
     app.keyboard().typeString("1600\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Height
     window.scrollViews()[1].textFields()[19].tap();
     app.keyboard().typeString("500");
     
     // Wait for 3 seconds
     delay(3);
     
     //window.scrollViews()[1].textFields()[26]￼
     
     // Gross Weight
     window.scrollViews()[1].textFields()[21].tap();
     app.keyboard().typeString("2600\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Width
     window.scrollViews()[1].textFields()[22].tap();
     app.keyboard().typeString("400\n");
     
     // Wait for 3 seconds
     delay(3);
     
     // Color
     window.scrollViews()[1].buttons()[1].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().scrollViews()[0].tableViews()[0].cells()[0].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     // Length
     window.scrollViews()[1].textFields()[24].tap();
     app.keyboard().typeString("600\n");
     
     // Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Machinery Inspection --"); 
     window.scrollViews()[1].buttons()[5].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     window.popover().toolbar().buttons()["Today"].tap();
    
     // Wait for 3 seconds
     delay(3);
     
     // Certificate No.
     window.scrollViews()[1].textFields()[28].tap();
     app.keyboard().typeString("cert1234567");

     // Wait for 3 seconds
     delay(3);
     
     // Next Due = next year
     window.scrollViews()[1].buttons()[9].tap();
     
     // Wait for 3 seconds
     delay(3);
     
     var inputDate = calculateDate(365).split(" ");
     
     //Wait for 3 seconds
     delay(3);
     
     window.popover().pickers()[0].wheels()[0].selectValue(inputDate[0]);
     window.popover().pickers()[0].wheels()[1].selectValue(inputDate[1]);
     window.popover().pickers()[0].wheels()[2].selectValue(inputDate[2]);
 
     // Wait for 3 seconds
     delay(3);     
     
     window.popover().toolbar().buttons()["Done"].tap();
     
     // Wait for 3 seconds
     delay(3);

     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();

     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();
     
     //Wait for 3 seconds
     delay(10);
     });		
	
	
	