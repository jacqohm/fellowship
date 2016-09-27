function init () {
    console.log('dom loaded')

    var body = document.querySelector('body')

var chatMessageDiv = document.createElement('div');
var info = document.createElement('div')
var img = document.createElement('img')
var username = document.createElement('div')
var message = document.createElement('div')

chatMessage.className = 'chat-message'
info.className = 'info'
img.className = 'profile-pic'
username.className = 'username'
message.className = 'message'

img.scr = 'netizen42.png'
username.textContent = 'Jacq'

message.textContent = 'I\'m hacking into the mainframe now.'


info.appendChild(img)
info.appendChild(username)
chatMessage.appendChild(info)
chatMessage.appendChild(message)
body.appendChild(chatMessageDiv)



var chatMessageAttri = document.createAttribute('class');

chatMessageAttri.value = 'chat-message';
chatMessageDiv.setAttributeNode(chatMessageAttri);


body.appendChild(chatMessageDiv);

var infoDiv = document.createElement('div');
var infoAttri = document.createAttribute('class');

infoAttri.value = 'info';
infoDiv.setAttributeNode(infoAttri);


chatMessageDiv.appendChild(infoDiv);



var imgClass = document.createElement('img');
var imgAttri = document.createAttribute('class');

infoAttri.value = 'info';
infoDiv.setAttributeNode(infoAttri);


chatMessageDiv.appendChild(infoDiv);
// // create element
// var h2 = document.createElement('h2')
// // modify content (innerHTML)
// h2.textContent = 'Hey there'
// // append it to the parent - adding it to parent
// body.appendChild(h2)









}

init();
