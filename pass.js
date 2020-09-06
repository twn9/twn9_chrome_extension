
document.getElementById('submit').addEventListener('click', save_password())
function save_password(){
    let first = document.getElementById('password').value
    let second = document.getElementById('confirm').value
    if (first == second){
        chrome.storage.sync.set({key: first});
        alert('password saved')
        window.location = "popup.html"
    }
    else{
        alert('Password did not match')
    }
}