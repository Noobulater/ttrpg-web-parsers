chrome.runtime.onMessage.addListener(function(request, sender) {
  var message = $('#message');
  if (request.action == "getSource") {
    message.val(request.source);
  }
});

function onWindowLoad() {
  var message = $('#message');

  chrome.tabs.executeScript(null, {
    file: "getPageSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.val('There was an error injecting script : \n' + chrome.runtime.lastError.message);
    }
  });

}

window.onload = onWindowLoad;
