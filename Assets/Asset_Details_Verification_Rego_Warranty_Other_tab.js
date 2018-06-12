//#import "../lib/tuneup.js"

test("Verify Asset Details - Rego/Warranty/Other tab", function(target,app){

     checkIsMainMenu("Assets");

     UIALogger.logMessage("-- Click Details button to open Asset Details --");

     //Wait for 3 seconds
     delay(3); 
     
     // Select Asset = Asset Rego - Asset Rego Tab
     window.scrollViews()[0].tableViews()[0].cells()["Asset Rego - Asset Rego Tab"].tap();

     //Wait for 3 seconds
     delay(3);     
     
     // Open Asset Details using Details button
     window.scrollViews()[2].buttons()["Details"].tap();
     
     // Wait for Asset Details form opened
     waitVisible(navBar.staticTexts()["Asset Details"]);
     
     // Tap Rego/Warranty/Other tab
     window.scrollViews()[0].toolbar().buttons()["Rego/Warranty/Other"].tap();
     
     
     // Verify the following fields are not blank (i.e values can be saved into database)

     // Asset No. and Description
     var assetNoFieldValue = window.textFields()[0].value();
     assertEquals("Asset Rego", assetNoFieldValue, "Expected: Asset No. = Asset Rego");
     
     var assetDescriptionValue = window.textFields()[1].value();
     assertEquals("Asset Rego Tab", assetDescriptionValue, "Expected: Asset Description = Asset Rego Tab");

     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Registration --");
     
     // Rego No. = 123 ABC
     var regoNoValue = window.scrollViews()[1].textFields()[2].value();
     assertEquals("123 ABC", regoNoValue, "Expected: Rego No. = 123 ABC");     
     
     //Wait for 3 seconds
     delay(3);
     
     // Inspect Date = next month
     var inspectDateValue = window.scrollViews()[1].buttons()[5].label();
     assertEquals(calculateDateForVerification(30), inspectDateValue, "Expected: Inspect Date = next month");
     
     //Wait for 3 seconds
     delay(3);
     
     // Cost = $695.95
     var costValue = window.scrollViews()[1].textFields()[6].value();
     assertEquals("$695.95", costValue, "Expected: Cost = $695.95");
     
     //Wait for 3 seconds
     delay(3);
     
     // License Code = lic123456789
     var licenseCodeValue = window.scrollViews()[1].textFields()[7].value();
     assertEquals("lic123456789", licenseCodeValue, "Expected: License Code = lic123456789");

     //Wait for 3 seconds
     delay(3);
     
     // State/Territory = QLD
     var statevalue = window.scrollViews()[1].textFields()[3].value();
     assertEquals("QLD", statevalue, "Expected: State/Territory = QLD");
     
     //Wait for 3 seconds
     delay(3);
     
     // Due Date = 23 days in the future from today
     var dueDateValue = window.scrollViews()[1].buttons()[7].label();
     assertEquals(calculateDateForVerification(23), dueDateValue, "Expected: Date Received = 23 days in the future from today");

     //Wait for 3 seconds
     delay(3);
 
     UIALogger.logMessage("-- Warranty --");    
     
     // Warranty Start Date = 7 days ago
     var warrantyStartDateValue = window.scrollViews()[1].buttons()[1].label();
     assertEquals(calculateDateForVerification(-7), warrantyStartDateValue, "Expected: Warranty Start Date = 7 days ago");
     
     //Wait for 3 seconds
     delay(3);
 
     // Warranty Finish Date = 7 days in the future from today
     var warrantyFinishDateValue = window.scrollViews()[1].buttons()[3].label();
     assertEquals(calculateDateForVerification(7), warrantyFinishDateValue, "Expected: Warranty Finish Date = 7 days in the future from today");    
     
     //Wait for 3 seconds
     delay(3);    
     
     // Warranty = 24
     var warrantyValue = window.scrollViews()[1].textFields()[4].value();
     assertEquals("24.00", warrantyValue, "Expected: Warranty = 24.00");
     
     //Wait for 3 seconds
     delay(3);
     
     // Warranty Months = 6 months
     var warrantyMonthsValue = window.scrollViews()[1].textFields()[5].value();
     assertEquals("6.00", warrantyMonthsValue, "Expected: Warranty Months = 6.00");  
     
     //Wait for 3 seconds
     delay(3);
  
     // Warranty Supplier = Ah Fai
     var warrantySupplierValue = window.scrollViews()[1].buttons()[9].label();
     assertEquals("Ah", warrantySupplierValue, "Expected: Warranty Supplier = Ah");     
     
     UIALogger.logMessage("-- Other --");
     
     // Financial Asset No. = fan123456789
     var financialAssetNoValue = window.scrollViews()[1].textFields()[9].value();
     assertEquals("fan123456789", financialAssetNoValue, "Expected: Financial Asset No. = fan123456789");   
     
     //Wait for 3 seconds
     delay(3);
     
     // Security No. = sec123456789
     var securityNoValue = window.scrollViews()[1].textFields()[10].value();
     assertEquals("sec123456789", securityNoValue, "Expected: Security No. = sec123456789");
     
     //Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- Insurance Details --");
     
     // Insurance Value = $123,456,789.00
     var insuranceValue = window.scrollViews()[1].textFields()[13].value();
     assertEquals("$123,456,789.00", insuranceValue, "Expected: Insurance Value = $123,456,789.00");    
    
     //Wait for 3 seconds
     delay(3);
     
     // Renewal = Next Year
     var renewalValue = window.scrollViews()[1].buttons()[11].label();
     assertEquals(calculateDateForVerification(365), renewalValue, "Expected: Renewal = Next Year");  

     //Wait for 3 seconds
     delay(3);

     // Company = Ali SAGIRKAYA
     var companyValue = window.scrollViews()[1].buttons()[14].label();
     assertEquals("Ali", companyValue, "Expected: Company = Ali SAGIRKAYA");
     
     //Wait for 3 seconds
     delay(3);
     
     // Policy No.
     var policyNoalue = window.scrollViews()[1].textFields()[15].value();
     assertEquals("pol123456789", policyNoalue, "Expected: Policy No. = pol123456789");
     
     //Wait for 3 seconds
     delay(3);
     
     // Premium = $108.95
     var premiumValue = window.scrollViews()[1].textFields()[16].value();
     assertEquals("$108.95", premiumValue, "Expected: Premium = $108.95");
     
     //Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- FBT --");     
     
     // Private Use
     assertTrue(window.scrollViews()[1].buttons()[" Private Use"].isSelected(), "Private Use checkbox should be ticked"); 
 
     //Wait for 3 seconds
     delay(3);    

     // FBT Rate
     var fbtRateValue = window.scrollViews()[1].textFields()[14].value();
     assertEquals("$120.88", fbtRateValue, "Expected: FBT Rate = $120.88");         
     
     //Wait for 3 seconds
     delay(3);
          
     UIALogger.logMessage("-- DONE - Verified All Fields --");
     
     // Close back to Asset Register
     navBar.buttons()["Assets"].tap();
     
     //Wait for 3 seconds
     delay(3);  
     
     // Close back to Main Menu
     navBar.buttons()["Menu"].tap();

     //Wait for 3 seconds
     delay(10);  
     });
