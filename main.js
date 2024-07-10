document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const followersElement = document.querySelector('#followers');
    const linkElement = document.querySelector('#link');
    const followingElement = document.querySelector('#following');
    const reposElement = document.querySelector('#repos');


    fetch('https://api.github.com/users/herbaszl')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
})