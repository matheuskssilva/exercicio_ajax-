document.addEventListener('DOMContentLoaded', function() {
    const public_repos = document.getElementById('repositorio')
    const following = document.getElementById('seguidores')
    const followers = document.getElementById('seguindo')
    const nome = document.getElementById('nome')
    const nomeUsuario = document.getElementById('nomeUsuario')
    const avatar_url = document.getElementById('avatar')
    const url = document.getElementById('link')


    const endPoint = `https://api.github.com/users/ogiansouza`
    try {
        fetch(endPoint)
            .then(function(resposta) {
                return resposta.json()

            })
            .then(function(json) {
                public_repos.innerText = json.public_repos
                following.innerText = json.following
                followers.innerText = json.followers
                nome.innerText = json.name
                nomeUsuario.innerText = json.login
                avatar_url.src = json.avatar_url
                url.href = json.html_url
            })
    } catch (error) {
        alert('Ocorreu um erro ao buscar o perfil do Github')
    }

})