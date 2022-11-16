chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.message=="A"){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {            
        chrome.tabs.sendMessage(tabs[0].id,{cmd:"B",content:""}, function(response) {});
        
    })
      
}

  });
chrome.tabs.onCreated.addListener(function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {            
        chrome.tabs.sendMessage(tabs[0].id,{cmd:"onCreated",content:""}, function(response) {});
})
})
chrome.tabs.onUpdated.addListener(function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {            
        chrome.tabs.sendMessage(tabs[0].id,{cmd:"onUpdated",content:""}, function(response) {});
      })
})
chrome.tabs.onActivated.addListener(function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {            
      chrome.tabs.sendMessage(tabs[0].id,{cmd:"onActivated",content:""}, function(response) {});
    })
})