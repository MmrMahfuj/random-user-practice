const loadData = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}
loadData();
function displayUser(users) {

    console.log(users)
    const randomUserContainer = document.getElementById("random-user-container");
    randomUserContainer.textContent = '';
    users.forEach(user => {
        console.log(user);
        const div = document.createElement('div');
        div.classList.add('user-div', 'p-5', 'text-center', 'shadow-lg', 'rounded', 'col-md-6')
        div.innerHTML = `
            <img class="rounded-circle mx-auto d-block" src="${user.picture.large}">
            <span>Hi, My Name Is</span>
            <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
            <p>
            ${user.email}
            </p>
            <button class="bt-color border rounded">Details</button>
            <button class="bt-color border rounded" onclick="loadData()">Next</button>
        `;
        randomUserContainer.appendChild(div);

    })
}









