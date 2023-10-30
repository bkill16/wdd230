if (localStorage.getItem('lastVisit')) {
    const lastDate = new Date(localStorage.getItem('lastVisit'));
    const currentDate = new Date();
    const timeDifference = currentDate - lastDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        document.querySelector('#pageVisits').textContent = "Back so soon? Awesome!";
    } else if (daysDifference === 1) {
        document.querySelector('#pageVisits').textContent = "You last visited 1 day ago.";
    } else {
        document.querySelector('#pageVisits').textContent = `You last visited ${daysDifference} days ago.`;
    }
} else {
    document.querySelector('#pageVisits').textContent = "Welcome! Let us know if you have any questions."
    localStorage.setItem('lastVisit', new Date().toString());
}