const fetchApi  = new FetchApi('http://localhost:3000');

// console.log('local server: ', fetchApi);
// console.log(fetchApi.getPosts());

// afisarea posturilor cu async await
async function displayPosts() {
    const postsServer = await fetchApi.getPosts();

    const listaPosturi = [];
    for (let i=0; i<postsServer.length; i++) {
        const postServer = postsServer[i];
        const post = new Post (
            postServer.id,
            postServer.author,
            postServer.date,
            postServer.title,
            postServer.text
        );
        listaPosturi.unshift(post);
    }
    console.log(listaPosturi);

    for (let i=0; i<listaPosturi.length; i++) {
        const postare = listaPosturi[i].displayShort();
        document.getElementById('listOfPost').appendChild(postare);
    }
}
displayPosts();


// // afisarea posturilor cu promise
// function callBackFunctionDisplayPost(postsServer){
//     const listaPosturi = [];
//     for(let i=0; i<postsServer.length; i++){
//         const postServer = postsServer[i];
//         const post = new Post (
//         postServer.id,
//         postServer.author,
//         postServer.date,
//         postServer.title,
//         postServer.text
//         );
//     listaPosturi.unshift(post);
//     }
//     console.log(listaPosturi);
    
//     for (let i=0; i<listaPosturi.length; i++) {
//         const postare = listaPosturi[i].displayShort();
//         document.getElementById('listOfPost').appendChild(postare);
//     }
// }

// fetchApi.getPosts().then(callBackFunctionDisplayPost);