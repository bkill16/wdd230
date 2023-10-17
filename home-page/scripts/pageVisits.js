let numVisits = localStorage.getItem('numVisits');

document.getElementById('visits').textContent = numVisits;

numVisits++;
localStorage.setItem('numVisits', numVisits);
