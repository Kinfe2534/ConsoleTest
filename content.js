// initialize 
$(window).on("load",function(){
    chrome.storage.local.get([`${window.location.origin}`], function (result) {
        if (result[window.location.origin] == undefined) {
            chrome.storage.local.set({
                [window.location.origin]: false
            }, function () { });
        }
    });
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.cmd == "from_popup") {
        chrome.storage.local.get([`${window.location.origin}`],function(result){
            if(result[window.location.origin]){
                console.log(result[window.location.origin])
                chrome.storage.local.set({[window.location.origin]:false})
                $("#console").remove()
            }else{                
                console.log(result[window.location.origin])
                chrome.storage.local.set({[window.location.origin]:true})
                let console_ele = "<div id='console'><iframe id='iframe' style='width:300px;height:350px;' src='" + chrome.runtime.getURL('console/dist/console/index.html') + "'></iframe></div>"
                $("body").append(console_ele);
                
            }
        })
   

    }else if(request.cmd=="onCreated"){
        console.log("onCreated")
        chrome.storage.local.get([`${window.location.origin}`],function(result){
            if(result[window.location.origin]){
                if ($("#console").length == 0) {
                    let console_ele = "<div id='console'><iframe id='iframe' style='width:300px;height:350px;' src='" + chrome.runtime.getURL('console/dist/console/index.html') + "'></iframe></div>"
                    $("body").append(console_ele);
                }
            }else{     
                $("#console").remove()
            }
        })
    }else if(request.cmd=="onUpdated"){
        console.log("onUpdated")
        chrome.storage.local.get([`${window.location.origin}`],function(result){
            if(result[window.location.origin]){
                if ($("#console").length == 0) {
                    let console_ele = "<div id='console'><iframe id='iframe' style='width:300px;height:350px;' src='" + chrome.runtime.getURL('console/dist/console/index.html') + "'></iframe></div>"
                    $("body").append(console_ele);
                }
            }else{     
                $("#console").remove()
            }
        })
    }else if(request.cmd=="onActivated"){
        console.log("onActivated")
        chrome.storage.local.get([`${window.location.origin}`],function(result){
            if(result[window.location.origin]){
                if ($("#console").length == 0) {
                    let console_ele = "<div id='console'><iframe id='iframe' style='width:300px;height:350px;' src='" + chrome.runtime.getURL('console/dist/console/index.html') + "'></iframe></div>"
                    $("body").append(console_ele);
                }
            }else{     
                $("#console").remove()
            }
        })

    }
});
window.addEventListener("message",(event)=>{
    event.source.window.postMessage("to iframe","*")
})
