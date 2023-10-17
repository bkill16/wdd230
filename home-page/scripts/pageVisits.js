let numVisits = localStorage.getItem('numVisits');

numVisits.textContent = numVisits

document.getElementById('visits').textContent = numVisits;

numVisits++;
localStorage.setItem('numVisits', numVisits);
