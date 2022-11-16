$(window).on("load",function(){
    $("#btn").on("click",function(){
        console.log("button clicked")
        try {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {              
              chrome.tabs.sendMessage(tabs[0].id,{cmd:"from_popup",content:"message from popup"}, function(response) {});
              
            })
          }
          catch (e) {
            console.warn(e);
          }
    })
})