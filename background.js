chrome.runtime.onInstalled.addListener(function() {

    // chrome.browserAction.onClicked.addListener(function(tab) { 

        
    // }); 

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostContains: 'cnpq.br'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
});