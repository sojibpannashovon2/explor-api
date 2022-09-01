console.log("Its working babe");
function postLodedHere() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => postAddedHere(data))
}
function postAddedHere(posts) {
    console.log(posts);
    const postDiv = document.getElementById('post-container');
    for (item of posts) {
        console.log(item)
        const createDiv = document.createElement('div');
        createDiv.classList.add('post');
        createDiv.innerHTML = `
        <h4>id:  ${item.id}  </h4>
        <h5>title:  ${item.title} </h5>
        <p>post-description:  ${item.body} </p>
        `;
        postDiv.appendChild(createDiv);
    }

}
postLodedHere();