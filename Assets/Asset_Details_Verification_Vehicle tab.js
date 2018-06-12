//#import "../lib/tuneup.js"

test("Verify Asset Details - Vehicle tab", function(target,app){
     
     checkIsMainMenu("Assets");

     UIALogger.logMessage("-- Click Details button to open Asset Details --");
     
     //Wait for 3 seconds
     delay(3); 
     
     // Select Asset = Asset Vehicle - Asset Vehicle Information Tab
     window.scrollViews()[0].tableViews()[0].cells()["Asset Vehicle - Asset Vehicle Tab"].tap();

     //Wait for 3 seconds
     delay(3);     
     
     // Open Asset Details using Details button
     window.scrollViews()[2].buttons()["Details"].tap();
     
     // Wait for Asset Details form opened
     waitVisible(navBar.staticTexts()["Asset Details"]);
     
     // Tap Vehicle Information tab
     window.scrollViews()[0].toolbar().buttons()["Vehicle Information"].tap();
     
     
     // Verify the following fields are not blank (i.e values can be saved into database)

     // Asset No. and Description
     var assetNoFieldValue = window.textFields()[0].value();
     assertEquals("Asset Vehicle", assetNoFieldValue, "Expected: Asset No. = Asset Vehicle");
     
     var assetDescriptionValue = window.textFields()[1].value();
     assertEquals("Asset Vehicle Tab", assetDescriptionValue, "Expected: Asset Description = Asset Vehicle Tab");

     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Vehicle Details --");
     
     // Body 
     var bodyValue = window.scrollViews()[1].textFields()[2].value();
     assertEquals("hatch", bodyValue, "Expected: Body = hatch");

     //Wait for 3 seconds
     delay(3);
     
     // Year
     var yearValue = window.scrollViews()[1].textFields()[5].value();
     assertEquals("2015", yearValue, "Expected: Year = 2015");
     
     //Wait for 3 seconds
     delay(3);
     
     // Seating Capacity
     var seatingCapacityValue = window.scrollViews()[1].textFields()[6].value();
     assertEquals("5", seatingCapacityValue, "Expected: Seating Capacity = 5");
     
     //Wait for 3 seconds
     delay(3);
     
     // VIN Chassis
     var vinChassisValue = window.scrollViews()[1].textFields()[9].value();
     assertEquals("vin123456789", vinChassisValue, "Expected: VIN Chassis = vin123456789");

     //Wait for 3 seconds
     delay(3);
     
     // Engine No
     var engineNoValue = window.scrollViews()[1].textFields()[12].value();
     assertEquals("engine123456789", engineNoValue, "Expected: Engine No = engine123456789");
     
     //Wait for 3 seconds
     delay(3);
     
     // Engine Size
     var engineSizeValue = window.scrollViews()[1].textFields()[14].value();
     assertEquals("7", engineSizeValue, "Expected: Engine Size = 7");

     //Wait for 3 seconds
     delay(3);
     
     // No. of Cylinders
     var noOfCylindersValue = window.scrollViews()[1].textFields()[16].value();
     assertEquals("16", noOfCylindersValue, "Expected: No. of Cylinders = 16");
     
     //Wait for 3 seconds
     delay(3);
     
     // Transmission
     var transmissionValue = window.scrollViews()[1].textFields()[17].value();
     assertEquals("semi auto", transmissionValue, "Expected: Transmission = semi auto");
     
     //Wait for 3 seconds
     delay(3);
     
     // Key No.
     var keyNoValue = window.scrollViews()[1].textFields()[20].value();
     assertEquals("key123456789", keyNoValue, "Expected: Key No. = key123456789");   

     //Wait for 3 seconds
     delay(3);
     
     // Radio No.
     var radioNoValue = window.scrollViews()[1].textFields()[23].value();
     assertEquals("radio12345678", radioNoValue, "Expected: Radio No. = radio12345678");  
     
     //Wait for 3 seconds
     delay(3);
  
     UIALogger.logMessage("-- Driver --");
     
     var driverValue = window.scrollViews()[1].buttons()[3].label();
     assertEquals("Ali SAGIRKAYA", driverValue, "Expected: Driver = Ali SAGIRKAYA");   
     
     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Fuel Details --");
     
     var primaryFuelTypeValue = window.scrollViews()[1].buttons()[7].label();
     assertEquals("Diesel", primaryFuelTypeValue, "Expected: Primary Fuel Type = Diesel");
     
     //Wait for 3 seconds
     delay(3);
     
     //UIALogger.logMessage("-- Primary Tank Capacity --");
     var primaryTankCapacityValue = window.scrollViews()[1].textFields()[29].value();
     assertEquals("500.00", primaryTankCapacityValue, "Expected: Primary Tank Capacity = 500.00");    
    
     //Wait for 3 seconds
     delay(3);
     
     //UIALogger.logMessage("-- Primary Attracts Rebate --");
     
     assertTrue(window.scrollViews()[1].buttons()[10].isSelected(), "Primary Attracts Rebate checkbox should be ticked");

     //Wait for 3 seconds
     delay(3);
                    UIALogger.logMessage("-- Secondary Fuel Type --");
     var secondaryFuelTypeValue = window.scrollViews()[1].buttons()[12].label();
     assertEquals("Diesel", secondaryFuelTypeValue, "Expected: Secondary Fuel Type = Diesel");
     
     //Wait for 3 seconds
     delay(3);
     
     //UIALogger.logMessage("-- Secondary Tank Capacity --");
     
     var secondaryTankCapacityValue = window.scrollViews()[1].textFields()[30].value();
     assertEquals("600.00", secondaryTankCapacityValue, "Expected: Secondary Tank Capacity = 600.00");      
     
     //Wait for 3 seconds
     delay(3);
     
     assertTrue(window.scrollViews()[1].buttons()[13].isSelected(), "Secondary Attracts Rebate checkbox should be ticked");
     
     //Wait for 3 seconds
     delay(3);
     
     var tankUnitValue = window.scrollViews()[1].buttons()[15].label();
     assertEquals("Litres", tankUnitValue, "Expected: Tank Units = Litres");     
     
     //Wait for 3 seconds
     delay(3);
 
     UIALogger.logMessage("-- Tyres --");
     
     var tyreSizeSteerValue = window.scrollViews()[1].textFields()[3].value();
     assertEquals("597", tyreSizeSteerValue, "Expected: Tyre Size Steer = 597");         
     
     //Wait for 3 seconds
     delay(3);
     
     var noOfSteerValue = window.scrollViews()[1].textFields()[4].value();
     assertEquals("2", noOfSteerValue, "Expected: No of Tyre Size Steer = 2");       
 
     //Wait for 3 seconds
     delay(3);
     
     var tyreSizeDriveValue = window.scrollViews()[1].textFields()[7].value();
     assertEquals("597", tyreSizeDriveValue, "Expected: Tyre Size Drive = 597");
     
     //Wait for 3 seconds
     delay(3);
     
     var noOfTyreSizeDriveValue = window.scrollViews()[1].textFields()[8].value();
     assertEquals("2", noOfTyreSizeDriveValue, "Expected: Tyre Size Drive = 2");    
     
     //Wait for 3 seconds
     delay(3);
     
     var wheelBaseValue = window.scrollViews()[1].textFields()[10].value();
     assertEquals("alloy", wheelBaseValue, "Expected: Wheel Base = alloy");    
     
     //Wait for 3 seconds
     delay(3);
     
     var wheelDriveValue = window.scrollViews()[1].textFields()[11].value();
     assertEquals("four wheel", wheelDriveValue, "Expected: Wheel Drive = four wheel");
 
     //Wait for 3 seconds
     delay(3);
     
     var noOfAxlesValue = window.scrollViews()[1].textFields()[13].value();
     assertEquals("4", noOfAxlesValue, "Expected: No. of Axles = 4");     
     
     //Wait for 3 seconds
     delay(3);     
     
     UIALogger.logMessage("-- Weight/Dimensions --");    

     var tareWeightValue = window.scrollViews()[1].textFields()[18].value();
     assertEquals("1600.00", tareWeightValue, "Expected: Tare Weight = 1600.00");     
     
     //Wait for 3 seconds
     delay(3); 
     
     var heightValue = window.scrollViews()[1].textFields()[19].value();
     assertEquals("500.00", heightValue, "Expected: Height = 500.00"); 
     
     //Wait for 3 seconds
     delay(3); 
     
     var grossWeightValue = window.scrollViews()[1].textFields()[21].value();
     assertEquals("2600.00", grossWeightValue, "Expected: Gross Weight = 2600.00");      
 
     //Wait for 3 seconds
     delay(3); 
     
     var widthValue = window.scrollViews()[1].textFields()[22].value();
     assertEquals("400.00", widthValue, "Expected: Width = 400.00");        

     //Wait for 3 seconds
     delay(3); 
     
     var colorValue = window.scrollViews()[1].buttons()[1].label();
     assertEquals("Air Force Blue", colorValue, "Expected: Color = Air Force Blue");       

     //Wait for 3 seconds
     delay(3); 
     
     var lengthValue = window.scrollViews()[1].textFields()[24].value();
     assertEquals("600.00", lengthValue, "Expected: Width = 600.00"); 


     //Wait for 3 seconds
     delay(3); 
     
     UIALogger.logMessage("-- Machinery Inspection --");
     
     var inspectDoneValue = window.scrollViews()[1].buttons()[5].label();
     assertEquals(calculateDateForVerification(0), inspectDoneValue, "Expected: Machinery Inspect Done = Today");

     //Wait for 3 seconds
     delay(3); 
     
     var certificateNoValue = window.scrollViews()[1].textFields()[28].value();
     assertEquals("cert1234567", certificateNoValue, "Expected: Certificate No. = cert1234567");      
     
     //Wait for 3 seconds
     delay(3);
     
     var nextDueValue = window.scrollViews()[1].buttons()[9].label();
     assertEquals(calculateDateForVerification(365), nextDueValue, "Expected: Next Due = next year");
     
     //UIALogger.logMessage("-- DONE - Verified All Fields --");
     
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
