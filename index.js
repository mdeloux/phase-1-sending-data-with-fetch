// Add your code here
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: 'Steve',
        email: 'steve@steve.com'
    }),
};



function submitData() {
    return fetch('http://localhost:3000/users', configurationObject)
        .then(response => response.json())
        .then(data => userInfo(data))
        .catch(err => errorInfo(err.message))
}

function userInfo(data) {
    debugger;
    const body = document.body;
    const h3 = document.createElement('h3');
    h3.innerHTML = data.id;
    body.appendChild(h3);

}

function errorInfo(err) {
    const body = document.body;
    const h4 = document.createElement('h4');
    h4.innerHTML = err;
    body.appendChild(h4);
}

submitData();