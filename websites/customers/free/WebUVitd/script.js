
var closeStartCenter = document.getElementById('closeStartCenter');
var startCenter = document.getElementById('startCenter');
var openStartCenterButton = document.getElementById('openStartCenterButton');
var infoWindow = document.getElementById('infoWindow');
var infoWindowClose = document.getElementById('infoWindowOKButton');
var currentApp = document.getElementById('currentApp');
var closeRunningApp = document.getElementById('closeRunningApp');
//Initialization
openStartCenterButton.style.display = "none";
infoWindow.style.display = "none";
currentApp.style.display = "none";
document.getElementById('closeCurrentlyRunningApp').style.display = "none";
// Start center apps
popupStart = document.getElementById('popupStart');
// Things about the info window
function showInfoWindow(type, message) {
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
});
// Check if an app is running
function appIsRunning() {
    return currentApp.style.display === 'block';
}
// Open/close the start center
closeStartCenter.addEventListener('click', function() {
    startCenter.style.display = "none";
    openStartCenterButton.style.display = "flex";
});
openStartCenterButton.addEventListener('click', function() {
    openStartCenterButton.style.display = "none";
    startCenter.style.display = "block";
    if(appIsRunning()) {
        console.log('An app is running');
        document.getElementById('closeCurrentlyRunningApp').style.display = "block";
        startCenter.style.backdropFilter = "blur(20px)";
    } else {
        console.log('Nothing is running');
        document.getElementById('closeCurrentlyRunningApp').style.display = "none";
        startCenter.style.backdropFilter = "none";
    }
});
// Close the running app
closeRunningApp.addEventListener('click', function() {
    document.getElementById('closeCurrentlyRunningApp').style.display = "none";
    startCenter.style.backdropFilter = "none";
    currentApp.style.display = "none";
});
// When an app gets launched (not a meme)
function appLaunched() {
    startCenter.style.display = "none";
    openStartCenterButton.style.display = "flex";
    currentApp.style.display = "block";
}

popupStart.addEventListener('click', function() {
    appLaunched();
    currentApp.src = 'apps/devTests/index.html';
});