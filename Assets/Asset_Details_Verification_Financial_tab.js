//#import "../lib/tuneup.js"

test("Verify Asset Details - Financial tab", function(target,app){

     checkIsMainMenu("Assets");

     UIALogger.logMessage("-- Click Details button to open Asset Details --");
     
     //Wait for 3 seconds
     delay(3);   
     
     // Select Asset = Asset Financial - Asset Financial Tab
     window.scrollViews()[0].tableViews()[0].cells()["Asset Financial - Asset Financial Tab"].tap();

     //Wait for 3 seconds
     delay(3);     
     
     // Open Asset Details using Details button
     window.scrollViews()[2].buttons()["Details"].tap();
     
     // Wait for Asset Details form opened
     waitVisible(navBar.staticTexts()["Asset Details"]);
     
     // Tap Financial tab
     window.scrollViews()[0].toolbar().buttons()["Financial"].tap();
     
     
     // Verify the following fields are not blank (i.e values can be saved into database)

     // Asset No. and Description
     var assetNoFieldValue = window.textFields()[0].value();
     assertEquals("Asset Financial", assetNoFieldValue, "Expected: Asset No. = Asset Financial");
     
     var assetDescriptionValue = window.textFields()[1].value();
     assertEquals("Asset Financial Tab", assetDescriptionValue, "Expected: Asset Description = Asset Financial Tab");

     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Purchase Details --");
     
     // Purchase Date 
     var purchaseDateValue = window.scrollViews()[1].buttons()[1].label();
     assertEquals(calculateDateForVerification(-365), purchaseDateValue, "Expected: Purchase Date = 1 year ago");
     
     //Wait for 3 seconds
     delay(3);
     
     // Purchase Costs
     var purchaseCostsValue = window.scrollViews()[1].textFields()[4].value();
     assertEquals("$1,234.56", purchaseCostsValue, "Expected: Purchase Costs = $1,234.56");
     
     //Wait for 3 seconds
     delay(3);
     
     // Order Number
     var orderNumberValue = window.scrollViews()[1].textFields()[7].value();
     assertEquals("ord123456789", orderNumberValue, "Expected: Order Number = ord123456789");
     
     //Wait for 3 seconds
     delay(3);
     
     // Supplier
     var supplierValue = window.scrollViews()[1].buttons()[3].label();
     assertEquals("Google", supplierValue, "Expected: Supplier = Google");

     //Wait for 3 seconds
     delay(3);
     
     // Initial KMs
     var initialKMvalue = window.scrollViews()[1].textFields()[10].value();
     assertEquals("4567.00", initialKMvalue, "Expected: initial KMs = 4567.00");
     
     //Wait for 3 seconds
     delay(3);
     
     // Date Received
     var dateReceivedValue = window.scrollViews()[1].buttons()[7].label();
     assertEquals(calculateDateForVerification(-364), dateReceivedValue, "Expected: Date Received = 1 day after purchase date");

     //Wait for 3 seconds
     delay(3);
 
     UIALogger.logMessage("-- Value --");    
     
     // Market Value
     var marketValue = window.scrollViews()[1].textFields()[14].value();
     assertEquals("$25,600.00", marketValue, "Expected: Market Value = $25,600.00");
     
     //Wait for 3 seconds
     delay(3);
     
     // Replacement Value
     var replacementValue = window.scrollViews()[1].textFields()[15].value();
     assertEquals("$12,500.00", replacementValue, "Expected: Replacement Value = $12,500.00");
     
     //Wait for 3 seconds
     delay(3);
     
     // Change Over Value
     //var changeOverValue = window.scrollViews()[1].textFields()[16].value();


     //Wait for 3 seconds
     delay(3);
     
     // Last Evaluation Date = last month
     var lastEvaluationDateValue = window.scrollViews()[1].buttons()[13].label();
     assertEquals(calculateDateForVerification(-30), lastEvaluationDateValue, "Expected: Last Evaluation Date = 1 month ago");
     
     //Wait for 3 seconds
     delay(3);
  
     // Next Evaluation Date = next year
     var nextEvaluationDateValue = window.scrollViews()[1].buttons()[15].label();
     assertEquals(calculateDateForVerification(365), nextEvaluationDateValue, "Expected: Next Evaluation Date = next year");
     
     UIALogger.logMessage("-- Account Information --");
     
     
     // Expected Life
     var expectedLifeValue = window.scrollViews()[1].textFields()[2].value();
     assertEquals("5.00", expectedLifeValue, "Expected: Expect Life = 5.00");   
     
     //Wait for 3 seconds
     delay(3);
     
     
     // Expected Life Hours
     var expectedLifeHoursValue = window.scrollViews()[1].textFields()[3].value();
     assertEquals("8.00", expectedLifeHoursValue, "Expected: Expected Life Hours = 8.00");
     
     //Wait for 3 seconds
     delay(3);
     
     // Salvage Value
     var salvageValue = window.scrollViews()[1].textFields()[5].value();
     assertEquals("$1,000.00", salvageValue, "Expected: Primary Tank Capacity = $1,000.00");    
    
     //Wait for 3 seconds
     delay(3);
     
     // Appreciation
     var appreciationValue = window.scrollViews()[1].textFields()[6].value();
     assertEquals("1.00%", appreciationValue, "Expected: Appreciation = 1.00%"); 

     //Wait for 3 seconds
     delay(3);

     // Depreciation Years
     var depreciationYearsValue = window.scrollViews()[1].textFields()[8].value();
     assertEquals("7.00", depreciationYearsValue, "Expected: Depreciation Years = 7.00");
     
     //Wait for 3 seconds
     delay(3);
     
     // Current Value
     var currentValue = window.scrollViews()[1].textFields()[9].value();
     assertTrue(window.scrollViews()[1].textFields()[9].isEnabled(), "Current Value textfield should be read only");
     
     //Wait for 3 seconds
     delay(3);
     
     // Depreciation Type
     var depreciationTypeValue = window.scrollViews()[1].buttons()[5].label();
     assertEquals("Sum of the Years Digits", depreciationTypeValue, "Expected: Depreciation Years = Sum of the Years Digits");
     
     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Selling Information --");
     
     // Date Sold
     var dateSoldValue = window.scrollViews()[1].buttons()[9].label();
     assertEquals(calculateDateForVerification(7), dateSoldValue, "Expected: Date Sold = next week"); 
     
     //Wait for 3 seconds
     delay(3);
 

     // Actual Resale Value
     var actualResaleValue = window.scrollViews()[1].textFields()[13].value();
     assertEquals("$22,000.00", actualResaleValue, "Expected: Actual Resale Value = $22,000.00");         
     
     //Wait for 3 seconds
     delay(3);
     
     // Replaced Vehicle
     var replacedVehicleValue = window.scrollViews()[1].buttons()[11].label();
     assertEquals("Articulated", replacedVehicleValue, "Expected: Replaced Vehicle = Articulated");       
     
     //Wait for 3 seconds
     delay(3);
     
     //UIALogger.logMessage("-- DONE - Verified All Fields --");
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();
     
     //Wait for 3 seconds
     delay(3);  
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();

     //Wait for 3 seconds
     delay(10);     
     
     });
