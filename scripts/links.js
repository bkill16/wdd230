const baseURL = "https://bkill16.github.io/wdd230/";
const linksURL = "https://bkill16.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch (linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
    const ul = document.createElement("ul");
    weeks.forEach((week, index) => {
        const li = document.createElement("li");
        const weekHeader = document.createElement("h3");
        weekHeader.textContent = week.week;
        
        const weekLinks = week.links.map(link => {
            const linkURL = link.url.startsWith("http") ? link.url : baseURL + link.url;
            return `<a href="${linkURL}">${link.title}</a>`;
        }).join('<span> | </span>');
        li.innerHTML = `${weekHeader.innerHTML}: ${weekLinks}`;
        ul.appendChild(li);
    });

    const parent = document.querySelector(".card");
    parent.appendChild(ul);
};