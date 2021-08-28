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
            Email: ${user.email}
            </p>
            <ul id="detail-list" class="text-start d-none">
                <li>
                    Cell: ${user.cell}
                </li>
                <li>
                    Birth Day: ${user.dob.date}, Age: ${user.dob.age}, Gender: ${user.gender}
                </li>
                <li>
                    City: ${user.location.city}
                </li>
                <li>
                    ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}
                </li>
                <li>
                    Country: ${user.location.country}
                </li>
                <li>
                    Post Code: ${user.location.postcode}
                </li>
                <li>
                    State: ${user.location.state}
                </li>
                <li>
                    Street Number: ${user.location.street.number}, Street Name: ${user.location.street.name}
                </li>
                <li>
                    Phone: ${user.phone}
                </li>
    </ul>
            <button class="bt-color border rounded" onclick="detailsDisplay()">Details</button>
            <button class="bt-color border rounded" onclick="loadData()">Next</button>
        `;
        randomUserContainer.appendChild(div);

    })
}


const detailsDisplay = () => {
    const detailList = document.getElementById('detail-list');
    detailList.classList.remove('d-none');
}





