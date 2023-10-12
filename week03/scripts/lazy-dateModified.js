const today = new Date();
var year = today.getFullYear();
document.getElementById('date').innerHTML = year;

let dateLastModified = document.lastModified;
document.getElementById('last-modified').innerHTML = dateLastModified;