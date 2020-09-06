
document.getElementById('add').addEventListener('click', add_url)
function add_url(){
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
    function(tabs){
      let url = tabs[0].url; 
      store(url)
    }
 );
}


//save work space so record all url of save point
//add juke password feature
function store(url){
  chrome.storage.sync.get({ urlList: [] }, function (items) {
    items.urlList.push(url);
    chrome.storage.sync.set({ urlList: items.urlList });
});
}


document.getElementById('pin').addEventListener('keyup', function(event){
  // document.getElementById('submit').click()
    if(event.keyCode === 13){
      event.preventDefault
      document.getElementById('submit').click()

    }
})


document.getElementById('submit').addEventListener('click', validate)
function validate(){
    let pin = document.getElementById('pin').value
    chrome.storage.sync.get(['key'], function(result) {
    if (pin != result.key){
      alert(pin)
    }
    else{
      window.location = "book.html"
    }
  });
}

chrome.runtime.onInstalled.addListener(function(event){
  if(event.reason == 'install'){
      window.location = 'pass.html'
  }
  else if(event.reason == 'update'){

  }
})
