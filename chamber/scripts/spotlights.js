const newurl = './data/members.json';
const cards = document.querySelector('.businessInfo');

async function getMemberData() {
    const response = await fetch(newurl);
    const data = await response.json();
    console.table(data.members);

    const goldMembers = data.members.filter(member => member.membershipLevel === 'Gold');
    const silverMembers = data.members.filter(member => member.membershipLevel === 'Silver');

    const allMembers = goldMembers.concat(silverMembers);

    const selectedMembers = getRandomMembers(allMembers, 2);
    
    displaySpotlights(selectedMembers);
}

function getRandomMembers(members, count) {
    const shuffledMembers = members.sort(() => Math.random() - 0.5);
    return shuffledMembers.slice(0, count);
}

getMemberData();

const displaySpotlights = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let name = document.createElement('h3');
        let description = document.createElement('p');
        let webUrl = document.createElement('a');

        image.setAttribute('src', member.imageUrl);
        image.setAttribute('alt', `${member.name} Company Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '350');
        image.setAttribute('height', '350');

        name.textContent = member.name;
        description.textContent = member.description;
        
        webUrl.textContent = 'Visit Website'
        webUrl.setAttribute('href', member.url);
        webUrl.setAttribute('target', '_blank');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(webUrl);

        cards.appendChild(card);
    });
}