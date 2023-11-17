const url = './data/members.json';
const cards = document.querySelector('.busCards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members)
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let name = document.createElement('h2');
        let level = document.createElement('h3')
        let address1 = document.createElement('p');
        let address2 = document.createElement('p');
        let webUrl = document.createElement('a');

        image.setAttribute('src', member.imageUrl);
        image.setAttribute('alt', `${member.name} Company Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '150');
        image.setAttribute('height', '150');

        name.textContent = member.name;
        level.textContent = `Membership Level: ${member.membershipLevel}`;
        address1.textContent = member.address.street;
        address2.textContent = `${member.address.city}, 
        ${member.address.state} ${member.address.zip}`;
        
        webUrl.textContent = 'Visit Website'
        webUrl.setAttribute('href', member.url);
        webUrl.setAttribute('target', '_blank');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(level);
        card.appendChild(address1);
        card.appendChild(address2);
        card.appendChild(webUrl);

        cards.appendChild(card);
    });
}