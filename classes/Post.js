function Post(id, author, date, title, text) {
    this.id = id,
    this.author = author,
    this.date = date,
    this.title = title,
    this.text = text
    this.commentList = [];
}

Post.prototype.displayShort = function() {
    const containerListaPosturi = document.createElement('div');

    containerListaPosturi.innerHTML = `
        <h1>${this.title}</h1>
        <p>${this.text.substring(0, 100)}...</p>
        <a href="./view-post.html">View</a>    
    `
    return containerListaPosturi;
}