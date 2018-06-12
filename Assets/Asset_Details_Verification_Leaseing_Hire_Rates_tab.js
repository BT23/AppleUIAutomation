//#import "../lib/tuneup.js"

test("Verify Asset Details - Leaseing/Hire Rates tab", function(target,app){

     checkIsMainMenu("Assets");
     
     // Select Asset = Asset Leasing - Asset Leasing Tab
     window.scrollViews()[0].tableViews()[0].cells()["Asset Leasing - Asset Leasing Tab"].tap();

     //Wait for 3 seconds
     delay(3);     
     
     // Open Asset Details using Details button
     window.scrollViews()[2].buttons()["Details"].tap();
     
     // Wait for Asset Details form opened
     waitVisible(navBar.buttons()["Assets"]);
     
     // Verify the following fields are not blank (i.e values can be saved into database)

     // Asset No. and Description
     var assetNoFieldValue = window.textFields()[0].value();
     assertEquals("Asset Leasing", assetNoFieldValue, "Expected: Asset No. = Asset Leasing");
     
     var assetDescriptionValue = window.textFields()[1].value();
     assertEquals("Asset Leasing Tab", assetDescriptionValue, "Expected: Asset Description = Asset Leasing Tab");

     //Wait for 3 seconds
     delay(3);
     
     // Tap Leasing/Hire Rates tab
     window.scrollViews()[0].toolbar().buttons()["Leasing/Hire Rates"].tap();     
     
     //Wait for 3 seconds
     delay(3);     
     
     // Finance Company     
     var financeCompanyValue = window.scrollViews()[1].buttons()[2].label();
     assertEquals("Anthony", financeCompanyValue, "Expected: Finance = Anthony  Weaver");

     //Wait for 3 seconds
     delay(3);
     
     // Lease Commenced
     var leaseCommencedValue = window.scrollViews()[1].buttons()[4].label();
     assertEquals(calculateDateForVerification(3), leaseCommencedValue, "Expected: Lease Commenced = 3 days later from today");
     
     //Wait for 3 seconds
     delay(3);
     
     // Lease Finished
     var leaseFinishedValue = window.scrollViews()[1].buttons()[6].label();
     assertEquals(calculateDateForVerification(33), leaseFinishedValue, "Expected: Lease Finished = next month");
     
     //Wait for 3 seconds
     delay(3);
     
     // Residual Value
     var residualValue = window.scrollViews()[1].textFields()[5].value();
     assertEquals("$320,000.00", residualValue, "Expected: Residual Value = $320,000.00");

     //Wait for 3 seconds
     delay(3);
     
     // Payment Date of Month
     var paymentDateOfMonthValue = window.scrollViews()[1].textFields()[2].value();
     assertEquals("15", paymentDateOfMonthValue, "Expected: Payment Date Of Month = 15");
     
     //Wait for 3 seconds
     delay(3);
     
     // Number of Payments
     var numberOfPaymentsValue = window.scrollViews()[1].textFields()[3].value();
     assertEquals("108", numberOfPaymentsValue, "Expected: Customer = 108");

     //Wait for 3 seconds
     delay(3);
     
     // Repayment Amount
     var repaymentAmountValue = window.scrollViews()[1].textFields()[4].value();
     assertEquals("$800.00", repaymentAmountValue, "Expected: Contractor = $800.00");
     
     //Wait for 3 seconds
     delay(3);
     
     // Total of Lease Payments
     var totalOfLeasePaymentsValue = window.scrollViews()[1].textFields()[6].value();
     assertEquals("$86,400.00", totalOfLeasePaymentsValue, "Expected: Total of Lease Payments = $86,400.00");
     
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
