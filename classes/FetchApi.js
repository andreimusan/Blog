function FetchApi(baseServerUrl) {
    this.baseServerUrl = baseServerUrl;
}

FetchApi.prototype.getPosts = function(url) {
    return fetch(`${this.baseServerUrl}/posts`).then(
        function (response) {
            // console.log('raspuns de la server: ', response);
            return response.json(); 
        })
}