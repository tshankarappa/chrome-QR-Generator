function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    var urls = new URL(tab.url);
    var domain = urls.hostname;
    callback(url, domain);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url, domain) => {
    if(url.length<300)
      var qrcode = new QRCode(document.getElementById("qrcode"), { width: 200,height: 200});
    else
      var qrcode = new QRCode(document.getElementById("qrcode"), { width: 300,height: 300});
    qrcode.makeCode(url);
  });
});

