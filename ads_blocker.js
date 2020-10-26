// button Id for closing ads dialogue
const closeDialogueButtonId = 'button:i';
const overlayAdCloseButtonClassName = '.ytp-ad-overlay-close-button';
const skipAdsButton = '.ytp-ad-skip-button ytp-button';
// configuration of the mutation observer
const mutationObserverConfig = { childList: true, 
    characterData: false, 
    attributes: false };

// Function that trigger a click event for button
const triggerButtonClicker = function(buttonName, isClassName) {
    if (isClassName == true) {
        var buttonElement = document.querySelector(buttonName);   
    } else {
        var buttonElement = document.getElementById(buttonName);
    }

    if (buttonElement !== null) {
        buttonElement.click();
    }
}

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.addedNodes.length > 0) {
            triggerButtonClicker(overlayAdCloseButtonClassName, true);
            triggerButtonClicker(skipAdsButton, true);
            triggerButtonClicker(closeDialogueButtonId, false);
            break;
        }
    }
};

var adsModule = document.querySelector(".ytp-ad-module");
var observer = new MutationObserver(callback);
observer.observe(adsModule, mutationObserverConfig);
