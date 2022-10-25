
    function settarUsuarioAtual () {
        //let id = Math.floor(Math.random() * 30)
        let id = 24
        const iconeUser = document.getElementById('fotoUsuario')

        fetch(`https://dummyjson.com/users/${id}`)
            .then ((response) => response.json())
            .then ((respJson) => {
                iconeUser.innerHTML = `<img src="${respJson.image}">`
            })
    }


    const urls = [
        'https://dummyjson.com/posts',
        'https://dummyjson.com/users'
    
    ]
 
         function gerarDivs (iconeDoAutor, nomeDoAutor, imgDoPost, tituloDoPost, conteudoDoPost) {
            //////////////////////// DIV POST
            const body = document.body
            const main = document.getElementById('main')
            const divPost = document.createElement('div')
            divPost.setAttribute('class', 'post')
            main.appendChild(divPost)
            ///////////////
            ///////////////////////////// DIV AUTOR POST
            const divAutor = document.createElement('div')
            divAutor.setAttribute('class', 'autorPost')
            const iconeAutor = document.createElement('img')
            iconeAutor.setAttribute('class', 'iconeAutorPost')
            iconeAutor.setAttribute('id', 'iconeAutor')
            const nomeAutor = document.createElement('b')
            nomeAutor.setAttribute('id', 'nomeAutor')
            divAutor.appendChild(iconeAutor)
            divAutor.appendChild(nomeAutor)
            ///////////////////////////
            const containerImgPost = document.createElement('div')
            containerImgPost.setAttribute('class', 'container-imagemPost')
            const imgPost = document.createElement('img')
            imgPost.setAttribute('src', '')
            imgPost.setAttribute('id', 'imgPost')
            containerImgPost.appendChild(imgPost)
            //////////////
            const iconesPost = document.createElement('ul')
            iconesPost.setAttribute('class', 'iconesPost')
            const liIconesPost1 = document.createElement('li')
            const liIconesPost2 = document.createElement('li')
            const liIconesPost3 = document.createElement('li')
            const liIconesPost4 = document.createElement('li')
            liIconesPost4.setAttribute('id', 'iconeSalvar')
            iconesPost.appendChild(liIconesPost1)
            iconesPost.appendChild(liIconesPost2)
            iconesPost.appendChild(liIconesPost3)
            iconesPost.appendChild(liIconesPost4)
            /////
            const divTituloPost = document.createElement('div')
            divTituloPost.setAttribute('class', 'container-textoPost')
            const tituloPost = document.createElement('h1')
            tituloPost.setAttribute('class', 'titulo')
            const conteudoPost = document.createElement('p')
            conteudoPost.setAttribute('class', 'conteudo')
            divTituloPost.appendChild(tituloPost)
            divTituloPost.appendChild(conteudoPost)
            //////////////////
            
    
            divPost.appendChild(divAutor)
            divPost.appendChild(containerImgPost)
            divPost.appendChild(iconesPost)
            divPost.appendChild(divTituloPost)
            /////////////////////////
    
            iconeAutor.src = iconeDoAutor
            nomeAutor.innerText = nomeDoAutor
            imgPost.src = imgDoPost
            tituloPost.innerText = tituloDoPost
            //tituloPost.innerHTML = `<span id='titulo'>${tituloDoPost} </span><span id='pontos'>... <div id='divLeiaMais'role='button' tabindex='0' onclick='leiaMais()' style='cursor: pointer; display: inline'>mais</div></span><span id='mais'>${conteudoDoPost}</span>`
            conteudoPost.innerText = conteudoDoPost
    
            liIconesPost1.innerHTML = `<iconify-icon icon="icon-park-solid:like" style="color: #17453E;" width="28" height="28"></iconify-icon>`
            liIconesPost2.innerHTML = `<iconify-icon icon="fa-solid:comments" style="color: #17453E;" width="28" height="28"></iconify-icon>`
            liIconesPost3.innerHTML = `<iconify-icon icon="carbon:send-alt-filled" style="color: #17453E;" width="28" height="28"></iconify-icon>`
            liIconesPost4.innerHTML = `<iconify-icon icon="heroicons-outline:save" style="color: #17453E;" width="28" height="28"></iconify-icon>`
    
        }


/*

function leiaMais () {
    let titulo = document.getElementById('titulo')
    let pontos = document.getElementById('pontos')
    let maisTexto = document.getElementById('mais')
    let divLeiaMais = document.getElementById('divLeiaMais')

    if (pontos.style.display === 'none') {
        pontos.style.display = 'inline'
        maisTexto.style.display = 'none'
        divLeiaMais.style.display='inline'
    } else {
        titulo.style.display = 'none'
        pontos.style.display = 'none'
        maisTexto.style.display= 'inline'
        divLeiaMais.style.display='none'
    }
}
*/

/*
function comentarios() {
    let titulo = document.getElementById
}
*/


window.onload = settarUsuarioAtual()
window.onload = Promise.all(urls.map(x =>
    fetch(x).then(response => response.json())
 )).then(data => {
    return data
 }).then(resp => {
    for (let i = 0; i<resp[0].posts.length; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 31)
        fetch ('https://coffee.alexflipnote.dev/random.json')
            .then(res => res.json())
            .then(jsonRes => {
                let imagem = jsonRes.file
                return imagem
            }).then(imagem =>{
                gerarDivs(resp[1].users[numeroAleatorio].image, resp[1].users[numeroAleatorio].firstName, imagem, resp[0].posts[numeroAleatorio].title, resp[0].posts[numeroAleatorio].body)
            })
        
    }
 })

