let lastVisit = localStorage.getItem('lastVisit');

let message = "Welcome! Let us know if you have any questions.";

if (lastVisit) {

  lastVisit = new Date(lastVisit);
  
  const daysDiff = Math.floor((new Date() - lastVisit) / (1000 * 60 * 60 * 24));  

  if(daysDiff < 1) {
    message = "Back so soon? Awesome!";
  } else if (daysDiff === 1){ 
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${daysDiff} days ago.`;  
  }

}

document.querySelector('#pageVisits').textContent = message;

localStorage.setItem('lastVisit', new Date());