currentTime = new Date();
var year = currentTime.getFullYear();
document.getElementById('date').innerHTML = year;

let dateLastModified = new Date(document.lastModified);
document.getElementById('lastModified').innerHTML = dateLastModified;
