//#import "../lib/tuneup.js"

test("Verify Asset Details - Extended tab", function(target,app){

     checkIsMainMenu("Assets");
     
     // Select Asset = MEX iPad
     window.scrollViews()[0].tableViews()[0].cells()["Asset Extended - Asset Extended Tab"].tap();

     //Wait for 3 seconds
     delay(3);    
     
     // Open Asset Details using Details button
     window.scrollViews()[2].buttons()["Details"].tap();
     
     // Wait for Asset Details form opened
     waitVisible(navBar.buttons()["Assets"]);

     // Tap Extended tab
     window.scrollViews()[0].toolbar().buttons()["Extended"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     // Verify the following fields are not blank (i.e values can be saved into database)

     // Asset No. and Description
     var assetNoFieldValue = window.textFields()[0].value();
     assertEquals("Asset Extended", assetNoFieldValue, "Expected: Asset No. = Asset Extended");

     //Wait for 3 seconds
     delay(3);
    
     var assetDescriptionValue = window.textFields()[1].value();
     assertEquals("Asset Extended Tab", assetDescriptionValue, "Expected: Asset Description = Asset Extended Tab");

     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Miscellaneous --");
     
     // Serial Number     
     var serialNumberValue = window.scrollViews()[1].textFields()[2].value();
     assertEquals("sn123456789", serialNumberValue, "Expected: Serial Number = sn123456789");

     //Wait for 3 seconds
     delay(3);
     
     // Barcode Number     
     var barcodeNumberValue = window.scrollViews()[1].textFields()[4].value();
     assertEquals("bn123456789", barcodeNumberValue, "Expected: Barcode Number = bn123456789");
     
     //Wait for 3 seconds
     delay(3);
     
     // Financial Asset Number
     var financialAssetNumberValue = window.scrollViews()[1].textFields()[6].value();
     assertEquals("fan123456789", financialAssetNumberValue, "Expected: Financial Asset Number = fan123456789");    
    
     //Wait for 3 seconds
     delay(3);
     
     // Available Per Week
     var availablePerWeekValue = window.scrollViews()[1].textFields()[8].value();
     assertEquals("7.50", availablePerWeekValue, "Expected: Available per Week = 7.50");      
     
     //Wait for 3 seconds
     delay(3);

     UIALogger.logMessage("-- Dimensions --");     
     
     // Dimensions Heights
     var heightsValue = window.scrollViews()[1].textFields()[3].value();
     assertEquals("1.55", heightsValue, "Expected: Dimensions Height = 1.55");   

     //Wait for 3 seconds
     delay(3);
     
     // Dimensions Width
     var widthValue = window.scrollViews()[1].textFields()[5].value();
     assertEquals("2.55", widthValue, "Expected: Comments = Dimensions Width = 2.55");  
     
     //Wait for 3 seconds
     delay(3);

     // Dimensions Depth
     var depthValue = window.scrollViews()[1].textFields()[7].value();
     assertEquals("3.55", depthValue, "Expected: Comments = Dimensions Width = 3.55");  
     
     //Wait for 3 seconds
     delay(3);
    
     // Dimensions Weight
     var weightValue = window.scrollViews()[1].textFields()[9].value();
     assertEquals("4.55", weightValue, "Expected: Comments = Dimensions depth = 4.55");  
     
     //Wait for 3 seconds
     delay(3);
 
     UIALogger.logMessage("-- Address --");    
     
     // Address - Address Line 1
     var addr1Value = window.scrollViews()[1].textFields()[11].value();
     assertEquals("320-326 ipswich road", addr1Value, "Expected: Address Line 1 = 320-326 ipswich road");  
     
     //Wait for 3 seconds
     delay(3);    
     
     // Address - Address Line 2
     var addr2Value = window.scrollViews()[1].textFields()[12].value();
     assertEquals("Annerley", addr2Value, "Expected: Address Line 2 = Annerley");  
     
     //Wait for 3 seconds
     delay(3);
     
     // Address - City
     var cityValue = window.scrollViews()[1].textFields()[13].value();
     assertEquals("Brisbane", cityValue, "Expected: City = Brisbane");
     
     //Wait for 3 seconds
     delay(3);
     
     // Address - State
     var stateValue = window.scrollViews()[1].textFields()[14].value();
     assertEquals("QLD", stateValue, "Expected: State = QLD");

     //Wait for 3 seconds
     delay(3);
     
     // Address - Country
     var countryValue = window.scrollViews()[1].textFields()[15].value();
     assertEquals("Australia", countryValue, "Expected: Country = Australia");
 
     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Criticality --");   
     
     // Criticality - Safety
     assertTrue(window.scrollViews()[1].buttons()[" Safety"].isSelected(), "Safety checkbox should be ticked");

     //Wait for 3 seconds
     delay(3);    
     
     // Criticality - Environmental   
     assertTrue(window.scrollViews()[1].buttons()[" Environmental"].isSelected(), "Environmental checkbox should be ticked");
     
     
     //Wait for 3 seconds
     delay(3);
     
     // Criticality - Compliance
     assertTrue(window.scrollViews()[1].buttons()[" Compliance"].isSelected(), "Compliance checkbox should be ticked");
     
     //Wait for 3 seconds
     delay(3);
     
     // Criticality - Quality
     assertTrue(window.scrollViews()[1].buttons()[" Quality"].isSelected(), "Quality checkbox should be ticked");
     
     //Wait for 3 seconds
     delay(3);
     
     // Criticality - Operational
     assertTrue(window.scrollViews()[1].buttons()[" Operational"].isSelected(), "Operational checkbox should be ticked");
     
     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Verify Height in Vehicle Information --");  
     
     // Check Dimension Height and Width are copied over to Vehicle Information tab
     // Tap Extended tab
     window.scrollViews()[0].toolbar().buttons()["Vehicle Information"].tap();

     //Wait for 3 seconds
     delay(3);
     
     // Weight/Dimensions - Height
     var vehicleHeightValue = window.scrollViews()[1].textFields()[19].value();
      assertEquals("1.55", vehicleHeightValue, "Expected: Vehicle Dimension Height = 1.55");    
     
     //Wait for 3 seconds
     delay(3);
     
     // Weight/Dimensions - Width
     var vehicleWidthValue = window.scrollViews()[1].textFields()[22].value();
     assertEquals("2.55", vehicleWidthValue, "Expected: Vehicle Dimension Width = 2.55");   
     
     //Wait for 3 seconds
     delay(3);
     
     UIALogger.logMessage("-- Verify Financial Asset No in Rego/Warranty/Other --");  
     
     // Check Financial Asset No. is copied over to Rego/Warranty/Other tab
     // Tap Rego/Warranty/Other tab
     window.scrollViews()[0].toolbar().buttons()["Rego/Warranty/Other"].tap();
     
     //Wait for 3 seconds
     delay(3);
     
     var regoFinancialAssetNoValue = window.scrollViews()[1].textFields()[9].value();
     assertEquals("fan123456789", regoFinancialAssetNoValue, "Expected: Financial Asset No. = fan123456789"); 
     
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
