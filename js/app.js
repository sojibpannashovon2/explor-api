
function loadData2() {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(json => console.log(json))
}

function userDisplay() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    console.log(data);
}