



function settarUsuarioAtual () {
    //let id = Math.floor(Math.random() * 100)
    let id = 24
    const iconeUser = document.getElementById('fotoUsuario')
    const iconePerfil = document.getElementById('fotoUsuarioPerfil')
    fetch(`https://dummyjson.com/users/${id}`)
        .then ((response) => response.json())
        .then ((respJson) => {
            iconeUser.innerHTML = `<img src="${respJson.image}">`
            iconePerfil.setAttribute('src', `${respJson.image}`)
        })
}


function configMapa (lat, long) {
    let map = L.map('map').setView([lat, long], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, long]).addTo(map)
        .bindPopup(`Localização`)
        .openPopup();

}

function settarMapa () {
    let id = 24
    fetch(`https://dummyjson.com/users/${id}`)
        .then ((response) => response.json())
        .then ((respJson) => {
            configMapa(respJson.address.coordinates.lat, respJson.address.coordinates.lng)
        })
}




window.onload = settarUsuarioAtual()
window.onload = settarMapa()