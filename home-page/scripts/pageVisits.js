let numVisits = localStorage.getItem('numVisits');

if (numVisits == 0) {
  numVisits.textContent = `This is your first visit. Welcome!`;
} else {
  numVisits.textContent = numVisits;
}

document.getElementById('visits').textContent = numVisits;

numVisits++;
localStorage.setItem('numVisits', numVisits);
