function injectHTML() {
    document.getElementById('container').innerHTML = '<link href="../../style.css" rel="stylesheet"><style>body {background-image: none;}</style><div id="infoWindowContainer"><div id="infoWindow"><p class="bigText" id="messageWindowTitle" style="margin-left:10px">undefinied</p><p id="messageWindowContent" style="margin-left:15px">undefinied</p><div id="infoWindowOKButtonConainer"><p class="startCenterElement" id="infoWindowOKButton">OK</p></div></div></div>'
}

injectHTML();
var infoWindow = document.getElementById('infoWindow');
var infoWindowClose = document.getElementById('infoWindowOKButton');

function showInfoWindow(type, message) {
    document.getElementById('container').style.display = "block";
    if(type === 'i') {
        document.getElementById('messageWindowTitle').innerHTML = "Information: ";
    } else if(type === 'e') {
        document.getElementById('messageWindowTitle').innerHTML = "Error: ";
    } else if(type === 'w') {
        document.getElementById('messageWindowTitle').innerHTML = "Warning: ";
    }
    document.getElementById('messageWindowContent').innerHTML = message;
    infoWindow.style.display = "block";
}
infoWindowClose.addEventListener('click', function() {
    infoWindow.style.display = "none";
    document.getElementById('container').style.display = "none";
});
