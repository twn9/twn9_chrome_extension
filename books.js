window.onload = function(){
    load()
}

function load(){
    chrome.storage.sync.get({ urlList: [] }, function (items) {
      for (var i = 0; i < items.urlList.length; i++) {
        var url = items.urlList[i];

        let a = document.createElement('a')
        let list = document.getElementById('list')
        let link = document.createElement('li')

        a.text = url
        a.href = url
        a.target = '_blank'
        link.appendChild(a)
        list.appendChild(link)

        add_x()
      }
  });
}

function add_x(){
    let Nodelist = document.getElementsByTagName("LI");
    let i;
    for (i = 0; i < Nodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        Nodelist[i].appendChild(span);
    }
}

// document.getElementsByClassName('close').addEventListener('click', remove)
function remove(){
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
  }
}
}



var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

document.getElementById('clear').addEventListener('click', clear_storage)
function clear_storage(){
    chrome.storage.sync.clear()
    document.getElementById('list').innerHTML = ''
}