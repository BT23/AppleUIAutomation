function test(title, f, options) {
    if (options == null) {
        options = {
        logTree: true
        };
    }
    target = UIATarget.localTarget();
    application = target.frontMostApp();
    UIALogger.logStart(title);
    try {
        f(target, application);
        UIALogger.logPass(title + " - Test Passed");
    }
    catch (e) {
        UIALogger.logError(e.message);
        //if (options.logTree) target.logElementTree();
        target.logElementTree();
        UIALogger.logFail(title + " - Test failed");
        throw e;
    }
};
 
/**
 * Asserts that the given expression is true and throws an exception with
 * a default message, or the optional +message+ parameter
 */
function assertTrue(expression, message) {
    if (! expression) {
        if (! message) {
            message = "Assertion failed";
        }
        throw new AssertionException(message);
    }
}

/**
 * Asserts that the given regular expression matches the result of the
 * given message.
 * @param pattern - the pattern to match
 * @param expression - the expression to match against
 * @param message - an optional string message
 */
function assertMatch(regExp, expression, message) {
    var defMessage = "'" + expression + "' does not match '" + regExp + "'";
    assertTrue(regExp.test(expression), message ? message + ": " + defMessage : defMessage);
}

/**
 * Assert that the +received+ object matches the +expected+ object (using
 * plain ol' ==). If it doesn't, this method throws an exception with either
 * a default message, or the one given as the last (optional) argument
 */
function assertEquals(expected, received, message) {
    var defMessage = "Expected <" + expected + "> but received <" + received + ">";
    assertTrue(expected == received, message ? message + ": " + defMessage : defMessage);
}

/**
 * Assert that the +received+ object does not matches the +expected+ object (using
 * plain ol' !=). If it doesn't, this method throws an exception with either
 * a default message, or the one given as the last (optional) argument
 */
function assertNotEquals(expected, received, message) {
    var defMessage = "Expected not <" + expected + "> but received <" + received + ">";
    assertTrue(expected != received, message ? message + ": " + defMessage : defMessage);
}

/**
 * Asserts that the given expression is false and otherwise throws an
 * exception with a default message, or the optional +message+ parameter
 */
function assertFalse(expression, message) {
    assertTrue(! expression, message);
}

/**
 * Asserts that the given object is null or UIAElementNil (UIAutomation's
 * version of a null stand-in). If the given object is not one of these,
 * an exception is thrown with a default message or the given optional
 * +message+ parameter.
 */
function assertNull(thingie, message) {
    var defMessage = "Expected a null object, but received <" + thingie + ">";
    // TODO: string-matching on UIAElementNil makes my tummy feel bad. Fix it.
    assertTrue(thingie === null || thingie.toString() == "[object UIAElementNil]",
               message ? message + ": " + defMessage : defMessage);
}

/**
 * Asserts that the given object is not null or UIAElementNil (UIAutomation's
 * version of a null stand-in). If it is null, an exception is thrown with
 * a default message or the given optional +message+ parameter
 */
function assertNotNull(thingie, message) {
    var defMessage = "Expected not null object";
    assertTrue(thingie !== null && thingie.toString() != "[object UIAElementNil]",
               message ? message + ": " + defMessage : defMessage);
}

 
/*
 * Utils
 */
 
function delay(seconds) {
    UIATarget.localTarget().delay(seconds);
}
 
function tapTab(name) {
    var window = UIATarget.localTarget().frontMostApp().mainWindow();
    window.tabBar().buttons()[name].tap();
}
 
// Poll till the item becomes visible, up to a specified timeout
function waitVisible(element) {
    waitForVisible(element, 5, 0.25);
}
 
function waitForVisible(element, timeout, step) {
    if (step == null) {
        step = 0.5;
    }
    
    var stop = timeout/step;
    
    for (var i = 0; i < stop; i++) {
        delay(step); // for the animation
        if (element.isVisible()) {
            return;
        }
    }
    element.logElement();
    throw("Not Visible");
}
 
// Allows you to scroll to an element with a particular name and tap it.
function scrollToElementWithNameAndTap(scrollView, name) {
    var elementArray = scrollView.elements();
    if (scrollView instanceof UIATableView) {
        scrollToCellWithNameAndTap(scrollView, name);
        return;
    } else if (! (scrollView instanceof UIAScrollView)) {
		throw ("Expected a UIAScrollView");
	}
    
	var e = elementArray.scrollToElementWithName(name);
	waitForVisible(e, 5, 0.25);
	e.tap();
}
 
// Allows you to scroll to an cell with a particular name and tap it.
function scrollToCellWithNameAndTap(tableView, name) {
    var cellArray = tableView.cells();
	if (! (tableView instanceof UIATableView)) {
		throw ("Expected a UIAScrollView");
	}
    
    var e = cellArray.firstWithName(name);
	waitForVisible(e, 5, 0.25);
	e.tap();
}
 
UIAScrollView.prototype.scrollToElementWithNameAndTap = function(name){
    scrollToElementWithNameAndTap(this,name)
};
 
function dumpElements(elements) {
    for (var i in elements) {
        UIALogger.logDebug(elements[i].toString());
    }
}